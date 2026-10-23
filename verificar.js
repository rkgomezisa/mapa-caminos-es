#!/usr/bin/env node
/* =====================================================================
   VERIFICACIÓN DEL CONTENIDO
   ---------------------------------------------------------------------
   Uso:  node verificar.js
   Comprueba que datos.js:
     1. tiene un formato válido (se puede leer sin errores);
     2. es coherente: cada regla apunta a preguntas, respuestas y
        condiciones que existen, y cada {cifra} está definida;
     3. produce lo esperado en los tres recorridos de ejemplo.
   Termina con código 1 si algo falla (así lo marca GitHub en rojo).

   IMPORTANTE: las funciones cumple() y evaluar() de abajo son copia de
   las de index.html. Si cambia la lógica del árbol en index.html,
   hay que actualizarlas también acá.
   ===================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const errores = [];
const avisos = [];
const error = m => errores.push(m);
const aviso = m => avisos.push(m);

/* ---------- 1. leer datos.js ---------- */
let D;
try {
  const codigo = fs.readFileSync(path.join(__dirname, "datos.js"), "utf8");
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(codigo + "\n;globalThis.__D = DATOS;", ctx, { filename: "datos.js" });
  D = ctx.__D;
} catch (e) {
  const linea = (e.stack || "").match(/datos\.js:(\d+)/);
  console.error(`✕ datos.js no se puede leer${linea ? ` (cerca de la línea ${linea[1]})` : ""}: ${e.message}`);
  console.error("  Revisá comas, comillas y llaves en el último cambio.");
  process.exit(1);
}

/* ---------- lógica (copia de index.html) ---------- */
const lista = x => (Array.isArray(x) ? x : x ? [x] : []);
function cumple(si, resp) {
  return lista(si).every(c => resp[c.pregunta] !== undefined && c.es.includes(resp[c.pregunta]));
}
function evaluar(via, resp) {
  const r = { via, cierres: [], depende: [], notas: [], advertencias: [] };
  let oculta = false, noInt = false;
  for (const g of via.reglas || []) {
    if (!cumple(g.si, resp)) continue;
    if (g.resultado === "oculta") oculta = true;
    else if (g.resultado === "cierra") r.cierres.push(g);
    else if (g.resultado === "depende") r.depende.push(g);
    else if (g.resultado === "noInteresa") noInt = true;
    else if (g.resultado === "nota") r.notas.push(g);
    else if (g.resultado === "advierte") r.advertencias.push(g);
  }
  r.estado = oculta ? "oculta" : r.cierres.length ? "cerrada" : noInt ? "noInteresa" : r.depende.length ? "depende" : "abierta";
  return r;
}
const mapa = resp => D.vias.map(v => evaluar(v, resp)).filter(r => r.estado !== "oculta");

/* ---------- 2. coherencia ---------- */
for (const k of ["cifras", "textos", "condiciones", "preguntas", "vias", "siempre", "personas"]) {
  if (!D[k]) error(`Falta la sección "${k}".`);
}
if (errores.length) terminar();

// textos de las pantallas de inicio, ejemplos y explorar
for (const k of ["advertenciaTitulo", "advertenciaCorta", "advertenciaEtiqueta", "avisoDato", "avisoDatos1", "avisoDatosN", "avisoFicha", "avisoRelleno", "inicioTitulo", "inicioBajada", "inicioPrivacidad", "ejemplosTitulo", "ejemplosBajada", "explorarTitulo", "explorarBajada", "explorarTituloVias", "explorarPesan", "explorarCierran", "explorarDependen"]) {
  if (!D.textos[k]) error(`Falta el texto "${k}" en textos.`);
}
for (const k of ["cuestionario", "ejemplos", "explorar"]) {
  const o = D.textos.inicioOpciones?.[k];
  if (!o?.titulo || !o?.texto) error(`Falta la opción "${k}" (con titulo y texto) en textos.inicioOpciones.`);
}

const preguntas = Object.fromEntries(D.preguntas.map(q => [q.id, q]));
const valores = id => (preguntas[id]?.opciones || []).map(o => o.valor);
const RESULTADOS = ["cierra", "depende", "noInteresa", "nota", "oculta", "advierte"];
const CAMPOS_FICHA = ["que", "requisitos", "sirve", "noPermite", "tramite", "fuente", "vigencia"];

// ids repetidos
for (const [nombre, arr] of [["pregunta", D.preguntas], ["vía", D.vias], ["persona", D.personas]]) {
  const vistos = new Set();
  arr.forEach(x => { if (vistos.has(x.id)) error(`Hay dos ${nombre}s con id "${x.id}".`); vistos.add(x.id); });
}

