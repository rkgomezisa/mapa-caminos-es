/* =====================================================================
   MAPA DE CAMINOS A ESPAÑA · CONTENIDO
   ---------------------------------------------------------------------
   Este archivo tiene TODO el contenido del recurso. El diseño y la
   lógica están en index.html, que no hace falta tocar.

   CÓMO EDITAR SIN ROMPER NADA
   - Cambiá solo el texto que está ENTRE COMILLAS.
   - No borres las comillas, las comas del final de línea ni las llaves { }.
   - Si un texto necesita comillas adentro, usá « » o comillas simples ' '.
   - Las líneas que empiezan con // (y este bloque de texto) son comentarios:
     explican, pero no se muestran en la página.
   - Si después de guardar la página muestra un aviso de error, volvé a
     la versión anterior desde el historial de GitHub (ver README.md).

   CIFRAS QUE SE REPITEN
   - Están juntas en "cifras", acá abajo. Donde un texto dice
     {nombre_de_cifra}, la página pone automáticamente su valor.
     Cambiás la cifra en un solo lugar y se actualiza en todas partes.

   AVISOS EN LAS FICHAS
   - [verificar] escrito al lado de un dato marca SOLO ese dato:
       "Fondos de {vyt_fondos} [verificar]"
     En la ficha aparece "⚠ a verificar" junto al dato, y en la tarjeta
     "⚠ 1 dato a verificar". Cuando lo confirmen, borren [verificar].
   - verificar: true  → "⚠ Ficha a verificar": toda la ficha está en duda.
     Usarlo solo si no se sabe qué dato puntual hay que revisar.
   - relleno: true    → muestra "Contenido provisorio"
     (cuando completen una ficha con datos reales, pongan relleno: false)
   ===================================================================== */