// preguntas
D.preguntas.forEach(q => {
  if (!D.textos.bloques?.[q.bloque]) error(`Pregunta "${q.id}": el bloque "${q.bloque}" no existe en textos.bloques.`);
  if (!q.opciones?.length) error(`Pregunta "${q.id}" no tiene opciones.`);
});

// reglas y fichas
D.vias.forEach(v => {
  (v.reglas || []).forEach((g, i) => {
    const donde = `Vía "${v.id}", regla ${i + 1}`;
    if (!RESULTADOS.includes(g.resultado)) error(`${donde}: resultado "${g.resultado}" desconocido.`);
    lista(g.si).forEach(c => {
      if (!preguntas[c.pregunta]) return error(`${donde}: la pregunta "${c.pregunta}" no existe.`);
      c.es.forEach(val => { if (!valores(c.pregunta).includes(val)) error(`${donde}: "${val}" no es una respuesta de "${c.pregunta}".`); });
    });
    if (g.resultado === "cierra" || g.resultado === "depende") {
      if (!g.condicion) error(`${donde}: una regla "${g.resultado}" tiene que nombrar la condición del entorno.`);
      lista(g.condicion).forEach(c => { if (!D.condiciones[c]) error(`${donde}: la condición "${c}" no existe.`); });
      if (!g.motivo) error(`${donde}: falta el motivo.`);
    }
    if (g.resultado === "advierte") {
      if (!g.motivo) error(`${donde}: una advertencia necesita el texto en "motivo".`);
      lista(g.condicion).forEach(c => { if (!D.condiciones[c]) error(`${donde}: la condición "${c}" no existe.`); });
    }
  });
  const f = v.ficha;
  if (!f) return error(`Vía "${v.id}" no tiene ficha.`);
  CAMPOS_FICHA.forEach(c => { if (f[c] === undefined || f[c] === "") error(`Ficha "${v.id}": falta "${c}".`); });
  if (f.fuente && !/^https?:\/\//.test(f.fuente.url || "")) error(`Ficha "${v.id}": la fuente necesita una url que empiece con https://.`);
});
const provisorias = D.vias.filter(v => v.ficha?.relleno).map(v => v.id);
if (provisorias.length) aviso(`${provisorias.length} fichas todavía tienen contenido provisorio: ${provisorias.join(", ")}.`);
// [verificar] marca un dato puntual; verificar: true marca la ficha entera
const MARCA = /\[verificar\]/gi;
const marcas = D.vias.map(v => [v.id, (JSON.stringify(v.ficha || {}).match(MARCA) || []).length]).filter(([, n]) => n);
if (marcas.length) aviso(`Datos puntuales a verificar: ${marcas.map(([id, n]) => `${id} (${n})`).join(", ")}.`);
const aVerificar = D.vias.filter(v => v.ficha?.verificar).map(v => v.id);
if (aVerificar.length) aviso(`${aVerificar.length} fichas están marcadas enteras como "a verificar": ${aVerificar.join(", ")}. Si saben qué dato es, márquenlo con [verificar] y pongan verificar: false.`);
// marcas mal escritas: [Verificar ], [ verificar], [verificar
(function buscar(x, donde) {
  if (typeof x === "string") {
    const raras = (x.match(/\[\s*verific[^\]]*\]?/gi) || []).filter(m => m.toLowerCase() !== "[verificar]");
    raras.forEach(m => error(`${donde}: la marca "${m}" está mal escrita. Tiene que ser exactamente [verificar].`));
  } else if (x && typeof x === "object") Object.entries(x).forEach(([k, v]) => buscar(v, v && v.id ? `vía "${v.id}"` : `${donde} › ${k}`));
})(D, "datos.js");

// {cifras} usadas en cualquier texto
const usadas = new Set();
(function recorrer(x) {
  if (typeof x === "string") (x.match(/\{(\w+)\}/g) || []).forEach(m => usadas.add(m.slice(1, -1)));
  else if (x && typeof x === "object") Object.values(x).forEach(recorrer);
})(D);
usadas.forEach(k => { if (!(k in D.cifras)) error(`Se usa {${k}} pero no está definida en "cifras".`); });

// personas
D.personas.forEach(p => {
  D.preguntas.forEach(q => {
    const r = p.resp[q.id];
    if (r === undefined) error(`Persona ${p.id} (${p.nombre}) no responde "${q.id}".`);
    else if (!valores(q.id).includes(r)) error(`Persona ${p.id}: "${r}" no es una respuesta válida de "${q.id}".`);
  });
  Object.keys(p.resp).forEach(k => { if (!preguntas[k]) error(`Persona ${p.id}: responde "${k}", que no es una pregunta.`); });
  Object.keys(p.notas || {}).forEach(k => { if (!preguntas[k]) error(`Persona ${p.id}: tiene una nota para "${k}", que no es una pregunta.`); });
});

/* ---------- 3. recorridos de ejemplo ----------
   Lo que cada personaje tiene que mostrar, según la consigna del TP.
   Si el grupo decide cambiar un recorrido a propósito, se actualiza acá. */
const ESPERADO = {
  A: { // Valentina: casi todo abierto, muestra el peso de la herencia
    abiertas: ["ue", "nomada", "vyt"],
    minAbiertas: 3
  },
  B: { // Joaquín: informalidad cierra nómada digital; VyT depende de los ahorros
    cerradaPor: { nomada: "informalidad", vyt: "capital_economico" },
    abiertaSiCambia: { cambio: { ahorros: "alto" }, via: "vyt" }
  },
  C: { // Romina: se le cierra casi todo a la vez, llega a la hoja final.
       // VyT se cierra por ahorros; tener un hijo a cargo aparece como advertencia (no puede viajar con él).
    maxAbiertas: 0,
    cerradaPor: { vyt: "capital_economico", ue: "ascendencia" },
    advertidaPor: { vyt: "cuidados" }
  }
};

const estadoDe = (m, id) => m.find(r => r.via.id === id);
const condicionesDe = r => r.cierres.flatMap(g => lista(g.condicion));

Object.entries(ESPERADO).forEach(([id, esp]) => {
  const p = D.personas.find(x => x.id === id);
  if (!p) return error(`Falta la persona del recorrido ${id}.`);
  const m = mapa(p.resp);
  const abiertas = m.filter(r => r.estado === "abierta");
  const quien = `Recorrido ${id} (${p.nombre})`;
  (esp.abiertas || []).forEach(v => {
    const r = estadoDe(m, v);
    if (!r || r.estado !== "abierta") error(`${quien}: "${v}" tendría que estar abierta y está ${r ? r.estado : "ausente"}.`);
  });
  if (esp.minAbiertas !== undefined && abiertas.length < esp.minAbiertas) error(`${quien}: tendría que tener al menos ${esp.minAbiertas} vías abiertas y tiene ${abiertas.length}.`);
  if (esp.maxAbiertas !== undefined && abiertas.length > esp.maxAbiertas) error(`${quien}: tendría que tener como máximo ${esp.maxAbiertas} vías abiertas y tiene ${abiertas.length} (${abiertas.map(r => r.via.id).join(", ")}).`);
  Object.entries(esp.cerradaPor || {}).forEach(([v, cond]) => {
    const r = estadoDe(m, v);
    if (!r || r.estado !== "cerrada") error(`${quien}: "${v}" tendría que estar cerrada y está ${r ? r.estado : "ausente"}.`);
    else if (!condicionesDe(r).includes(cond)) error(`${quien}: "${v}" tendría que cerrarse por "${cond}" y se cierra por ${condicionesDe(r).join(", ")}.`);
  });
  Object.entries(esp.advertidaPor || {}).forEach(([v, cond]) => {
    const r = estadoDe(m, v);
    if (!r || !r.advertencias.some(g => lista(g.condicion).includes(cond))) error(`${quien}: "${v}" tendría que mostrar una advertencia por "${cond}".`);
  });
  if (esp.abiertaSiCambia) {
    const r = estadoDe(mapa({ ...p.resp, ...esp.abiertaSiCambia.cambio }), esp.abiertaSiCambia.via);
    if (!r || r.estado !== "abierta") error(`${quien}: con ${JSON.stringify(esp.abiertaSiCambia.cambio)}, "${esp.abiertaSiCambia.via}" tendría que abrirse y queda ${r ? r.estado : "ausente"}.`);
  }
  const resumen = ["abierta", "depende", "cerrada", "noInteresa"].map(e => `${m.filter(r => r.estado === e).length} ${e}`).join(" · ");
  console.log(`  ${quien}: ${resumen}`);
});

terminar();

function terminar() {
  if (avisos.length) {
    console.log(`\nAvisos (no bloquean): ${avisos.length}`);
    avisos.forEach(a => console.log(`  · ${a}`));
  }
  if (errores.length) {
    console.error(`\n✕ ${errores.length} problema${errores.length === 1 ? "" : "s"}:`);
    errores.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log("\n✓ datos.js está bien.");
}