const DATOS = {

  cifras: {
    // Fecha que aparece en el pie de todas las pantallas
    fecha_vigencia:        "21/10/2026",
    // Tarjeta Azul UE: salario mínimo general y reducido
    // Nota informativa de la UGE «Umbral salarial 2026» (junio de 2026): 1,4 × 29.540,26 € (ganancia media
    // anual del INE, publicada el 28/05/2026); el reducido es el 80 %. Base: Orden PJC/44/2026 (BOE 30/01/2026).
    // La orden actualiza el umbral cada vez que el INE publica un dato nuevo: rige para solicitudes presentadas
    // desde 1 mes después de la publicación (estas cifras, desde el 28/06/2026). Revisar cada junio.
    ta_salario:           "41.356,36 €/año",
    ta_reducido:           "33.085,09 €/año",
    // Profesional altamente cualificado (vía nacional): umbral único, sin reducido.
    // Misma nota de la UGE (junio de 2026), apartado «PAC nacional (art. 71.2.b)». La Orden PJC/44/2026 solo
    // regula la Tarjeta Azul, pero la UGE actualiza este umbral en la misma nota. Revisar cada junio.
    hq_salario:            "41.356,36 €/año",
    // Nómada digital y Emprendedor/a: ingreso o medios mínimos y suplementos por familiar.
    // Para Emprendedor, la Instrucción DGM 1/2023 (3.ª) usa la misma fórmula: «mensualmente el 200 % del SMI».
    // 200 % del SMI = 2.442 € × 14 pagas ÷ 12 (Consulado de Buenos Aires y UGE, 2026)
    // Al 23/10/2026 ninguna fuente oficial leída da el monto en euros. Ojo: la hoja del Consulado de Bahía Blanca
    // (2023) usa el 200 % de la paga mensual sin prorratear (con el SMI 2026 serían 2.442 €). Confirmar cuál usa
    // el Consulado de Córdoba. No lleva [verificar] porque también aparece en la pregunta «remoto».
    nomada_ingreso:        "2.849 €/mes",
    nomada_familiar1:      "75 % del SMI",
    nomada_familiar_extra: "25 % del SMI",
    // IPREM anual: medios de un año de estudios (la vía de cuenta propia no fija un monto: Hoja 14, mayo de 2025).
    // Es también el primer corte de la pregunta de ahorros.
    iprem_anual:           "7.200 €",
    // Vacaciones y Trabajo: fondos, seguro y cupo anual
    vyt_fondos:            "14.652 €",
    vyt_seguro:            "30.000 €",
    vyt_cupo:              "500",
    // Vacaciones y Trabajo: fondos por mes si tenés pasaje de regreso (SMI 2026, RD 126/2026;
    // hoja del Consulado de Buenos Aires V.22-04-2026)
    vyt_mes:               "1.221 €",
    // Estudiante: horas de trabajo permitidas
    estudiante_horas:      "30 horas por semana",
    // Estudiante: medios económicos (100 % del IPREM). Consulado de Buenos Aires, 2026
    estudiante_medios:     "600 € por mes",
    // Doctorado sin contrato: 50 % del SMI anual (100 % si viaja un familiar).
    // SMI 2026: 1.221 € × 14 pagas (RD 126/2026). Hoja 68 de Inclusión, agosto de 2026
    doctorado_medios:      "8.547 €",
    doctorado_medios_familia: "17.094 €"
  },

  textos: {
    marca: "Mapa de caminos a España",
    autoria: "Recurso elaborado por estudiantes de Psicología · UNC · Cátedra de Orientación Vocacional y Ocupacional",
    pie: "Información general, vigente a {fecha_vigencia}. No reemplaza el asesoramiento profesional. Verificá siempre en la fuente oficial. Este recurso interactivo fue pensado para jóvenes de 22 a 35 años que viven en Córdoba, tienen título universitario o terciario de nivel superior y evalúan emigrar a España. Si no es tu caso, tomá la información con cautela.",
    inicioTitulo: "¿Qué caminos hay para trabajar en España?",
    inicioBajada: "Un mapa para ver qué vías legales te quedan abiertas, cuáles cierra el entorno y por qué. Es información general: muestra el panorama y dónde profundizar. No reemplaza el asesoramiento profesional ni decide por vos.",
    // Las tres opciones de la portada (tarjetas grandes debajo de la bajada)
    inicioOpciones: {
      cuestionario: { titulo: "Hacer mi recorrido",        texto: "Respondés 13 preguntas cortas, de a una. Al final ves tu mapa completo, no una única respuesta." },
      ejemplos:     { titulo: "Ver recorridos de ejemplo", texto: "Tres personajes ficticios. Paso a paso, se ve qué abre y qué cierra cada respuesta." },
      explorar:     { titulo: "Explorar el mapa",          texto: "Todas las vías con su ficha, sin responder nada. Para mirar el panorama completo." }
    },
    // Línea chica debajo de las tres opciones
    inicioPrivacidad: "Tus respuestas no se guardan ni se envían a ningún lado.",
    // Pantalla "Ver recorridos de ejemplo"
    ejemplosTitulo: "Recorridos de ejemplo",
    ejemplosBajada: "Tres personajes ficticios. Cada recorrido avanza paso a paso y muestra qué abre y qué cierra cada respuesta.",
    // Pantalla "Explorar el mapa"
    explorarTitulo: "Explorar el mapa",
    explorarBajada: "Estas son todas las vías del mapa, sin responder nada. Cada ficha cuenta qué es, qué pide y qué condiciones del entorno pesan. Para ver cuáles te quedan abiertas a vos, hacé tu recorrido.",
    explorarTituloVias: "Todas las vías",
    explorarPesan: "Condiciones del entorno que pesan",
    explorarCierran: "Condiciones del entorno que pueden cerrarla",
    explorarDependen: "Puede depender de",
    bloques: { perfil: "Tu situación", puertas: "Puertas posibles" },
    estados: {
      abierta:    { simbolo: "✓", etiqueta: "Abierta" },
      depende:    { simbolo: "◐", etiqueta: "Se abre si…" },
      cerrada:    { simbolo: "✕", etiqueta: "Cerrada" },
      noInteresa: { simbolo: "○", etiqueta: "Fuera de tu búsqueda" }
    },
    resultadosTitulo: "Tu mapa de vías",
    resultadosBajada: "Estas son todas las vías del mapa según lo que respondiste. Cuando una vía se cierra, lo que la cierra es una condición del entorno, no algo que te falte a vos.",
    sinAbiertas: "Hoy no aparece ninguna vía abierta de forma directa. Eso habla de cómo están armadas las reglas y de las condiciones del entorno, no de vos. Mirá lo que está siempre disponible, más abajo.",
    tituloAbiertas: "Vías abiertas",
    tituloDepende: "Se abren si aparece…",
    tituloCerradas: "Vías que se cerraron (y por qué)",
    tituloSiempre: "Siempre disponible",
    tituloNoInteresa: "Otras vías del mapa (dijiste que no te interesan por ahora)",
    tituloCondiciones: "Condiciones del entorno que pesaron en este recorrido",
    // Avisos de las fichas (el # se reemplaza por la cantidad)
    // Advertencias: algo para revisar antes de avanzar (no abren ni cierran la vía)
    advertenciaTitulo: "Antes de avanzar, revisá",
    advertenciaCorta: "Hay algo para revisar: mirá la ficha",
    advertenciaEtiqueta: "Revisá",
    avisoDato: "a verificar",
    avisoDatos1: "1 dato a verificar",
    avisoDatosN: "# datos a verificar",
    avisoFicha: "Ficha a verificar",
    avisoRelleno: "Contenido provisorio"
  },

  /* Condiciones del entorno: se nombran así en cada vía que se cierra */
  condiciones: {
    ascendencia:       { nombre: "Ascendencia europea",           texto: "Depende de la historia migratoria de tu familia y de que se haya podido documentar." },
    capital_economico: { nombre: "Capital económico",             texto: "Pide fondos, ingresos o inversión que dependen de la clase social y del mercado de origen." },
    informalidad:      { nombre: "Informalidad laboral",          texto: "Pide ingresos demostrables, y buena parte del trabajo en Argentina no se registra formalmente." },
    formacion:         { nombre: "Tipo de formación",             texto: "Algunas vías reconocen solo ciertos títulos." },
    edad_egreso:       { nombre: "Edad o tiempo desde el egreso", texto: "Algunas vías ponen límites de edad o de años desde que te recibiste." },
    cuidados:          { nombre: "Cargas de cuidado",             texto: "Algunas vías no contemplan a quienes cuidan a otras personas." },
    redes:             { nombre: "Redes",                         texto: "Contactos institucionales y profesionales que no están repartidos de forma pareja." },
    capital_academico: { nombre: "Capital académico",             texto: "Trayectoria académica que valoran universidades y centros de investigación." },
    mercado:           { nombre: "Mercado laboral de destino",    texto: "Depende de qué ocupaciones busca España y de que un empleador te elija." },
    innovacion:        { nombre: "Criterio de innovación",        texto: "Un organismo público evalúa si el proyecto es innovador o escalable." },
    convocatoria:      { nombre: "Decisión administrativa",       texto: "Depende de que el gobierno de España abra cupos ese año." }
  },

  /* Preguntas, en el orden en que aparecen.
     Una opción con "atajo: true" lleva directo a resultados. */
  preguntas: [
    { id: "pasaporte", bloque: "perfil",
      texto: "¿Tenés pasaporte de algún país de la Unión Europea?",
      ayuda: "Contá solo si ya tenés la ciudadanía reconocida.",
      opciones: [
        { valor: "espanol", texto: "Sí, español", atajo: true },
        { valor: "ue",      texto: "Sí, de otro país de la UE (por ejemplo, italiano)" },
        { valor: "no",      texto: "No" } ] },

    { id: "ascendencia", bloque: "perfil",
      texto: "¿Tu padre, madre, abuelo o abuela es español o española de origen?",
      ayuda: "De origen quiere decir español desde el nacimiento.",
      opciones: [
        { valor: "padre",  texto: "Sí, mi padre o mi madre" },
        { valor: "abuelo", texto: "Sí, mi abuelo o mi abuela" },
        { valor: "no",     texto: "No" },
        { valor: "nose",   texto: "No lo sé" } ] },

    { id: "edad", bloque: "perfil",
      texto: "¿Qué edad tenés?",
      opciones: [
        { valor: "hasta35", texto: "35 años o menos" },
        { valor: "mas35",   texto: "36 o más" } ] },

    { id: "formacion", bloque: "perfil",
      texto: "¿Qué formación tenés?",
      opciones: [
        { valor: "universitario", texto: "Título universitario de grado" },
        { valor: "tecnico",       texto: "Título técnico superior o terciario" },
        { valor: "universidad2",  texto: "Dos años o más aprobados de universidad, sin título todavía" },
        { valor: "otro",          texto: "Otra formación" } ] },

    { id: "egreso", bloque: "perfil",
      texto: "¿Hace cuánto te recibiste?",
      opciones: [
        { valor: "reciente", texto: "Menos de 2 años (o todavía estoy estudiando)" },
        { valor: "medio",    texto: "Entre 2 y 3 años" },
        { valor: "mas3",     texto: "Más de 3 años" } ] },

    { id: "cuidados", bloque: "perfil",
      texto: "¿Tenés hijos, hijas u otras personas a tu cargo?",
      ayuda: "Personas que dependen de tu cuidado o de tus ingresos.",
      opciones: [
        { valor: "si", texto: "Sí" },
        { valor: "no", texto: "No" } ] },

    { id: "ahorros", bloque: "perfil",
      texto: "¿Cuántos ahorros podrías demostrar?",
      ayuda: "Cada vía pide un monto distinto. Contá lo que tenés o podrías reunir: es una referencia, no hace falta el número exacto.",
      opciones: [
        { valor: "bajo",  texto: "Menos de {iprem_anual}" },
        { valor: "medio", texto: "Entre {iprem_anual} y {vyt_fondos}" },
        { valor: "alto",  texto: "{vyt_fondos} o más" } ] },

    { id: "oferta", bloque: "puertas",
      texto: "¿Tenés una oferta de trabajo en España, o trabajás en una empresa con filial allá?",
      opciones: [
        { valor: "oferta",        texto: "Tengo una oferta de una empresa en España" },
        { valor: "multinacional", texto: "Trabajo hace 3 meses o más en una empresa con filial en España" },
        { valor: "no",            texto: "Ninguna de las dos, por ahora" } ] },

    { id: "remoto", bloque: "puertas",
      texto: "¿Trabajás en remoto para empresas o clientes de fuera de España?",
      opciones: [
        { valor: "formal_alto", texto: "Sí, con ingresos demostrables de {nomada_ingreso} o más" },
        { valor: "formal_bajo", texto: "Sí, con ingresos demostrables pero menores" },
        { valor: "informal",    texto: "Sí, pero sin facturación formal" },
        { valor: "no",          texto: "No" } ] },

    { id: "propia", bloque: "puertas",
      texto: "¿Te gustaría trabajar por tu cuenta en España?",
      opciones: [
        { valor: "innovador", texto: "Sí, con un proyecto innovador o escalable" },
        { valor: "negocio",   texto: "Sí, con un negocio o servicio tradicional" },
        { valor: "no",        texto: "No, por ahora" } ] },

    { id: "investigar", bloque: "puertas",
      texto: "¿Te interesa investigar en España, doctorado incluido?",
      opciones: [
        { valor: "si",      texto: "Sí, y una universidad, centro o empresa ya me aceptó" },
        { valor: "interes", texto: "Me interesa, pero todavía no tengo aceptación" },
        { valor: "no",      texto: "No me interesa" } ] },

    { id: "practicas", bloque: "puertas",
      texto: "¿Una entidad española te ofrece un convenio de prácticas?",
      opciones: [
        { valor: "si",      texto: "Sí, tengo una oferta de prácticas" },
        { valor: "interes", texto: "Me interesa, pero todavía no tengo" },
        { valor: "no",      texto: "No me interesa" } ] },

    { id: "estudiar", bloque: "puertas",
      texto: "¿Te interesa estudiar en España, por ejemplo un máster?",
      opciones: [
        { valor: "si", texto: "Sí" },
        { valor: "no", texto: "No" } ] }
  ],

  /* Pantalla especial si la persona ya tiene pasaporte español */
  atajos: {
    espanol: {
      titulo: "No necesitás visado",
      texto: "Con pasaporte español podés vivir y trabajar en España. Lo que sí vas a hacer allá son trámites de residente: empadronamiento, documento de identidad y alta en la Seguridad Social."
    }
  },

  /* Vías del mapa.
     "reglas": cada regla dice qué pasa si la persona respondió algo.
       resultado "cierra"     → la vía se cierra por esa condición
       resultado "depende"    → la vía se abre si aparece algo
       resultado "noInteresa" → la persona dijo que no le interesa
       resultado "oculta"     → no se muestra
       resultado "nota"       → aclaración que se suma a la tarjeta
       resultado "advierte"   → algo que la persona tiene que revisar antes de avanzar.
                                No abre ni cierra la vía. Sin "si", se muestra siempre. */
  vias: [
    { id: "ue", nombre: "Registro como ciudadano/a de la UE", corto: "Ciudadanía UE",
      resumen: "Con pasaporte de otro país de la UE, te registrás como ciudadano/a comunitario/a.",
      reglas: [
        { si: { pregunta: "pasaporte", es: ["espanol"] }, resultado: "oculta" },
        { si: { pregunta: "pasaporte", es: ["no"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Pide un pasaporte de otro país de la UE. Tenerlo depende de la historia migratoria de tu familia y de que se haya podido documentar." },
        // RD 240/2007, art. 7.1.b y c: sin trabajo, piden recursos suficientes y seguro de enfermedad
        // (para estudiar, matrícula, seguro y declaración de recursos).
        { si: { pregunta: "pasaporte", es: ["ue"] }, resultado: "nota",
          motivo: "Si no vas con trabajo ni a estudiar, para registrarte te piden recursos suficientes y un seguro de enfermedad." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: Real Decreto 240/2007 (arts. 1, 3 y 7, y disposición adicional
        // tercera para Suiza); sede de la Policía Nacional (certificado de registro de ciudadano de la UE);
        // Hoja 65 de Inclusión (actualizada en mayo de 2025). El trámite se hace en España: no pasa por el
        // Consulado de Córdoba.
        que: "El registro que hacen en España las personas con ciudadanía de otro país de la Unión Europea. También vale para Noruega, Islandia, Liechtenstein y Suiza.",
        requisitos: ["Pasaporte o documento de identidad válido de un país de la UE", "Registrarse por trabajo (en relación de dependencia o por cuenta propia), por recursos propios (medios económicos y seguro de enfermedad) o por estudios (matrícula, seguro y declaración de recursos)", "Pedirlo en persona dentro de los 3 meses desde que llegás, si vas a quedarte más de 3 meses", "Pagar la tasa (modelo 790, código 012)"],
        sirve: "Vivir y trabajar en España sin visado, en igualdad con las personas españolas.",
        // La Policía detalla qué contiene: nombre, nacionalidad, domicilio, NIE y fecha de registro.
        noPermite: "No es una tarjeta de residencia ni la nacionalidad española: es un certificado de registro con tu NIE.",
        tramite: "En la Oficina de Extranjería de la provincia de España donde vayas a vivir o, si no hay, en la comisaría de policía. El certificado se entrega en el momento.",
        fuente: { texto: "Policía Nacional: certificado de registro de ciudadano de la UE (y Hoja 65 de Inclusión, mayo de 2025)", url: "https://sede.policia.gob.es/portalCiudadano/_es/tramites_extranjeria_tramite_certificadoregistro_ciudadanoue.php" },
        vigencia: "Mayo de 2025", verificar: false, relleno: false } },

    { id: "familiar", nombre: "Residencia como familiar de español/a", corto: "Familiar de español",
      resumen: "Residencia para hijos e hijas de españoles de origen.",
      reglas: [
        { si: { pregunta: "pasaporte", es: ["espanol"] }, resultado: "oculta" },
        // Hoja 18 de Inclusión (abril de 2026): no aplica a nacionales de la UE, el EEE o Suiza.
        // Con pasaporte UE corresponde el registro como ciudadano/a de la UE (decisión del grupo: ocultarla).
        { si: { pregunta: "pasaporte", es: ["ue"] }, resultado: "oculta" },
        { si: { pregunta: "ascendencia", es: ["no"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Es para hijos e hijas de españoles de origen." },
        { si: { pregunta: "ascendencia", es: ["abuelo"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Es para hijos e hijas. Por abuelo o abuela, mirá la vía de búsqueda de empleo." },
        // Decisión del grupo: «No lo sé» no cierra la vía; se abre si aparecen los documentos.
        { si: { pregunta: "ascendencia", es: ["nose"] }, resultado: "depende", condicion: "ascendencia",
          motivo: "Se abre si tu padre o tu madre es o fue español/a de origen. Vale la pena preguntar en tu familia: esta vía depende de documentos que a veces nadie buscó." },
        // Hoja 18 de Inclusión (abril de 2026): documentos extranjeros apostillados o legalizados y traducidos;
        // plazo de resolución de 2 meses, con silencio negativo.
        { si: { pregunta: "ascendencia", es: ["padre", "nose"] }, resultado: "advierte",
          motivo: "Las partidas y el certificado de antecedentes argentinos tienen que estar apostillados. Si no te contestan en 2 meses, la solicitud se entiende denegada." },
        // RD 1155/2024, art. 95.3: dura 5 años o el periodo previsto de residencia en España del familiar
        // español, si es menor. No queda claro cómo se aplica si el padre o la madre no vive en España.
        { si: { pregunta: "ascendencia", es: ["padre", "nose"] }, resultado: "advierte",
          motivo: "La residencia puede durar menos de 5 años si tu padre o tu madre va a vivir en España por menos tiempo. Preguntalo en el consulado al presentar la solicitud." },
        // Fuente: Consulado de Córdoba, «Nacionalidad española - Opción» (octubre 2026)
        { si: { pregunta: "ascendencia", es: ["padre"] }, resultado: "nota",
          motivo: "Si tu padre o tu madre es español/a de origen y nació en España, también podés pedir la nacionalidad española por opción, a cualquier edad. Se inicia en el Consulado General de España en Córdoba." } ],
      ficha: {
        // Revisada el 23/10/2026 contra la Hoja 18 de Inclusión (última actualización: abril de 2026); el
        // RD 1155/2024 en el BOE (texto consolidado, arts. 38, 41, 93 a 97); y la página del Consulado General
        // de España en Córdoba «Visados Nacionales - Visado de residencia de familiares de personas de
        // nacionalidad española» (sin fecha, consultada el 23/10/2026):
        // https://www.exteriores.gob.es/Consulados/cordoba/es/ServiciosConsulares/Paginas/index.aspx?scco=Argentina&scd=129&scca=Visados&scs=Visados+Nacionales+-+Visado+de+residencia+de+familiares+de+personas+de+nacionalidad+espa%c3%b1ola
        que: "Una autorización de residencia para familiares de personas con nacionalidad española, prevista en el nuevo reglamento de extranjería (Real Decreto 1155/2024).",
        // RD 1155/2024, art. 94.1.h: «Los hijos y las hijas cuyo padre o madre sean o hubieran sido españoles
        // de origen»; por el art. 93 son la única categoría que no tiene que convivir. No ser de la UE, el EEE
        // ni Suiza (art. 93). Art. 38: pasaporte con 1 año de vigencia, antecedentes penales de los últimos
        // 5 años y certificado médico. Consulado de Córdoba: certificados de nacimiento de la persona y de su
        // padre o madre, documentos apostillados y prueba de residencia en la demarcación del consulado.
        // Ni la Hoja 18 ni el consulado piden medios económicos ni seguro.
        requisitos: ["Padre o madre que sea o haya sido español/a de origen", "Partidas de nacimiento tuya y de tu padre o madre, apostilladas", "Pasaporte con al menos 1 año de vigencia", "Certificado de antecedentes penales de los últimos 5 años", "Certificado médico", "Comprobante de que vivís en la zona del Consulado de Córdoba", "No tener nacionalidad de un país de la UE"],
        // RD 1155/2024, art. 95.1 y 95.3: validez de 5 años; derecho a residir y trabajar por cuenta ajena o
        // propia, en cualquier sector y en todo el territorio. (El 95.3 prevé una duración menor si la
        // residencia prevista en España del familiar español fuera inferior.)
        sirve: "Residir y trabajar en España durante 5 años, por cuenta ajena o propia, en cualquier sector y lugar. No pide ahorros ni seguro médico.",
        noPermite: "No es la nacionalidad española: es una residencia por 5 años. No alcanza a nietos y nietas.",
        // Hay dos procedimientos (RD 1155/2024, art. 97.1). Si la persona y su familiar están fuera de España
        // (97.1.b y 41.3), la persona presenta el visado en el consulado y esa solicitud incluye la de la
        // autorización; extranjería resuelve en 2 meses (silencio negativo) y el consulado expide el visado en
        // 15 días. Si el familiar español vive en España (97.1.a y 41.2), pide la autorización allá y después
        // hay 1 mes para pedir el visado. Consulado de Córdoba: presentación personal en el consulado; visado
        // gratuito (salvo la tasa del proveedor externo, si se usa); vale 365 días; TIE dentro del mes desde la
        // entrada. Antes la ficha mezclaba los dos casos ("2 meses y después 1 mes para pedir el visado").
        tramite: "Lo presentás en persona en el Consulado General de España en Córdoba: pedís el visado y la autorización juntos, y es gratis. La oficina de extranjería en España resuelve en 2 meses y después el consulado entrega el visado en 15 días. Si tu padre o tu madre vive en España, puede pedir la autorización allá y vos tenés 1 mes para pedir el visado. El visado vale 365 días; una vez allá, tenés 1 mes para tramitar la TIE.",
        fuente: { texto: "Hoja 18 de Inclusión: residencia de familiares de personas con nacionalidad española (abril de 2026)", url: "https://inclusion.gob.es/web/migraciones/w/18.-autorizacion-de-residencia-temporal-de-familiares-de-personas-con-nacionalidad-espanola" },
        vigencia: "Abril de 2026", verificar: false, relleno: false } },

    { id: "nietos", nombre: "Búsqueda de empleo para hijos y nietos de españoles", corto: "Búsqueda de empleo",
      resumen: "Visado de 12 meses para buscar trabajo, si la orden anual abre cupo.",
      reglas: [
        { si: { pregunta: "pasaporte", es: ["espanol"] }, resultado: "oculta" },
        // Es un visado para personas que no tienen la ciudadanía de la UE. Con pasaporte UE corresponde
        // el registro como ciudadano/a de la UE (decisión del grupo: ocultarla, igual que en «familiar»).
        { si: { pregunta: "pasaporte", es: ["ue"] }, resultado: "oculta" },
        { si: { pregunta: "ascendencia", es: ["no"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Es para hijos, hijas, nietos y nietas de españoles de origen." },
        // Decisión del grupo: «No lo sé» no cierra la vía; se abre si aparecen los documentos (como en «familiar»).
        { si: { pregunta: "ascendencia", es: ["nose"] }, resultado: "depende", condicion: "ascendencia",
          motivo: "Se abre si tu padre, madre, abuelo o abuela fue español/a de origen, y si ese año hay cupo. Vale la pena preguntar en tu familia: esta vía depende de documentos que a veces nadie buscó." },
        // RD 1155/2024, art. 44.1: la orden anual de gestión colectiva «podrá aprobar un número» de estos visados.
        // Orden ISM/1547/2025 (GECCO 2026, BOE 30/12/2025), art. 1: el Ministerio «podrá establecer un número
        // de visados para búsqueda de empleo» para hijos o nietos de español de origen. No fija ninguno.
        // No se encontró ningún acto posterior que fije un cupo para 2026 (búsqueda de octubre de 2026). Ojo: la
        // disposición final segunda de la orden permite revisarla dentro de los 6 meses de su entrada en vigor y
        // cambiar «el número de visados para búsqueda de empleo previstos»; no se pudo confirmar en el buscador
        // del BOE que no haya habido una orden de revisión (de ahí la advertencia).
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo"] }, resultado: "depende", condicion: "convocatoria",
          motivo: "Se abre si la orden anual fija un cupo de visados. La de 2026 no fijó ninguno." },
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo", "nose"] }, resultado: "advierte",
          motivo: "La orden de cada año se puede revisar a mitad de año y sumar un cupo de estos visados. Antes de descartar esta vía, buscá en el BOE si salió una orden nueva o preguntá en el consulado." },
        // Código Civil, art. 22.2.f: 1 año de residencia para «el nacido fuera de España de padre o madre, abuelo
        // o abuela, que originariamente hubieran sido españoles». Para el resto de las personas argentinas son
        // 2 años de residencia legal (art. 22.1). Cotejado en el BOE (texto consolidado) el 23/10/2026.
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo"] }, resultado: "nota",
          motivo: "Si tu padre, madre, abuelo o abuela fue español/a de origen y vos naciste fuera de España, podés pedir la nacionalidad con 1 año de residencia legal." },
        // Consulado General de España en Córdoba, «Ley de Memoria Democrática» (aviso del 13/06/2025):
        // el plazo de la disposición adicional octava de la Ley 20/2022 cerró el 22/10/2025.
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo", "nose"] }, resultado: "nota",
          motivo: "La opción de nacionalidad por la Ley de Memoria Democrática («ley de nietos») cerró el 22 de octubre de 2025." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: RD 1155/2024, arts. 43 y 44 (texto consolidado, última modificación
        // 22/09/2026); Orden ISM/1547/2025 de gestión colectiva para 2026 (23/12/2025, BOE 30/12/2025);
        // Hoja 24 de Inclusión (mayo de 2025). Los arts. 38, 43 y 44 y la orden se cotejaron en el BOE el
        // 23/10/2026.
        // RD 1155/2024, art. 43.1: permite entrar en España para buscar trabajo «durante un periodo de
        // residencia de doce meses». Art. 44: modalidad para hijos o nietos de español de origen.
        que: "Un visado para vivir 12 meses en España buscando trabajo, destinado a hijos, hijas, nietos y nietas de españoles de origen (Real Decreto 1155/2024).",
        // Art. 44.1 y 44.2: el número de visados, la selección y la forma de presentar la solicitud los fija
        // la orden anual. Art. 43.3: requisitos del art. 38 (pasaporte con 1 año de vigencia, antecedentes
        // penales de los últimos 5 años, certificado médico, tasa) y los específicos que fije la orden.
        requisitos: ["Padre, madre, abuelo o abuela español/a de origen", "Que la orden anual de gestión colectiva fije un cupo de visados", "Pasaporte con al menos 1 año de vigencia, certificado de antecedentes penales de los últimos 5 años y certificado médico", "Los demás requisitos y cómo se elige a quienes lo reciben los fija la orden de cada año"],
        // Art. 43.1, 43.4 y 43.5: con contrato, el empleador pide la autorización de residencia y trabajo sin
        // necesidad de otro visado; se resuelve en 10 días y hay 1 mes para el alta en la Seguridad Social.
        // Art. 44.1: exentos de la valoración de la situación nacional de empleo.
        sirve: "Vivir en España 12 meses buscando trabajo. Si conseguís contrato, la autorización se tramita desde allá, sin volver por otro visado, y quien te contrata no tiene que demostrar que no encontró a alguien en España.",
        noPermite: "No es un permiso de trabajo: para trabajar necesitás un contrato, y la autorización la pide quien te contrata. Tampoco es la nacionalidad. Si ese año la orden no fija cupo, el visado no existe.",
        // Art. 44.2: la orden regula «las fórmulas de presentación de las solicitudes». En el piloto de 2019 para
        // Argentina la inscripción fue en línea (nota de prensa de Inclusión, 19/03/2019).
        // 23/10/2026: ni la hoja de tasas ni el menú de visados (nacionales y de estancia) del Consulado General
        // de España en Córdoba incluyen este visado.
        tramite: "Lo define la orden de cada año: cómo se elige a las personas y dónde se presenta la solicitud. En la prueba piloto de 2019 para Argentina, se hizo en línea. Hoy el Consulado de Córdoba no lo tiene entre sus visados.",
        fuente: { texto: "Real Decreto 1155/2024, arts. 43 y 44 (y Orden ISM/1547/2025, diciembre de 2025)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099" },
        vigencia: "Diciembre de 2025", verificar: false, relleno: false } },

    { id: "cuenta_ajena", nombre: "Trabajo por cuenta ajena", corto: "Cuenta ajena",
      resumen: "Trabajar en relación de dependencia para un empleador en España.",
      reglas: [
        // Catálogo de Ocupaciones de Difícil Cobertura del 3.er trimestre de 2026 (Resolución del SEPE del
        // 3/8/2026, BOE-A-2026-18504, 2/9/2026): 27 ocupaciones, de marina mercante, deportes y oficios
        // (carpintería metálica, electricidad, grúas). Ninguna pide título universitario. Lo publica el SEPE
        // cada trimestre (RD 1155/2024, art. 75).
        { si: { pregunta: "oferta", es: ["no", "multinacional"] }, resultado: "depende", condicion: ["mercado", "redes"],
          motivo: "Se abre con una oferta de un empleador en España. El trámite es más simple si tu ocupación está en el Catálogo de Ocupaciones de Difícil Cobertura, pero hoy el catálogo tiene oficios y puestos de marina mercante, no profesiones universitarias." },
        // Hoja 12 de Inclusión (mayo de 2025) y RD 1155/2024, art. 75: fuera del catálogo, el empleador publica
        // la oferta en el servicio público de empleo (8 días) y acredita que no pudo cubrir el puesto.
        { si: { pregunta: "oferta", es: ["oferta"] }, resultado: "nota",
          motivo: "Si tu ocupación no está en el Catálogo de Difícil Cobertura, el empleador primero publica la oferta en el servicio público de empleo y tiene que acreditar que no encontró candidatos disponibles en España." },
        // Ley Orgánica 4/2000, art. 40.1.h: no se tiene en cuenta la situación nacional de empleo para
        // hijos o nietos de español de origen.
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo"] }, resultado: "nota", condicion: "ascendencia",
          motivo: "Como tu padre, madre, abuelo o abuela es español/a de origen, el empleador no tiene que demostrar que no encontró candidatos en España." },
        // RD 1155/2024, art. 73.1: el límite de ocupación y comunidad autónoma no se aplica cuando no corre
        // la situación nacional de empleo (LO 4/2000, art. 40.1.h: hijos o nietos de español de origen).
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo"] }, resultado: "advierte",
          motivo: "Si tu padre, madre, abuelo o abuela es español/a de origen, el primer permiso no debería quedar atado a una ocupación ni a una comunidad autónoma. Confirmá que tu autorización lo diga así." },
        // Consulado de Córdoba (23/10/2026): alta en la Seguridad Social dentro de 3 días desde la entrada.
        // RD 1155/2024, art. 73.1: dentro de 3 meses desde la entrada legal. Las fuentes no coinciden.
        { resultado: "advierte",
          motivo: "El plazo para darte de alta en la Seguridad Social cuando llegás no está claro: el consulado dice 3 días y el reglamento, 3 meses. Acordá con quien te contrata hacerlo apenas llegues." },
        // Hoja 12 de Inclusión (mayo de 2025): el trabajador tiene que tener la cualificación que exige la
        // profesión, «homologada en su caso».
        { resultado: "advierte", condicion: "formacion",
          motivo: "Si tu profesión está regulada en España (por ejemplo, en salud, psicología, abogacía o algunas ingenierías), vas a necesitar el título homologado. Averiguá cuánto tarda antes de buscar la oferta." } ],
      ficha: {
        // Hoja 12 de Inclusión (mayo de 2025): la pide el empleador para contratar a una persona extranjera
        // por más de 90 días y menos de 5 años.
        que: "La autorización de residencia y trabajo que pide un empleador en España para contratar a una persona extranjera.",
        // Hoja 12 de Inclusión (mayo de 2025): contrato firmado por las dos partes; situación nacional de
        // empleo (catálogo o acreditación del empleador); cualificación homologada si la profesión lo exige;
        // para el visado, antecedentes penales y certificado médico. El empleador, además, tiene que estar al
        // día con Hacienda y la Seguridad Social y tener solvencia. Consulado de Córdoba, «Visados Nacionales -
        // Visado de trabajo por cuenta ajena» (consultada el 23/10/2026): antecedentes de los últimos 5 años,
        // certificado médico y prueba de residencia en la demarcación, apostillados; pasaporte con 1 año de vigencia.
        // https://www.exteriores.gob.es/Consulados/cordoba/es/ServiciosConsulares/Paginas/index.aspx?scco=Argentina&scd=129&scca=Visados&scs=Visados+Nacionales+-+Visado+de+trabajo+por+cuenta+ajena
        requisitos: ["Contrato u oferta firmada con un empleador en España", "Vía simplificada si la ocupación está en el Catálogo de Difícil Cobertura", "Si no, vía general: el empleador acredita que no hay candidatos disponibles en España", "Si tu profesión está regulada en España, el título homologado", "Antecedentes penales de los últimos 5 años y certificado médico, apostillados", "Comprobante de que vivís en la zona del Consulado de Córdoba"],
        sirve: "Trabajar en relación de dependencia.",
        // RD 1155/2024, art. 73: la autorización inicial dura lo que la actividad, con un máximo de 1 año, y
        // se limita a una ocupación y a una comunidad autónoma. Art. 81: la renovación dura 4 años y permite
        // cualquier actividad en todo el país. Cotejados en el BOE el 23/10/2026. Ojo: el art. 73.1 exceptúa
        // del límite de ocupación y comunidad autónoma los casos sin situación nacional de empleo (por ejemplo,
        // hijos y nietos de español de origen, LO 4/2000 art. 40.1.h): se avisa con una regla «advierte».
        noPermite: "No es un visado para buscar trabajo: sin una oferta no se puede pedir. El primer permiso dura hasta 1 año y queda atado a una ocupación y a una comunidad autónoma. Recién al renovarlo podés trabajar en cualquier actividad y lugar.",
        // Hoja 12 de Inclusión (mayo de 2025): el empleador presenta por la sede electrónica (Mercurio) ante la
        // oficina de extranjería de la provincia del centro de trabajo (RD 1155/2024, art. 77); resuelve en
        // 3 meses y el silencio es negativo; el trabajador pide el visado en el consulado de su demarcación
        // dentro de 1 mes desde que se notifica al empleador. Consulado de Córdoba (23/10/2026): plazo de 1 mes,
        // presentación personal con cita pedida por correo electrónico, resuelve en 1 mes, el visado vale
        // 365 días si la autorización dura más de 6 meses. El consulado dice que el alta en la Seguridad Social
        // es dentro de 3 días desde la entrada; el art. 73.1 del RD 1155/2024 dice 3 meses: va como advertencia.
        tramite: "El empleador lo pide en la oficina de extranjería de la provincia del trabajo. Si en 3 meses no contestan, se entiende denegado. Con la autorización, tenés 1 mes para pedir el visado en persona en el Consulado General de España en Córdoba, con cita que se pide por correo electrónico. El consulado resuelve en 1 mes.",
        fuente: { texto: "Hoja informativa 12 del Ministerio de Inclusión (mayo de 2025)", url: "https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-y-trabajo-por-cuenta-ajena-hi-16-" },
        // Vigencia: Hoja 12 (mayo de 2025), que respalda los requisitos principales. El catálogo citado en
        // las reglas es del 3.er trimestre de 2026.
        vigencia: "Mayo de 2025", verificar: false, relleno: false } },

    { id: "tarjeta_azul", nombre: "Tarjeta Azul UE", corto: "Tarjeta Azul",
      resumen: "Para empleos cualificados con un salario mínimo fijado.",
      reglas: [
        // Hoja 66 de Inclusión (mayo de 2025): no la pueden pedir ciudadanos/as de la UE, el EEE ni Suiza.
        // Con pasaporte UE corresponde el registro como ciudadano/a de la UE (decisión del grupo: ocultarla,
        // igual que en «familiar» y «nietos»).
        { si: { pregunta: "pasaporte", es: ["espanol", "ue"] }, resultado: "oculta" },
        { si: { pregunta: "oferta", es: ["no", "multinacional"] }, resultado: "depende", condicion: ["mercado", "redes"],
          motivo: "Se abre con una oferta de trabajo cualificado de al menos 6 meses y con un salario de al menos {ta_salario}." },
        // Hoja 66 de Inclusión (mayo de 2025): título superior de al menos 3 años (nivel 2 del MECES), o 5 años
        // de experiencia profesional equivalente (3 años, dentro de los últimos 7, para directivos y
        // especialistas en tecnologías de la información y la comunicación).
        { si: { pregunta: "formacion", es: ["tecnico", "universidad2", "otro"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide un título superior de al menos 3 años o 5 años de experiencia profesional en el área (3 en informática): se abre si podés acreditarlos." },
        // Nota de la UGE (junio de 2026) y Hoja 66: umbral del 80 % para quien obtuvo la cualificación en los
        // 3 años previos a la solicitud. Se muestra solo con título universitario: con otra formación, la
        // cualificación se acredita con experiencia y el título no cuenta para esta rebaja.
        { si: [ { pregunta: "egreso", es: ["reciente", "medio"] }, { pregunta: "formacion", es: ["universitario"] } ], resultado: "nota",
          motivo: "Como te recibiste hace 3 años o menos, el salario mínimo exigido baja a {ta_reducido}." },
        // Consulado de Buenos Aires, visado para trabajador altamente cualificado (sin fecha, consultado el
        // 23/10/2026): pueden pedir visado el cónyuge o pareja registrada, los hijos e hijas a cargo y los
        // ascendientes a cargo.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "nota", condicion: "cuidados",
          motivo: "Esta vía contempla a la familia: tu pareja, tus hijos e hijas y otros familiares a cargo pueden pedir visado para acompañarte." },
        // Hoja 66 de Inclusión (mayo de 2025): en profesiones reguladas, la cualificación tiene que estar
        // reconocida (homologada) según la normativa del sector.
        { resultado: "advierte", condicion: "formacion",
          motivo: "Si tu profesión está regulada en España (por ejemplo, en salud, psicología, abogacía o algunas ingenierías), vas a necesitar el título homologado. Averiguá cuánto tarda antes de buscar la oferta." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: nota de la UGE «Umbral salarial» (junio de 2026); Hoja 66 de Inclusión
        // (última actualización: mayo de 2025); página del Consulado de Buenos Aires «Visado para trabajador
        // altamente cualificado y para traslado intraempresarial» (sin fecha). No se pudieron leer: la página
        // del mismo visado en el Consulado de Córdoba (aparece en el menú, sin contenido), el texto de la
        // Ley 14/2013 en el BOE (art. 71 bis) ni la Directiva (UE) 2021/1883 en EUR-Lex.
        // Hoja 66: es una de las dos modalidades de la autorización para profesionales altamente cualificados
        // (la otra es la nacional, vía «hq»).
        que: "Una autorización de residencia y trabajo, común a la Unión Europea, para puestos de alta cualificación.",
        // Hoja 66 (mayo de 2025): cualificación, contrato de al menos 6 meses, homologación en profesiones
        // reguladas, no ser de la UE, el EEE ni Suiza, seguro médico, recursos suficientes (sin monto fijo) y
        // sin antecedentes penales. Nota de la UGE (junio de 2026): umbral reducido para ocupaciones de los
        // grupos 1 y 2 de la CNO-2011 incluidas en el Catálogo de Ocupaciones de Difícil Cobertura (antes la
        // ficha decía solo «difícil cobertura»; hoy el catálogo no tiene profesiones universitarias).
        requisitos: ["Título superior de al menos 3 años, o 5 años de experiencia profesional (3 en los últimos 7 años, en informática)", "Contrato u oferta de al menos 6 meses", "Salario de al menos {ta_salario}", "Umbral reducido de {ta_reducido} si te titulaste hace 3 años o menos, o si tu ocupación es de alta cualificación y está en el Catálogo de Ocupaciones de Difícil Cobertura", "Si tu profesión está regulada en España, el título homologado", "Seguro médico y recursos suficientes para vos y tu familia", "No tener antecedentes penales", "No tener nacionalidad de un país de la UE"],
        // Familia: Consulado de Buenos Aires y de Córdoba (art. 62.4 de la Ley 14/2013). Movilidad: Directiva (UE)
        // 2021/1883 en EUR-Lex (leída el 23/10/2026), art. 20: hasta 90 días cada 180 en otro país sin otro permiso;
        // art. 21: tras 12 meses, se puede pedir la Tarjeta Azul en otro país (con contrato de al menos 6 meses).
        // Art. 17.6: los familiares tienen acceso al mercado laboral, sin límite temporal.
        sirve: "Trabajar en un puesto cualificado. Pueden acompañarte tu pareja, tus hijos e hijas y otros familiares a cargo, y también pueden trabajar. Facilita moverte a otro país de la UE.",
        // Hoja 66 (mayo de 2025): la autorización dura 3 años o, si el contrato es más corto, lo que dure el
        // contrato más 3 meses.
        noPermite: "No es un visado para buscar trabajo: sin un contrato u oferta de al menos 6 meses no se puede pedir. Dura hasta 3 años, o lo que dure el contrato más 3 meses. Si tu profesión está regulada en España, sin el título homologado no se puede pedir.",
        // Hoja 66 (mayo de 2025): se presenta por la sede electrónica de la UGE (la puede pedir el empleador o la
        // persona); resuelve en 20 días con silencio positivo; después, 1 mes para pedir el visado en persona en
        // el consulado de la demarcación, que resuelve en 10 días. Consulado de Córdoba, «Visado para trabajador
        // altamente cualificado y para traslado intraempresarial» (sin fecha, leída el 23/10/2026): se presenta en
        // persona, con cita pedida a cog.cordoba.vis@maec.es; resuelve en 10 días; 1 mes para retirarlo.
        tramite: "Lo pide el empleador o vos, por internet, en la Unidad de Grandes Empresas. Resuelve en 20 días y, si no contestan, se entiende aprobado. Con la autorización, tenés 1 mes para pedir el visado en el Consulado General de España en Córdoba (en persona, con cita que se pide por correo electrónico), que resuelve en 10 días.",
        fuente: { texto: "Unidad de Grandes Empresas: umbral salarial de la Tarjeta Azul (junio de 2026), y Hoja 66 de Inclusión (mayo de 2025)", url: "https://www.inclusion.gob.es/documents/d/unidadgrandesempresas/umbral-salarial.pdf" },
        // Vigencia: nota de la UGE (junio de 2026), el documento más reciente y el que respalda el requisito
        // que define la vía (el salario). La Hoja 66, que respalda el resto, es de mayo de 2025.
        vigencia: "Junio de 2026", verificar: false, relleno: false } },

    { id: "hq", nombre: "Profesional altamente cualificado", corto: "Altamente cualificado",
      resumen: "Vía nacional para puestos cualificados, sin umbral reducido.",
      reglas: [
        // Hoja 66 de Inclusión (mayo de 2025): no la pueden pedir ciudadanos/as de la UE, el EEE ni Suiza.
        // Decisión del grupo: ocultarla con pasaporte UE, igual que en «tarjeta_azul», «familiar» y «nietos».
        { si: { pregunta: "pasaporte", es: ["espanol", "ue"] }, resultado: "oculta" },
        { si: { pregunta: "oferta", es: ["no", "multinacional"] }, resultado: "depende", condicion: ["mercado", "redes"],
          motivo: "Se abre con una oferta de trabajo cualificado con un salario de al menos {hq_salario}." },
        // Hoja 66 de Inclusión (mayo de 2025): la modalidad nacional pide una titulación de al menos nivel 1 del
        // MECES (en España, el técnico superior) o 3 años de experiencia equiparable. Por eso el título técnico
        // superior o terciario ya no queda en «depende» (decisión del grupo); va como advertencia más abajo.
        { si: { pregunta: "formacion", es: ["universidad2", "otro"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide un título de educación superior o 3 años de experiencia profesional equiparable: se abre si podés acreditarlos." },
        // La Hoja 66 no dice si un título terciario argentino se reconoce como nivel 1 del MECES.
        { si: { pregunta: "formacion", es: ["tecnico"] }, resultado: "advierte", condicion: "formacion",
          motivo: "Esta vía acepta títulos de técnico superior. Antes de buscar la oferta, confirmá que tu título terciario se reconozca en España con ese nivel." },
        // Consulado de Buenos Aires, visado para trabajador altamente cualificado (sin fecha, consultado el
        // 23/10/2026): pueden pedir visado el cónyuge o pareja registrada, los hijos e hijas a cargo y los
        // ascendientes a cargo.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "nota", condicion: "cuidados",
          motivo: "Esta vía contempla a la familia: tu pareja, tus hijos e hijas y otros familiares a cargo pueden pedir visado para acompañarte." },
        // Hoja 66 de Inclusión (mayo de 2025): en profesiones reguladas, la titulación tiene que estar homologada.
        { resultado: "advierte", condicion: "formacion",
          motivo: "Si tu profesión está regulada en España (por ejemplo, en salud, psicología, abogacía o algunas ingenierías), vas a necesitar el título homologado. Averiguá cuánto tarda antes de buscar la oferta." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: nota de la UGE «Umbral salarial» (junio de 2026); Hoja 66 de Inclusión
        // (última actualización: mayo de 2025); página del Consulado de Buenos Aires «Visado para trabajador
        // altamente cualificado y para traslado intraempresarial» (sin fecha). No se pudieron leer: la página
        // del mismo visado en el Consulado de Córdoba (aparece en el menú, sin contenido) ni el art. 71 de la
        // Ley 14/2013 en el BOE.
        // Hoja 66: es la otra modalidad de la autorización para profesionales altamente cualificados (la primera
        // es la Tarjeta Azul UE). Pide menos formación, y la nota de la UGE dice que no tiene umbral reducido.
        que: "La autorización nacional española para profesionales en puestos cualificados. Pide menos formación que la Tarjeta Azul, pero no tiene umbral reducido.",
        // Hoja 66 (mayo de 2025): contrato firmado (sin duración mínima, a diferencia de la Tarjeta Azul),
        // titulación de nivel 1 del MECES o 3 años de experiencia, homologación en profesiones reguladas, no ser de
        // la UE, el EEE ni Suiza, seguro médico, recursos suficientes y sin antecedentes penales.
        // Nota de la UGE (junio de 2026): umbral único de {hq_salario}, sin umbral reducido.
        requisitos: ["Contrato de un puesto cualificado (sin duración mínima)", "Título de educación superior (alcanza con técnico superior; el reconocimiento del título terciario argentino con ese nivel [verificar]) o 3 años de experiencia profesional equiparable", "Salario de al menos {hq_salario}, sin umbral reducido", "Si tu profesión está regulada en España, el título homologado", "Seguro médico y recursos suficientes para vos y tu familia", "No tener antecedentes penales", "No tener nacionalidad de un país de la UE"],
        // Familia: Consulado de Buenos Aires. No se afirma movilidad a otros países de la UE: la Hoja 66 no la
        // menciona para esta modalidad.
        sirve: "Trabajar en un puesto cualificado. Pueden acompañarte tu pareja, tus hijos e hijas y otros familiares a cargo.",
        // Hoja 66 (mayo de 2025): la autorización dura 3 años o, si el contrato es más corto, lo que dure el
        // contrato más 3 meses. Nota de la UGE (junio de 2026): sin umbral reducido.
        noPermite: "No es un visado para buscar trabajo: sin un contrato no se puede pedir. Dura hasta 3 años, o lo que dure el contrato más 3 meses. No baja el salario exigido si te recibiste hace poco. Si tu profesión está regulada en España, sin el título homologado no se puede pedir.",
        // Hoja 66 (mayo de 2025): sede electrónica de la UGE (la pide el empleador o la persona); resuelve en 20
        // días con silencio positivo; después, 1 mes para pedir el visado en persona en el consulado de la
        // demarcación, que resuelve en 10 días. Consulado de Córdoba (misma página, leída el 23/10/2026): en
        // persona, con cita pedida a cog.cordoba.vis@maec.es. Art. 71.2 b) y 71.3 de la Ley 14/2013 (BOE,
        // texto consolidado al 09/04/2025): nivel 1 del MECES o 3 años de experiencia; 3 años o contrato + 3 meses.
        tramite: "Lo pide el empleador o vos, por internet, en la Unidad de Grandes Empresas. Resuelve en 20 días y, si no contestan, se entiende aprobado. Con la autorización, tenés 1 mes para pedir el visado en el Consulado General de España en Córdoba (en persona, con cita que se pide por correo electrónico), que resuelve en 10 días.",
        fuente: { texto: "Hoja 66 de Inclusión (mayo de 2025) y Unidad de Grandes Empresas: umbral salarial (junio de 2026)", url: "https://www.inclusion.gob.es/web/migraciones/w/66.-autorizacion-inicial-de-residencia-y-trabajo-de-profesionales-altamente-cualificados" },
        // Vigencia: nota de la UGE (junio de 2026), el documento más reciente y el que respalda el salario. La
        // Hoja 66, que respalda el resto, es de mayo de 2025.
        vigencia: "Junio de 2026", verificar: false, relleno: false } },

    { id: "traslado", nombre: "Traslado intraempresarial", corto: "Traslado",
      resumen: "Para quien ya trabaja en una empresa con filial en España.",
      reglas: [
        // Tríptico de la UGE «Traslado intraempresarial. Ciudadanos no UE» (sin fecha; depósito legal de 2016):
        // excluye a ciudadanos/as de la UE, el EEE y Suiza. Con pasaporte UE corresponde el registro como
        // ciudadano/a de la UE (decisión del grupo: ocultarla, igual que en Tarjeta Azul y Altamente cualificado).
        { si: { pregunta: "pasaporte", es: ["espanol", "ue"] }, resultado: "oculta" },
        // Tríptico de la UGE: 3 meses previos y continuados en la empresa o el grupo. Lo que pesa es trabajar en
        // una empresa con sede en España, algo que depende del mercado laboral de origen y de que la empresa
        // decida el traslado (decisión del grupo: mantener «mercado» y nombrarlo en el motivo).
        { si: { pregunta: "oferta", es: ["oferta", "no"] }, resultado: "depende", condicion: "mercado",
          motivo: "Se abre si trabajás hace 3 meses o más en una empresa o grupo con sede en España, y si esa empresa decide trasladarte. Depende de qué empresas hay en tu mercado laboral, no solo de vos." },
        // Tríptico de la UGE: titulación superior o equivalente, o al menos 3 años de experiencia profesional.
        { si: { pregunta: "formacion", es: ["universidad2", "otro"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide un título de educación superior o 3 años de experiencia profesional: se abre si podés acreditarlos." },
        // Art. 73.2 b) de la Ley 14/2013 (BOE, texto consolidado al 09/04/2025): titulación de al menos nivel 1
        // del MECES (en España, el técnico superior), igual que «hq». Falta confirmar el reconocimiento del título.
        { si: { pregunta: "formacion", es: ["tecnico"] }, resultado: "advierte", condicion: "formacion",
          motivo: "Esta vía acepta títulos de técnico superior. Antes de avanzar, confirmá que tu título terciario se reconozca en España con ese nivel." },
        // Tríptico de la UGE y Consulado de Buenos Aires: pueden pedir visado la pareja (registrada o no), los
        // hijos e hijas a cargo y los ascendientes a cargo, junto con la persona o después.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "nota", condicion: "cuidados",
          motivo: "Esta vía contempla a la familia: tu pareja, tus hijos e hijas y otros familiares a cargo pueden pedir visado para acompañarte." },
        // Tríptico de la UGE y página de la UGE «Trabajadores que efectúen movimientos intraempresariales»: la
        // modalidad ICT‑UE es para directivos, especialistas y trabajadores en formación; la nacional, para otros
        // casos (por ejemplo, la ejecución de un contrato de servicios).
        { resultado: "advierte", condicion: "mercado",
          motivo: "Hay dos modalidades: una para puestos de dirección, especialistas y personas en formación, y otra nacional para otros casos. Preguntale a tu empresa cuál corresponde a tu puesto: cambia cuánto dura el traslado." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: tríptico de la UGE «Traslado intraempresarial. Ciudadanos no UE» (sin
        // fecha; NIPO 720-16-209-1, depósito legal M-26544-2016); página de la UGE «Trabajadores que efectúen
        // movimientos intraempresariales» (sin fecha); página del Consulado de Buenos Aires «Visado para trabajador
        // altamente cualificado y para traslado intraempresarial» (sin fecha). No se pudieron leer: la página del
        // mismo visado en el Consulado de Córdoba, los arts. 73 a 76 de la Ley 14/2013 en el BOE (última
        // modificación: 09/04/2025) ni el PDF oficial del Criterio de gestión DGGM 2/2025.
        que: "Un permiso para que la empresa en la que ya trabajás te traslade a una sede o filial de su grupo en España. Hay una modalidad para puestos de dirección, especialistas y personas en formación, y otra nacional para otros casos.",
        // Art. 73.2 de la Ley 14/2013 (BOE, texto consolidado al 09/04/2025): 3 meses de relación previa y
        // continuada con el grupo; titulación de nivel 1 del MECES o 3 años de experiencia. Tríptico de la UGE:
        // titulación superior o equivalente, o 3 años de experiencia; lo pide la empresa; seguro médico;
        // certificado de antecedentes penales; no ser de la UE, el EEE ni Suiza.
        requisitos: ["3 meses o más trabajando en la empresa o el grupo", "Título de educación superior o 3 años de experiencia profesional", "Que la empresa decida trasladarte y lo pida", "Seguro médico", "No tener antecedentes penales", "No tener nacionalidad de un país de la UE"],
        // Familia: tríptico de la UGE y Consulado de Buenos Aires. No se afirma la movilidad a otros países de la
        // UE (solo ICT‑UE, según el tríptico): falta confirmarla en la ley vigente.
        sirve: "Trabajar en la sede española de tu empresa durante el traslado. Pueden acompañarte tu pareja, tus hijos e hijas y otros familiares a cargo.",
        // Tríptico de la UGE: la autorización dura lo que el traslado, hasta 2 años renovables, con un máximo de
        // 3 años (directivos y especialistas) y 1 año (trabajadores en formación). El Criterio DGGM 2/2025
        // (16/07/2025, PDF oficial de la UGE) y el art. 73.3 de la Ley 14/2013 (BOE) confirman: lo que dure el
        // traslado, hasta 3 años (directivos y especialistas) o 1 año (formación).
        noPermite: "No la podés pedir por tu cuenta: la pide la empresa. No sirve para buscar trabajo ni para cambiar de empleador. Es temporal: dura lo que dure el traslado, hasta 3 años (1 año si es un puesto en formación).",
        // Tríptico de la UGE: la presenta la empresa de destino o la que traslada en la UGE; autorización en 20
        // días; visado en 10 días. Consulado de Buenos Aires: se presenta en BLS, resuelve en 10 días y hay 1 mes
        // para retirarlo. Consulado de Córdoba (leída el 23/10/2026): en persona, con cita pedida por correo.
        tramite: "La empresa lo pide en la Unidad de Grandes Empresas, que resuelve en 20 días. Con la autorización, pedís el visado en el Consulado General de España en Córdoba (en persona, con cita que se pide por correo electrónico), que resuelve en 10 días.",
        fuente: { texto: "Unidad de Grandes Empresas: tríptico «Traslado intraempresarial» y Consulado de Buenos Aires", url: "https://www.inclusion.gob.es/documents/1823432/1826080/triptico-traslado-empresarial-ESP.pdf/72ee37b3-6a4a-3722-2a88-70501ed4aef2?t=1664798332880" },
        // Vigencia: Criterio de gestión DGGM 2/2025 (16/07/2025), el documento más reciente sobre la duración. No
        // leído en el PDF oficial de la UGE el 23/10/2026. El tríptico de la UGE, que respalda el resto, no
        // tiene fecha (depósito legal de 2016).
        vigencia: "Julio de 2025", verificar: false, relleno: false } },

    { id: "nomada", nombre: "Nómada digital", corto: "Nómada digital",
      resumen: "Vivir en España trabajando en remoto para empresas de afuera.",
      reglas: [
        // FAQ de la UGE sobre teletrabajadores de carácter internacional (n.º 4): «No aplica a ciudadanos de la
        // Unión Europea». Con pasaporte UE corresponde el registro como ciudadano/a de la UE (decisión del grupo:
        // ocultarla, igual que en Tarjeta Azul, Altamente cualificado y Traslado).
        { si: { pregunta: "pasaporte", es: ["espanol", "ue"] }, resultado: "oculta" },
        // Lo que pesa es tener trabajo remoto para afuera: depende del mercado de origen y del acceso a clientes
        // o empresas del exterior (decisión del grupo: mantener «mercado» y nombrarlo en el motivo, como en Traslado).
        { si: { pregunta: "remoto", es: ["no"] }, resultado: "depende", condicion: "mercado",
          motivo: "Se abre si trabajás en remoto para empresas o clientes de fuera de España, con ingresos demostrables de al menos {nomada_ingreso}. Conseguir ese trabajo depende de tu mercado laboral y de los contactos con el exterior, no solo de vos." },
        { si: { pregunta: "remoto", es: ["informal"] }, resultado: "cierra", condicion: "informalidad",
          motivo: "Pide ingresos demostrables de al menos {nomada_ingreso}. Sin facturación formal no hay cómo acreditarlos." },
        { si: { pregunta: "remoto", es: ["formal_bajo"] }, resultado: "cierra", condicion: "capital_economico",
          motivo: "Pide ingresos demostrables de al menos {nomada_ingreso}, el 200 % del salario mínimo español." },
        // UGE (documentación para titulares y FAQ n.º 19): 75 % del SMI por el primer familiar y 25 % por cada uno
        // más. La vía contempla a la familia; lo que pesa es que el umbral sube (decisión del grupo: «capital
        // económico» en lugar de «cuidados»).
        { si: [ { pregunta: "remoto", es: ["formal_alto"] }, { pregunta: "cuidados", es: ["si"] } ], resultado: "depende", condicion: "capital_economico",
          motivo: "El umbral sube con cada familiar que viaje con vos: {nomada_familiar1} por el primero y {nomada_familiar_extra} por cada uno más. Se abre si tus ingresos cubren ese total." },
        // FAQ de la UGE (n.º 17) y Consulado de Buenos Aires: pueden pedir visado la pareja, los hijos e hijas y
        // los ascendientes a cargo, y pueden residir y trabajar sin restricciones.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "nota", condicion: "cuidados",
          motivo: "Esta vía contempla a la familia: tu pareja, tus hijos e hijas y otros familiares a cargo pueden acompañarte y trabajar. Por cada familiar, el ingreso que te piden es mayor." },
        // UGE (documentación para titulares) y Consulado de Buenos Aires: título universitario, de FP o de escuela
        // de negocios, o 3 años de experiencia. Sin título, se abre con la experiencia.
        { si: { pregunta: "formacion", es: ["universidad2", "otro"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide título universitario o de formación profesional, o 3 años de experiencia: se abre si podés acreditarlos." },
        // UGE (documentación para titulares) y Consulado de Buenos Aires: 3 meses de relación previa con la empresa
        // o los clientes, y empresa con al menos 1 año de actividad real y continuada.
        { resultado: "advierte", condicion: "mercado",
          motivo: "Te piden 3 meses o más trabajando con esa empresa o esos clientes, y que la empresa tenga al menos 1 año de actividad. Revisá que puedas acreditar las dos cosas." },
        // Consulado de Buenos Aires: en profesiones reguladas hace falta homologar el título.
        { si: { pregunta: "formacion", es: ["universitario", "tecnico"] }, resultado: "advierte", condicion: "formacion",
          motivo: "Si tu profesión está regulada en España (por ejemplo, salud o abogacía), vas a necesitar homologar tu título. Es un trámite aparte y puede tardar." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: documentación de la UGE para teletrabajadores de carácter internacional
        // (sin fecha); preguntas frecuentes de la UGE sobre nómadas digitales (sin fecha); página del Consulado de
        // Buenos Aires «Visado de residencia para teletrabajo» (sin fecha); Criterio de gestión DGGM 2/2025
        // (16/07/2025), leído en una copia del Colegio de Gestores de Alicante. No se pudieron leer: la página del
        // mismo visado en el Consulado de Córdoba ni el art. 74 bis de la Ley 14/2013 en el BOE.
        que: "Un permiso para residir en España trabajando en remoto para empresas o clientes del exterior.",
        // 20 %: solo para quien trabaja por su cuenta (Consulado de Buenos Aires y FAQ de la UGE n.º 14). En relación
        // de dependencia, solo se puede trabajar para empresas de fuera de España.
        // 3 meses, 1 año de actividad, título o 3 años de experiencia, seguro sin copagos ni carencias,
        // antecedentes penales: documentación de la UGE. Homologación: Consulado de Buenos Aires. No UE: FAQ n.º 4.
        // Montos: 200 % del SMI, más 75 % y 25 % por familiar (UGE y FAQ n.º 19).
        requisitos: ["Relación laboral o comercial de 3 meses o más", "Empresa con 1 año o más de actividad", "Si trabajás en relación de dependencia, solo para empresas de fuera de España. Si trabajás por tu cuenta, no más del 20 % de tu actividad para empresas españolas", "Título universitario o de formación profesional, o 3 años de experiencia", "Título homologado, si tu profesión está regulada en España", "Ingresos demostrables de al menos {nomada_ingreso} (el 200 % del salario mínimo español), más {nomada_familiar1} por el primer familiar y {nomada_familiar_extra} por cada uno más", "Seguro médico sin copagos ni carencias (no sirve uno de viaje)", "No tener antecedentes penales", "No tener nacionalidad de un país de la UE"],
        // Familia: FAQ de la UGE (n.º 17) y Consulado de Buenos Aires.
        sirve: "Vivir en España sin depender del mercado laboral español. Pueden acompañarte tu pareja, tus hijos e hijas y otros familiares a cargo, y también pueden trabajar.",
        // Visado de 1 año: Consulado de Buenos Aires y FAQ de la UGE (n.º 15). Autorización desde España «por el
        // tiempo solicitado con el máximo de tres años»: Criterio DGGM 2/2025 (PDF oficial de la UGE) y art. 74
        // quinquies de la Ley 14/2013 (BOE), que además permite renovarla por períodos de 2 años.
        noPermite: "Si trabajás en relación de dependencia, no podés trabajar para empresas españolas. Si trabajás por tu cuenta, lo que hagas para empresas españolas no puede pasar del 20 % de tu actividad. No sirve para buscar trabajo en España. Es temporal: el visado dura 1 año y, desde España, podés pedir una autorización de hasta 3 años, que se renueva por períodos de 2 años.",
        // Consulado de Córdoba, «Visado de residencia para teletrabajo (nómada digital)» (sin fecha, leída el
        // 23/10/2026): en persona en Bv. Chacabuco 875, resuelve en 10 días y hay 1 mes para retirarlo. No da
        // el monto en euros: dice «mensualmente el 200 % del SMI».
        // Desde España: UGE, con el visado en vigor, en los 60 días antes de que venza (FAQ de la UGE n.º 15).
        tramite: "Consulado General de España en Córdoba, en persona (Bv. Chacabuco 875). Resuelve en 10 días. Si ya estás en España de forma legal, se pide en la Unidad de Grandes Empresas.",
        fuente: { texto: "Unidad de Grandes Empresas: preguntas frecuentes sobre teletrabajo internacional, y Consulado de Buenos Aires", url: "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/nomadas-digitales-faqs-espanol" },
        // Vigencia: Criterio de gestión DGGM 2/2025 (16/07/2025), el documento oficial más reciente que se pudo leer
        // (PDF oficial, leído el 23/10/2026). Las páginas de la UGE y de los Consulados de Buenos Aires y de
        // Córdoba, que respaldan los requisitos, no tienen fecha.
        vigencia: "Julio de 2025", verificar: false, relleno: false } },

    { id: "emprendedor", nombre: "Emprendedor/a", corto: "Emprendedor",
      resumen: "Para proyectos innovadores o escalables, con informe de ENISA.",
      reglas: [
        // Instrucciones de la UGE para la solicitud de emprendedores (sin fecha): es para personas que no son
        // ciudadanas de la UE. Con pasaporte UE corresponde el registro como ciudadano/a de la UE (decisión del
        // grupo: ocultarla, igual que en Tarjeta Azul, Altamente cualificado, Traslado y Nómada digital).
        { si: { pregunta: "pasaporte", es: ["espanol", "ue"] }, resultado: "oculta" },
        { si: { pregunta: "propia", es: ["no"] }, resultado: "noInteresa" },
        { si: { pregunta: "propia", es: ["innovador"] }, resultado: "depende", condicion: "innovacion",
          motivo: "Se abre con un informe favorable de ENISA sobre tu proyecto." },
        { si: { pregunta: "propia", es: ["negocio"] }, resultado: "depende", condicion: "innovacion",
          motivo: "Es para proyectos innovadores o escalables. Para un negocio tradicional, mirá la vía de cuenta propia." },
        // Instrucción DGM 1/2023 (03/04/2023), 3.ª: medios que representen «mensualmente el 200 % del SMI», más
        // 75 % del SMI por el primer familiar y 25 % por cada uno más; hay que acreditar que son propios, lícitos
        // y disponibles. La página de la UGE aclara que no hay inversión mínima. La pregunta de ahorros no mide
        // este monto, por eso es una advertencia y no un cierre.
        { resultado: "advierte", condicion: ["capital_economico", "informalidad"],
          motivo: "No pide una inversión mínima, pero sí medios económicos de al menos {nomada_ingreso} por mes, y más por cada familiar. Tenés que poder demostrar que ese dinero es tuyo y de origen legal. Revisá que puedas acreditarlo." },
        // Instrucciones de la UGE para la solicitud de emprendedores: se presenta en la sede electrónica con
        // Cl@ve o certificado digital.
        { resultado: "advierte", condicion: "redes",
          motivo: "La solicitud se presenta en línea y hace falta Cl@ve o un certificado digital español. Desde Argentina, revisá cómo vas a conseguirlo o quién puede presentarla por vos." },
        // Familia: Consulado de España en Londres, «Visado para emprendedor» (29/04/2026): pareja, hijos e hijas
        // (también mayores a cargo) y ascendientes a cargo. Ley 28/2022, preámbulo (BOE 22/12/2022): pueden ir
        // desde el principio o después. Monto: Instrucción DGM 1/2023, 3.ª. Si pueden trabajar: no confirmado.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "nota", condicion: "cuidados",
          motivo: "Esta vía contempla a la familia: tu pareja, tus hijos e hijas y otros familiares a cargo pueden acompañarte, desde el principio o después. Por cada familiar, los medios económicos que te piden son mayores." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: página «Emprendedores» de la UGE (sin fecha); «Instrucciones para realizar
        // una solicitud de la autorización de emprendedores» de la UGE (sin fecha, ~2023); Instrucción DGM 1/2023
        // (03/04/2023), leída en una copia de mentorday.es; Criterio de gestión DGGM 2/2025 (16/07/2025), leído en
        // una copia del Colegio de Gestores de Alicante; Consulado de Londres, «Visado para emprendedor» (29/04/2026).
        // No se pudieron leer: la página del visado en el Consulado de Córdoba (figura en el menú, sin contenido),
        // la de Buenos Aires, ni los arts. 61 a 70 de la Ley 14/2013 en el BOE.
        // «3 años»: «vigencia única de tres años (artículo 69.1)», Criterio DGGM 2/2025. La renovación por 2 años
        // y el visado de 1 año (este último, según Londres) no se confirmaron para Argentina: no se muestran.
        que: "Un permiso de 3 años para desarrollar un proyecto emprendedor en España.",
        // Proyecto: «innovadora y/o tenga especial interés económico para España» (UGE e Instrucción DGM 1/2023,
        // 7.1); la escalabilidad es el criterio con que ENISA mide ese interés (7.3). Informe de ENISA: perfil,
        // plan de negocio y valor añadido (UGE). Medios y seguro: Instrucción DGM 1/2023, 3.ª y 5.ª. Antecedentes:
        // instrucciones de la UGE (desde el exterior, el certificado se presenta en el consulado). Mayor de 18:
        // página de la UGE. No UE: instrucciones de la UGE.
        requisitos: ["Proyecto innovador o de especial interés económico para España (por ejemplo, escalable)", "Informe favorable de ENISA sobre tu perfil, tu plan de negocio y lo que aporta a la economía española", "Medios económicos de al menos {nomada_ingreso} por mes (el 200 % del salario mínimo español), más {nomada_familiar1} por el primer familiar y {nomada_familiar_extra} por cada uno más", "Seguro médico público o privado con una aseguradora que opere en España (no sirve uno de viaje)", "No tener antecedentes penales", "Ser mayor de 18 años", "No tener nacionalidad de un país de la UE"],
        // Sin inversión mínima ni creación de empleo: página de la UGE. Familia: Consulado de Londres (29/04/2026).
        sirve: "Desarrollar tu proyecto en España durante 3 años. No pide un monto mínimo de inversión ni crear empleo. Pueden acompañarte tu pareja, tus hijos e hijas y otros familiares a cargo.",
        // Negocio tradicional: corresponde a cuenta propia (RD 1155/2024). Informe favorable: UGE. 3 años: Criterio
        // DGGM 2/2025.
        noPermite: "No sirve para un negocio o servicio tradicional: para eso está la vía de trabajo por cuenta propia. Sin informe favorable de ENISA no se concede. Es temporal: la autorización dura 3 años.",
        // Instrucciones de la UGE: se presenta en su sede electrónica (Cl@ve o certificado digital); los datos del
        // proyecto se cargan en la web de ENISA. Instrucción DGM 1/2023, 7.7: la UGE pide el informe a ENISA, que
        // tiene 10 días hábiles. Visado después de la autorización: Consulado de Londres (29/04/2026) pide la
        // autorización de la UGE. Córdoba ofrece el visado (figura en su menú de visados nacionales).
        tramite: "Se pide en línea a la Unidad de Grandes Empresas, con certificado digital. Ella le pide el informe a ENISA, donde cargás los datos del proyecto. Con la autorización, pedís el visado en el Consulado General de España en Córdoba.",
        fuente: { texto: "Unidad de Grandes Empresas: Emprendedores", url: "https://www.inclusion.gob.es/web/unidadgrandesempresas/emprendedores" },
        // Vigencia: Instrucción DGM 1/2023 (03/04/2023), el documento que respalda los requisitos principales.
        // Otras fuentes: Criterio DGGM 2/2025 (julio de 2025, duración) y Consulado de Londres (abril de 2026,
        // familia y visado). Las páginas de la UGE no tienen fecha.
        vigencia: "Abril de 2023", verificar: false, relleno: false } },

    { id: "cuenta_propia", nombre: "Trabajo por cuenta propia", corto: "Cuenta propia",
      resumen: "Para trabajar de forma autónoma con un plan de negocio.",
      reglas: [
        // Hoja 14 de Inclusión (mayo de 2025), requisito 1: no ser ciudadano/a de la UE, el EEE ni Suiza. Con
        // pasaporte UE corresponde el registro como ciudadano/a de la UE (decisión del grupo: ocultarla, igual que
        // en Emprendedor/a, Tarjeta Azul, Altamente cualificado, Traslado y Nómada digital).
        { si: { pregunta: "pasaporte", es: ["espanol", "ue"] }, resultado: "oculta" },
        { si: { pregunta: "propia", es: ["no"] }, resultado: "noInteresa" },
        // Hoja 14 de Inclusión (mayo de 2025): «que la inversión prevista sea suficiente», sin monto fijo. Ni el
        // RD 1155/2024 (art. 84) ni la Hoja nombran el IPREM para esta vía.
        { resultado: "advierte", condicion: "capital_economico",
          motivo: "Pide demostrar que la inversión alcanza para tu proyecto. No hay un monto fijo: depende de tu plan de negocio." },
        // Hoja 14 de Inclusión (mayo de 2025): hay que cumplir los requisitos de apertura y funcionamiento de la
        // actividad y presentar la relación de licencias o autorizaciones necesarias, con el estado de su trámite
        // (o la declaración responsable, para comercio minorista y algunos servicios en locales de hasta 750 m²).
        { si: { pregunta: "propia", es: ["innovador", "negocio"] }, resultado: "advierte", condicion: "redes",
          motivo: "Al presentar la solicitud tenés que mostrar qué licencias o permisos necesita tu actividad en España y en qué estado está cada trámite. Desde Córdoba, revisá cómo vas a gestionarlos o quién puede hacerlo allá." },
        // Hoja 8 de Inclusión (reagrupación familiar): para reagrupar hay que haber residido al menos 1 año en
        // España y tener autorización por al menos otro año. La autorización inicial de cuenta propia dura 1 año
        // (Hoja 14), así que la familia no puede viajar desde el principio por esta vía.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "advierte", condicion: "cuidados",
          motivo: "Las personas a tu cargo no pueden viajar con vos desde el principio. Para reagruparlas tenés que haber vivido 1 año en España y renovar el permiso." },
        // Hoja 15 de Inclusión (mayo de 2025): la renovación dura 4 años y habilita a trabajar por cuenta ajena
        // y propia en cualquier parte del territorio y en cualquier sector (RD 1155/2024, arts. 86 y 87).
        { si: { pregunta: "propia", es: ["innovador", "negocio"] }, resultado: "nota",
          motivo: "El primer año queda limitado a una región y un sector. Si lo renovás, pasa a 4 años sin esos límites." } ],
      ficha: {
        // Revisada el 23/10/2026 contra: Hoja 14 de Inclusión, «Autorización inicial de residencia temporal y
        // trabajo por cuenta propia» (última actualización: mayo de 2025; cita los arts. 82 a 85 del RD 1155/2024);
        // Hoja 15, «Renovación…» (mayo de 2025); Hoja 8, «Reagrupación familiar» (sin fecha leída). El Consulado de
        // Córdoba ofrece este visado (figura en su menú de visados nacionales), pero su contenido no se pudo leer;
        // tampoco el RD 1155/2024 en el BOE.
        que: "Una autorización para vivir y trabajar de forma autónoma en España, si hoy vivís fuera.",
        // Hoja 14 de Inclusión (mayo de 2025), requisitos 1, 3 y 7 a 9: no ser de la UE, el EEE ni Suiza; sin
        // antecedentes penales en los países de residencia de los últimos 5 años; requisitos legales de apertura y
        // funcionamiento de la actividad; cualificación exigible o experiencia acreditada, y colegiación cuando
        // proceda; inversión suficiente y su efecto en la creación de empleo, incluido el autoempleo.
        // Antes decía «Plan de negocio viable»: la Hoja no lo nombra así, por eso se reemplazó por sus requisitos.
        requisitos: ["Un proyecto que cumpla lo que se le pide a cualquier negocio en España para abrir y funcionar (licencias o permisos)", "Inversión suficiente para el proyecto (no hay un monto fijo) y que genere empleo, aunque sea el tuyo", "La cualificación que pida la actividad, o experiencia suficiente en ella, y colegiarte si hace falta", "No tener antecedentes penales de los últimos 5 años", "No tener nacionalidad de un país de la UE"],
        // Hoja 14: autorización inicial de 1 año. Hoja 15 (mayo de 2025): la renovación dura 4 años y habilita a
        // trabajar por cuenta ajena y propia en cualquier parte del territorio y en cualquier sector.
        sirve: "Vivir y trabajar por tu cuenta en España durante 1 año. Si lo renovás, pasa a 4 años y podés trabajar en cualquier sector y lugar, también en relación de dependencia.",
        // Hoja 14 de Inclusión (mayo de 2025): limitada a un ámbito geográfico autonómico y a un sector de
        // actividad. Familia: Hoja 8 (1 año de residencia previa para reagrupar).
        // No se muestra: si el primer permiso habilita trabajo por cuenta ajena. Solo se deduce de la Hoja 15.
        noPermite: "El primer año queda limitado a una comunidad autónoma y un sector. Tu familia no puede ir con vos desde el principio: para reagruparla tenés que haber vivido 1 año en España.",
        // Hoja 14 de Inclusión (mayo de 2025): se presenta en persona en la oficina consular de tu residencia;
        // resolución en 3 meses con silencio negativo; con la concesión, 1 mes para pedir el visado (que se
        // resuelve en 1 mes) y entrada dentro de la vigencia del visado (3 meses). La inversión y su efecto en el
        // empleo pueden acreditarse, por ejemplo, con un informe de ATA, UPTA, CIAE, OPA o UATAE.
        tramite: "Lo presentás en persona en el Consulado General de España en Córdoba. La inversión se puede acreditar, por ejemplo, con un informe de una organización de trabajadores autónomos. Extranjería resuelve en 3 meses: si no contesta, se entiende denegada. Si sale, tenés 1 mes para pedir el visado y, una vez concedido, 3 meses para entrar.",
        fuente: { texto: "Hoja 14 de Inclusión: autorización inicial de residencia temporal y trabajo por cuenta propia (mayo de 2025)", url: "https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-y-trabajo-por-cuenta-propia" },
        // Vigencia: Hoja 14 (mayo de 2025), que respalda los requisitos principales. Otras fuentes: Hoja 15
        // (mayo de 2025, renovación) y Hoja 8 (reagrupación, sin fecha leída).
        vigencia: "Mayo de 2025", verificar: false, relleno: false } },
    { id: "investigador", nombre: "Investigador/a", corto: "Investigación",
      resumen: "Para investigar en una universidad, centro de I+D o empresa.",
      reglas: [
        // Hoja 68 de Inclusión (agosto de 2026): no aplica a nacionales de la UE, el EEE o Suiza. Con pasaporte UE
        // corresponde el registro como ciudadano/a de la UE (decisión del grupo: ocultarla, igual que en
        // Tarjeta Azul, Altamente cualificado, Traslado, Nómada digital, Emprendedor/a y Cuenta propia).
        { si: { pregunta: "pasaporte", es: ["espanol", "ue"] }, resultado: "oculta" },
        { si: { pregunta: "investigar", es: ["no"] }, resultado: "noInteresa" },
        { si: { pregunta: "investigar", es: ["interes"] }, resultado: "depende", condicion: ["capital_academico", "redes"],
          motivo: "Se abre si una universidad, un centro de I+D o una empresa te acepta para investigar." },
        // Hoja 68 de Inclusión (agosto de 2026): doctorandos sin contrato, 50 % del SMI anual.
        { si: { pregunta: "investigar", es: ["si", "interes"] }, resultado: "advierte", condicion: "capital_economico",
          motivo: "Si vas a hacer un doctorado sin contrato, pide demostrar al menos {doctorado_medios} por año ({doctorado_medios_familia} si viaja un familiar)." },
        // Hoja 68 de Inclusión (agosto de 2026): seguro de una aseguradora autorizada en España; no valen los de
        // viaje ni los que tienen copagos o carencias.
        { si: { pregunta: "investigar", es: ["si", "interes"] }, resultado: "advierte", condicion: "capital_economico",
          motivo: "El seguro médico tiene que ser de una aseguradora autorizada en España: no sirve un seguro de viaje ni uno con copagos o carencias." },
        // Hoja 68 de Inclusión (agosto de 2026): pueden ir la pareja, los hijos e hijas y los ascendientes a
        // cargo, en forma conjunta, simultánea o sucesiva. Los medios suben si viaja un familiar.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "nota", condicion: "cuidados",
          motivo: "Esta vía contempla a tu familia: las personas a tu cargo pueden ir con vos desde el principio o después." } ],
      ficha: {
        // Hoja 68 de Inclusión (agosto de 2026): la autorización dura 3 años o lo que dure el convenio o
        // contrato, si es menos, y habilita a residir y trabajar para hacer actividades de investigación,
        // desarrollo e innovación (no cualquier trabajo).
        que: "Un permiso de 3 años para investigar o hacer un doctorado, con permiso de trabajo para esa actividad.",
        // Hoja 68 de Inclusión (agosto de 2026): convenio de acogida o contrato con la entidad; doctorandos
        // considerados investigadores (Criterio de gestión 2/2026; Consulado de Buenos Aires, noticia del
        // 4/10/2026); medios del 50 % del SMI anual sin contrato; seguro (no de viaje); sin antecedentes
        // penales de los últimos 2 años (más declaración responsable de 5); mayor de 18; no ser de la UE.
        requisitos: ["Aceptación o contrato de una universidad, centro de I+D o empresa", "Para hacer un doctorado se pide esta vía, no la de estudiante", "Doctorado sin contrato: medios de al menos {doctorado_medios} por año", "Seguro médico (no de viaje)", "No tener antecedentes penales de los últimos 2 años", "Ser mayor de 18 años", "No tener nacionalidad de un país de la UE"],
        // Hoja 68 de Inclusión (agosto de 2026): familiares (pareja, hijos e hijas, ascendientes a cargo);
        // renovación por 2 años; al terminar, hasta 12 meses para buscar empleo o emprender.
        // No se muestra: si los familiares pueden trabajar. La Hoja 68 no lo dice; la Directiva (UE) 2016/801
        // (art. 26.6) lo garantiza solo en la modalidad UE. Falta leer el art. 62 de la Ley 14/2013 en el BOE.
        sirve: "Investigar o hacer un doctorado en España y trabajar en esa actividad. Pueden ir tu pareja, tus hijos e hijas y otros familiares a cargo. Se renueva por 2 años y, al terminar, tenés hasta 12 meses para buscar trabajo o emprender.",
        // Hoja 68 de Inclusión (agosto de 2026): trabajo solo en la actividad investigadora; hace falta convenio
        // o contrato; 3 años o lo que dure el convenio; para renovar, misma entidad y actividad continuada.
        noPermite: "No es un permiso para cualquier trabajo: solo para la actividad de investigación. Sin la aceptación o el contrato de una entidad no se puede pedir. Dura 3 años, o menos si el convenio es más corto, y para renovar tenés que seguir en la misma entidad.",
        // Hoja 68 de Inclusión (agosto de 2026): la presenta en línea la entidad (o el doctorando sin contrato)
        // ante la UGE; resolución en 20 días hábiles con silencio positivo; con residencia en el exterior,
        // visado en el consulado que corresponda.
        tramite: "La entidad que te recibe pide la autorización en línea a la Unidad de Grandes Empresas. Si hacés un doctorado sin contrato, la podés pedir vos. Resuelven en 20 días hábiles: si no contestan, se entiende concedida. Después, pedís el visado en el Consulado General de España en Córdoba.",
        fuente: { texto: "Hoja 68 de Inclusión: autorización de residencia temporal y trabajo para investigación (agosto de 2026)", url: "https://www.inclusion.gob.es/web/migraciones/w/68.-autorizacion-de-residencia-temporal-y-trabajo-para-investigacion" },
        // Vigencia: Hoja 68 (agosto de 2026), que respalda los requisitos principales. Otra fuente: noticia del
        // Consulado de Buenos Aires del 4/10/2026 (doctorado como investigación).
        vigencia: "Agosto de 2026", verificar: false, relleno: false } },

    { id: "practicas", nombre: "Prácticas", corto: "Prácticas",
      resumen: "Para recién recibidos con un convenio de prácticas en España.",
      reglas: [
        { si: { pregunta: "egreso", es: ["medio", "mas3"] }, resultado: "cierra", condicion: "edad_egreso",
          motivo: "Es para quienes se recibieron hace menos de 2 años o están estudiando." },
        // Hoja 21 de Inclusión (sept. 2025): título de educación superior (incluye FP de grado superior)
        // de los 2 años anteriores, o estar estudiando para obtenerlo.
        { si: { pregunta: "formacion", es: ["otro"] }, resultado: "cierra", condicion: "formacion",
          motivo: "Pide un título de educación superior (incluye el técnico superior) o estar estudiando para obtenerlo." },
        { si: { pregunta: "practicas", es: ["no"] }, resultado: "noInteresa" },
        // Hoja 21 de Inclusión (sept. 2025): «Esta autorización no prevé la reagrupación familiar».
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "advierte", condicion: "cuidados",
          motivo: "No permite reagrupar familiares: no podrías llevar a las personas a tu cargo." },
        { si: { pregunta: "practicas", es: ["interes"] }, resultado: "depende", condicion: "redes",
          motivo: "Se abre con un convenio de prácticas de una entidad española." },
        { si: [ { pregunta: "practicas", es: ["si", "interes"] }, { pregunta: "ahorros", es: ["bajo"] } ], resultado: "depende", condicion: "capital_economico",
          motivo: "Si las prácticas no son pagas, vas a necesitar cómo sostenerte." } ],
      ficha: {
        // «pasar a trabajo»: el RD 1155/2024 (art. 191) permite cambiar de residencia a residencia y trabajo
        // sin visado, pero con una oferta y los requisitos de cuenta ajena. Ni la Hoja 21 ni la Ley 14/2013
        // lo prevén para prácticas en particular.
        // Hoja 21 de Inclusión (sept. 2025): «título de educación superior» incluye la formación profesional
        // de grado superior; con convenio (sin contrato) pide el 100 % del IPREM por mes; no permite
        // reagrupar familiares.
        que: "Un permiso para hacer prácticas con una entidad española. Al terminar, para quedarte a trabajar hace falta una oferta y cumplir los requisitos de cuenta ajena.",
        // Ley 14/2013, disposición adicional 18.ª, y Consulado de Córdoba (oct. 2026): sirve un convenio
        // de prácticas o un contrato de trabajo en prácticas. Además, las prácticas tienen que ser del
        // mismo campo y nivel que tu título o tus estudios, y hay que tener seguro y recursos suficientes.
        requisitos: ["Título de educación superior (incluye el técnico superior) obtenido hace menos de 2 años, o estar estudiando para obtenerlo", "Convenio o contrato de prácticas con una entidad española, en el mismo campo y nivel que tu título", "Si no hay contrato: medios de vida ({estudiante_medios}) y seguro médico"],
        sirve: "Hacer una primera experiencia laboral en España.",
        noPermite: "No permite reagrupar familiares.",
        // Ley 14/2013, DA 18.ª: la entidad española pide la autorización en la Delegación o Subdelegación
        // del Gobierno de la provincia de las prácticas (resuelve en 30 días); después, visado en el consulado.
        tramite: "La entidad española pide la autorización en España; después, visado en el Consulado General de España en Córdoba.",
        fuente: { texto: "Portal de inmigración, Gobierno de España", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "estudiante", nombre: "Estudiante", corto: "Estudios",
      resumen: "Para estudiar un máster u otro estudio superior.",
      reglas: [
        // Consulado de Buenos Aires y RD 1155/2024 (art. 35): 100 % del IPREM por mes de estudio, hasta 12
        // meses. Se acredita con ahorros, beca o ingresos regulares. Un programa corto pide menos de 7.200 €.
        { si: { pregunta: "ahorros", es: ["bajo"] }, resultado: "depende", condicion: "capital_economico",
          motivo: "Se abre si podés demostrar {estudiante_medios} de estudio (hasta 12 meses), con ahorros, una beca o ingresos regulares. Aparte está el costo de la matrícula." },
        { si: { pregunta: "estudiar", es: ["no"] }, resultado: "noInteresa" },
        { si: { pregunta: "estudiar", es: ["si"] }, resultado: "nota",
          motivo: "Te permite trabajar hasta {estudiante_horas} y pasar a residencia y trabajo sin salir de España." } ],
      ficha: {
        que: "Una estancia por estudios superiores (Real Decreto 1155/2024).",
        requisitos: ["Admisión en un estudio superior", "Medios económicos para el período de estudios: al menos {estudiante_medios} (hasta 12 meses), más un extra por cada familiar", "Seguro médico completo, sin copagos"],
        sirve: "Estudiar y trabajar hasta {estudiante_horas}, y después pasar a residencia y trabajo sin salir de España.",
        noPermite: "No permite trabajar a tiempo completo mientras estudiás.",
        tramite: "Consulado General de España en Córdoba.",
        fuente: { texto: "Portal de inmigración, Gobierno de España", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "vyt", nombre: "Vacaciones y Trabajo", corto: "Vacaciones y Trabajo",
      resumen: "Una estancia de hasta 12 meses para explorar, no para quedarse.",
      reglas: [
        { si: { pregunta: "edad", es: ["mas35"] }, resultado: "cierra", condicion: "edad_egreso",
          motivo: "Es para personas de 18 a 35 años." },
        { si: { pregunta: "formacion", es: ["otro"] }, resultado: "cierra", condicion: "formacion",
          motivo: "Pide título universitario o de educación superior, o al menos 2 años aprobados de una carrera universitaria (los años de terciario no cuentan)." },
        // Acuerdo (BOE-A-2023-2097, art. 2.e): «En ningún caso los beneficiarios podrán viajar acompañados
        // por familiares a su cargo». No prohíbe tenerlos: se puede ir sin ellos.
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "advierte", condicion: "cuidados",
          motivo: "El programa no permite viajar con hijos u otras personas a tu cargo. Si vas, es sin ellas, y su cuidado acá tiene que quedar resuelto." },
        { si: { pregunta: "ahorros", es: ["bajo"] }, resultado: "cierra", condicion: "capital_economico",
          motivo: "Pide demostrar fondos de {vyt_fondos}, o {vyt_mes} por cada mes de estancia si tenés pasaje de regreso, y un seguro con cobertura de {vyt_seguro}." },
        // Hoja de Buenos Aires (V.22-04-2026): con pasaje de regreso, fondos por los meses de estancia.
        { si: { pregunta: "ahorros", es: ["medio"] }, resultado: "advierte", condicion: "capital_economico",
          motivo: "Con menos de {vyt_fondos} podés ir si tenés pasaje de regreso, pero solo por los meses que cubras: {vyt_mes} por cada mes de estancia." },
        // Suspensión en Córdoba: YoMeAnimo (17/03/2026, act. 20/04/2026; y 15/10/2026), sin fuente oficial.
        // No tenemos respuesta del consulado: queda como tarea para quien usa el mapa.
        { resultado: "advierte",
          motivo: "Según fuentes no oficiales, desde marzo de 2026 el Consulado de Córdoba no estaría recibiendo solicitudes. Antes de empezar, escribiles a cog.cordoba.vis@maec.es para confirmarlo." },
        { si: { pregunta: "edad", es: ["hasta35"] }, resultado: "nota",
          motivo: "Hay {vyt_cupo} lugares por año en todo el país. Al terminar, hay que regresar." } ],
      ficha: {
        que: "El Programa de Movilidad de Jóvenes entre Argentina y España: una estancia para explorar, no una vía para quedarse.",
        // Fondos: 1.221 €/mes (SMI 2026) por 12 meses = 14.652 €. Hoja del Consulado de Buenos Aires
        // V.22-04-2026, que reemplazó a la V.05-03-2026 en el mismo enlace.
        requisitos: ["Entre 18 y 35 años", "Título universitario o de educación superior. No hace falta estar recibido/a: alcanza con al menos 2 años aprobados de una carrera universitaria (los años de terciario no cuentan)", "Fondos de {vyt_fondos} (o {vyt_mes} por cada mes de estancia, con pasaje de regreso)", "Seguro con cobertura de {vyt_seguro}", "No haber participado antes del programa"],
        sirve: "Pasar hasta 12 meses en España y trabajar hasta 6 meses en total.",
        noPermite: "No se extiende a familiares. Se hace una sola vez. Hay que regresar al terminar.",
        // Octubre 2026: la sección de visados del Consulado de Córdoba no lista este programa
        // y su página del programa (10/03/2023) tiene montos viejos (SMI 2023: 1.080 €/mes). Los 15.120 €
        // que cita YoMeAnimo (15/10/2026) no cierran con su propio cálculo (1.134 €/mes) y parecen
        // 1.080 × 14 pagas, la cifra vieja. La regla del convenio es el SMI vigente por mes de estancia:
        // se usa la hoja de Buenos Aires (SMI 2026: 1.221 €/mes, RD 126/2026).
        // Correo: lo dicen la página de Córdoba (2023) y YoMeAnimo (15/10/2026): se manda todo en PDF a
        // cog.cordoba.vis@maec.es, después dan turno para el NIE y luego la cita presencial del visado.
        // YoMeAnimo advierte, por comentarios de lectores, que Córdoba podría no estar recibiendo
        // solicitudes: conviene preguntarle al consulado.
        tramite: "Consulado General de España en Córdoba, si tu DNI tiene domicilio en Córdoba, Catamarca, La Rioja, Santiago del Estero, Tucumán, Salta o Jujuy. La documentación se envía en PDF a cog.cordoba.vis@maec.es. Hay {vyt_cupo} visados por año para todo el país, repartidos entre cinco consulados.",
        fuente: { texto: "Hoja informativa del Consulado General de España en Buenos Aires (abril de 2026)", url: "https://www.exteriores.gob.es/Consulados/buenosaires/es/ServiciosConsulares/Documents/Hoja%20informativa%20visado%20movilidad%20j%C3%B3venes%20Argentina%20V.%2005-03-2026.pdf" },
        vigencia: "Abril de 2026", verificar: false, relleno: false } }
  ],

  /* Hoja final: siempre visible */
  siempre: [
    { titulo: "Otros destinos",
      texto: "España no es el único mapa. Argentina tiene acuerdos de Vacaciones y Trabajo con otros países, y cada país tiene sus propias vías.",
      relleno: true },
    { titulo: "Tu proyecto de vida en Córdoba",
      texto: "Quedarte también es una elección legítima, con sus propias puertas: posgrados, trabajo remoto desde acá, proyectos colectivos. Elegir no se reduce a irse o quedarse.",
      relleno: false },
    { titulo: "Dónde pedir orientación",
      texto: "Servicios de orientación vocacional y ocupacional de tu universidad. Consulado General de España en Córdoba para los trámites. Profesionales del derecho migratorio para casos concretos.",
      relleno: true }
  ],

  /* Recorridos de ejemplo (personajes ficticios) */
  personas: [
    { id: "A", nombre: "Valentina", edad: 27,
      descripcion: "Ingeniera en sistemas. Tiene ciudadanía italiana por su abuelo. Trabaja en remoto para una empresa de afuera.",
      clave: "Muestra el peso de la herencia: casi todo le queda abierto.",
      resp: { pasaporte: "ue", ascendencia: "no", edad: "hasta35", formacion: "universitario", egreso: "medio", cuidados: "no", ahorros: "alto", oferta: "no", remoto: "formal_alto", propia: "no", investigar: "interes", practicas: "no", estudiar: "si" },
      notas: {
        pasaporte: "Su abuelo italiano le dejó una puerta que no depende de ningún visado.",
        remoto: "Trabaja con contrato y factura: sus ingresos se pueden demostrar." } },

    { id: "B", nombre: "Joaquín", edad: 30,
      descripcion: "Técnico superior. Trabaja en remoto para clientes del exterior, pero sin facturación formal.",
      clave: "Muestra cómo pesa la informalidad laboral, y cómo una vía depende de tener ahorros.",
      resp: { pasaporte: "no", ascendencia: "no", edad: "hasta35", formacion: "tecnico", egreso: "mas3", cuidados: "no", ahorros: "bajo", oferta: "no", remoto: "informal", propia: "no", investigar: "no", practicas: "no", estudiar: "no" },
      notas: {
        ahorros: "Si Joaquín tuviera {vyt_fondos}, Vacaciones y Trabajo seguiría abierta. Podés probarlo después con «Cambiar».",
        remoto: "Trabaja en remoto, pero cobra sin factura: el entorno no le reconoce esos ingresos." } },

    { id: "C", nombre: "Romina", edad: 33,
      descripcion: "Profesional universitaria, con un hijo. No tiene ascendencia europea.",
      clave: "Muestra cómo varias condiciones se cruzan y cierran casi todo a la vez.",
      resp: { pasaporte: "no", ascendencia: "no", edad: "hasta35", formacion: "universitario", egreso: "mas3", cuidados: "si", ahorros: "bajo", oferta: "no", remoto: "no", propia: "no", investigar: "interes", practicas: "no", estudiar: "si" },
      notas: {
        cuidados: "Tener a su hijo a cargo pesa en las vías que no contemplan a quienes cuidan: Vacaciones y Trabajo no le permite viajar con él.",
        estudiar: "Le interesa estudiar, pero la vía pide capital económico." } }
  ]
};
