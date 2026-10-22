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
    // Nota informativa de la UGE «Umbral salarial 2026» (junio de 2026)
    ta_salario:            "41.356,36 €/año",
    ta_reducido:           "33.085,09 €/año",
    // Profesional altamente cualificado (vía nacional): umbral único, sin reducido.
    // Misma nota de la UGE (junio de 2026)
    hq_salario:            "41.356,36 €/año",
    // Nómada digital: ingreso mínimo y suplementos por familiar.
    // 200 % del SMI = 2.442 € × 14 pagas ÷ 12 (Consulado de Buenos Aires y UGE, 2026)
    nomada_ingreso:        "2.849 €/mes",
    nomada_familiar1:      "75 % del SMI",
    nomada_familiar_extra: "25 % del SMI",
    // IPREM anual: medios de vida de cuenta propia y de un año de estudios.
    // Es también el primer corte de la pregunta de ahorros.
    iprem_anual:           "7.200 €",
    // Vacaciones y Trabajo: fondos, seguro y cupo anual
    vyt_fondos:            "14.652 €",
    vyt_seguro:            "30.000 €",
    vyt_cupo:              "500",
    // Estudiante: horas de trabajo permitidas
    estudiante_horas:      "30 horas por semana",
    // Estudiante: medios económicos (100 % del IPREM). Consulado de Buenos Aires, 2026
    estudiante_medios:     "600 € por mes"
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
       resultado "nota"       → aclaración que se suma a la tarjeta */
  vias: [
    { id: "ue", nombre: "Registro como ciudadano/a de la UE", corto: "Ciudadanía UE",
      resumen: "Con pasaporte de otro país de la UE, te registrás como ciudadano/a comunitario/a.",
      reglas: [
        { si: { pregunta: "pasaporte", es: ["espanol"] }, resultado: "oculta" },
        { si: { pregunta: "pasaporte", es: ["no"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Pide un pasaporte de otro país de la UE. Tenerlo depende de la historia migratoria de tu familia y de que se haya podido documentar." } ],
      ficha: {
        que: "El registro que hacen en España las personas con ciudadanía de otro país de la Unión Europea.",
        requisitos: ["Pasaporte o documento de un país de la UE", "Registrarse por trabajo, por recursos propios (seguro médico y medios económicos) o por estudios"],
        sirve: "Vivir y trabajar en España sin visado.",
        noPermite: "No reemplaza los trámites de residente: empadronamiento y Seguridad Social.",
        tramite: "Oficina de extranjería o comisaría de policía en España.",
        fuente: { texto: "Portal de inmigración, Gobierno de España", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "familiar", nombre: "Residencia como familiar de español/a", corto: "Familiar de español",
      resumen: "Residencia para hijos e hijas de españoles de origen.",
      reglas: [
        { si: { pregunta: "pasaporte", es: ["espanol"] }, resultado: "oculta" },
        { si: { pregunta: "ascendencia", es: ["no"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Es para hijos e hijas de españoles de origen." },
        { si: { pregunta: "ascendencia", es: ["abuelo"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Es para hijos e hijas. Por abuelo o abuela, mirá la vía de búsqueda de empleo." },
        { si: { pregunta: "ascendencia", es: ["nose"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Si no lo sabés, vale la pena preguntar en tu familia: esta vía depende de documentos que a veces nadie buscó." },
        // Fuente: Consulado de Córdoba, «Nacionalidad española - Opción» (octubre 2026)
        { si: { pregunta: "ascendencia", es: ["padre"] }, resultado: "nota",
          motivo: "Si tu padre o tu madre es español/a de origen y nació en España, también podés pedir la nacionalidad española por opción, a cualquier edad. Se inicia en el Consulado General de España en Córdoba." } ],
      ficha: {
        que: "Una autorización de residencia para familiares de personas con nacionalidad española, prevista en el nuevo reglamento de extranjería (Real Decreto 1155/2024).",
        requisitos: ["Padre o madre español/a de origen", "Documentación que acredite el vínculo"],
        sirve: "Residir y trabajar en España.",
        noPermite: "Contenido provisorio.",
        // Hoja 18 de Inclusión (abril de 2026): si la persona y su familiar español están fuera de España,
        // la solicitud la presenta la persona en el consulado; es gratuita.
        // Desde Argentina, la solicitud se presenta en el consulado, que le pide a la oficina de extranjería
        // que resuelva la autorización (RD 1155/2024, art. 41.3). El visado es gratuito y vale 365 días
        // (Consulado de Córdoba, oct. 2026). La autorización dura 5 años y permite trabajar en cualquier
        // sector y lugar de España (art. 95). Los hijos de españoles de origen no necesitan convivir (art. 93).
        // Texto sugerido: «Consulado General de España en Córdoba (la autorización la resuelve la oficina de extranjería).»
        tramite: "Oficina de extranjería en España. [verificar]",
        fuente: { texto: "Portal de inmigración, Gobierno de España", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "nietos", nombre: "Búsqueda de empleo para hijos y nietos de españoles", corto: "Búsqueda de empleo",
      resumen: "Visado de 12 meses para buscar trabajo, si la orden anual abre cupo.",
      reglas: [
        { si: { pregunta: "pasaporte", es: ["espanol"] }, resultado: "oculta" },
        { si: { pregunta: "ascendencia", es: ["no"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Es para hijos, hijas, nietos y nietas de españoles de origen." },
        { si: { pregunta: "ascendencia", es: ["nose"] }, resultado: "cierra", condicion: "ascendencia",
          motivo: "Si no lo sabés, vale la pena preguntar en tu familia." },
        // La orden de 2026 (Orden ISM/1547/2025, BOE 30/12/2025) solo dice que se «podrá establecer» un
        // número de visados para hijos y nietos: no fija ninguno. 1 año para la nacionalidad: Código Civil,
        // art. 22.2.f. Para el resto de las personas argentinas son 2 años de residencia legal (art. 22.1).
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo"] }, resultado: "depende", condicion: "convocatoria",
          motivo: "Se abre si España publica la convocatoria anual con cupo. Según fuentes secundarias, en 2026 no hubo convocatoria." },
        { si: { pregunta: "ascendencia", es: ["padre", "abuelo"] }, resultado: "nota",
          motivo: "Los descendientes de españoles de origen pueden pedir la nacionalidad con 1 año de residencia legal." } ],
      ficha: {
        que: "Un visado de 12 meses para buscar trabajo en España, destinado a hijos y nietos de españoles de origen.",
        requisitos: ["Padre, madre, abuelo o abuela español/a de origen", "Que la orden anual de gestión colectiva abra cupo"],
        sirve: "Entrar a España y buscar trabajo durante un año.",
        noPermite: "No sirve si ese año no hay convocatoria.",
        // Octubre 2026: el Consulado de Córdoba no lista este visado entre sus visados nacionales.
        tramite: "Consulado de España, cuando hay convocatoria.",
        fuente: { texto: "Ministerio de Asuntos Exteriores de España", url: "https://www.exteriores.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "cuenta_ajena", nombre: "Trabajo por cuenta ajena", corto: "Cuenta ajena",
      resumen: "Trabajar en relación de dependencia para un empleador en España.",
      reglas: [
        { si: { pregunta: "oferta", es: ["no", "multinacional"] }, resultado: "depende", condicion: "mercado",
          motivo: "Se abre con una oferta de un empleador en España. Es más simple si tu ocupación está en el Catálogo de Ocupaciones de Difícil Cobertura." },
        { si: { pregunta: "oferta", es: ["oferta"] }, resultado: "nota",
          motivo: "Si tu ocupación no está en el Catálogo de Difícil Cobertura, el empleador tiene que acreditar que no encontró candidatos disponibles." } ],
      ficha: {
        que: "La autorización de residencia y trabajo para una persona contratada por un empleador en España.",
        requisitos: ["Oferta de trabajo de un empleador en España", "Vía simplificada si la ocupación está en el Catálogo de Difícil Cobertura", "Si no, vía general: el empleador acredita que no hay candidatos disponibles"],
        sirve: "Trabajar en relación de dependencia.",
        noPermite: "Contenido provisorio.",
        tramite: "El empleador inicia el trámite en España; después, visado en el Consulado General de España en Córdoba.",
        fuente: { texto: "Portal de inmigración, Gobierno de España", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "tarjeta_azul", nombre: "Tarjeta Azul UE", corto: "Tarjeta Azul",
      resumen: "Para empleos cualificados con un salario mínimo fijado.",
      reglas: [
        { si: { pregunta: "oferta", es: ["no", "multinacional"] }, resultado: "depende", condicion: "mercado",
          motivo: "Se abre con una oferta de trabajo cualificado con un salario de al menos {ta_salario}." },
        { si: { pregunta: "formacion", es: ["tecnico", "universidad2"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide título universitario o experiencia profesional equivalente: se abre si podés acreditarla." },
        { si: { pregunta: "formacion", es: ["otro"] }, resultado: "cierra", condicion: "formacion",
          motivo: "Pide título universitario o experiencia profesional equivalente." },
        { si: { pregunta: "egreso", es: ["reciente", "medio"] }, resultado: "nota",
          motivo: "Como te recibiste hace 3 años o menos, el salario mínimo exigido baja a {ta_reducido}." } ],
      ficha: {
        que: "Un permiso europeo para trabajos cualificados.",
        requisitos: ["Título universitario o experiencia equivalente", "Salario de al menos {ta_salario}", "Umbral reducido de {ta_reducido} si te titulaste hace 3 años o menos o si la ocupación es de difícil cobertura"],
        sirve: "Trabajar en un puesto cualificado, con facilidades de movilidad dentro de la UE.",
        noPermite: "Contenido provisorio.",
        tramite: "Unidad de Grandes Empresas, Ministerio de Inclusión.",
        fuente: { texto: "Unidad de Grandes Empresas, Ministerio de Inclusión (junio de 2026)", url: "https://www.inclusion.gob.es" },
        vigencia: "Junio de 2026", verificar: false, relleno: true } },

    { id: "hq", nombre: "Profesional altamente cualificado", corto: "Altamente cualificado",
      resumen: "Vía nacional para puestos cualificados, sin umbral reducido.",
      reglas: [
        { si: { pregunta: "oferta", es: ["no", "multinacional"] }, resultado: "depende", condicion: "mercado",
          motivo: "Se abre con una oferta de trabajo cualificado con un salario de al menos {hq_salario}." },
        { si: { pregunta: "formacion", es: ["tecnico", "universidad2"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide formación superior o experiencia equivalente: se abre si podés acreditarla." },
        { si: { pregunta: "formacion", es: ["otro"] }, resultado: "cierra", condicion: "formacion",
          motivo: "Pide formación superior o experiencia equivalente." } ],
      ficha: {
        que: "La vía nacional española para profesionales en puestos cualificados.",
        requisitos: ["Oferta de un puesto cualificado", "Salario de al menos {hq_salario}", "Sin umbral reducido"],
        sirve: "Trabajar en un puesto cualificado.",
        noPermite: "Contenido provisorio.",
        tramite: "Unidad de Grandes Empresas, Ministerio de Inclusión.",
        fuente: { texto: "Unidad de Grandes Empresas, Ministerio de Inclusión", url: "https://www.inclusion.gob.es" },
        vigencia: "Junio de 2026", verificar: false, relleno: true } },

    { id: "traslado", nombre: "Traslado intraempresarial", corto: "Traslado",
      resumen: "Para quien ya trabaja en una empresa con filial en España.",
      reglas: [
        { si: { pregunta: "oferta", es: ["oferta", "no"] }, resultado: "depende", condicion: "mercado",
          motivo: "Se abre si trabajás hace 3 meses o más en una empresa o grupo con filial en España." },
        { si: { pregunta: "formacion", es: ["otro"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide título o experiencia profesional: se abre si podés acreditarla." } ],
      ficha: {
        que: "Un permiso para quienes su propia empresa traslada a una filial en España.",
        requisitos: ["3 meses o más trabajando en el grupo empresarial", "Título o experiencia profesional"],
        sirve: "Trabajar en la filial española de tu empresa.",
        noPermite: "Contenido provisorio.",
        tramite: "Unidad de Grandes Empresas, Ministerio de Inclusión.",
        fuente: { texto: "Unidad de Grandes Empresas, Ministerio de Inclusión", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "nomada", nombre: "Nómada digital", corto: "Nómada digital",
      resumen: "Vivir en España trabajando en remoto para empresas de afuera.",
      reglas: [
        { si: { pregunta: "remoto", es: ["no"] }, resultado: "depende", condicion: "mercado",
          motivo: "Se abre si trabajás en remoto para empresas o clientes de fuera de España, con ingresos demostrables de al menos {nomada_ingreso}." },
        { si: { pregunta: "remoto", es: ["informal"] }, resultado: "cierra", condicion: "informalidad",
          motivo: "Pide ingresos demostrables de al menos {nomada_ingreso}. Sin facturación formal no hay cómo acreditarlos." },
        { si: { pregunta: "remoto", es: ["formal_bajo"] }, resultado: "cierra", condicion: "capital_economico",
          motivo: "Pide ingresos demostrables de al menos {nomada_ingreso}, el 200 % del salario mínimo español." },
        { si: [ { pregunta: "remoto", es: ["formal_bajo", "informal"] }, { pregunta: "cuidados", es: ["si"] } ], resultado: "cierra", condicion: "cuidados",
          motivo: "Con personas a cargo el umbral sube: {nomada_familiar1} por el primer familiar y {nomada_familiar_extra} por cada uno más." },
        { si: [ { pregunta: "remoto", es: ["formal_alto"] }, { pregunta: "cuidados", es: ["si"] } ], resultado: "depende", condicion: "cuidados",
          motivo: "El umbral sube con cada familiar que viaje con vos: {nomada_familiar1} por el primero y {nomada_familiar_extra} por cada uno más. Se abre si tus ingresos cubren ese total." },
        { si: { pregunta: "formacion", es: ["otro"] }, resultado: "depende", condicion: "formacion",
          motivo: "Pide título universitario o de formación profesional, o 3 años de experiencia: se abre si podés acreditarlos." } ],
      ficha: {
        que: "Un permiso para residir en España trabajando en remoto para empresas o clientes del exterior.",
        // 20 %: solo para quien trabaja por su cuenta (Consulados de Córdoba y Buenos Aires, oct. 2026).
        // En relación de dependencia, solo se puede trabajar para empresas de fuera de España.
        // Texto sugerido: «Si trabajás por tu cuenta, no más del 20 % de tu actividad para empresas españolas».
        // Título o 3 años de experiencia y seguro sin copagos: documentación de la UGE para teletrabajadores.
        requisitos: ["Relación laboral o comercial de 3 meses o más", "Empresa con 1 año o más de actividad", "No más del 20 % de ingresos de origen español [verificar]","Título universitario o de formación profesional, o 3 años de experiencia", "Ingresos demostrables de al menos {nomada_ingreso} (el 200 % del salario mínimo español), más {nomada_familiar1} por el primer familiar y {nomada_familiar_extra} por cada uno más"],
        sirve: "Vivir en España sin depender del mercado laboral español.",
        noPermite: "Contenido provisorio.",
        // En Córdoba se presenta en persona en el consulado (en Buenos Aires, en cambio, por BLS)
        tramite: "Consulado General de España en Córdoba, en persona (Bv. Chacabuco 875). Si ya estás en España de forma legal, se pide en la Unidad de Grandes Empresas.",
        fuente: { texto: "Consulado General de España en Córdoba, visado para teletrabajo (octubre de 2026)", url: "https://www.exteriores.gob.es/Consulados/cordoba/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Argentina&scd=129&scs=Visados+Nacionales+-+Visado+de+residencia+para+teletrabajo+%28n%C3%B3mada+digital%29" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "emprendedor", nombre: "Emprendedor/a", corto: "Emprendedor",
      resumen: "Para proyectos innovadores o escalables, con informe de ENISA.",
      reglas: [
        { si: { pregunta: "propia", es: ["no"] }, resultado: "noInteresa" },
        { si: { pregunta: "propia", es: ["innovador"] }, resultado: "depende", condicion: "innovacion",
          motivo: "Se abre con un informe favorable de ENISA sobre tu proyecto." },
        { si: { pregunta: "propia", es: ["negocio"] }, resultado: "depende", condicion: "innovacion",
          motivo: "Es para proyectos innovadores o escalables. Para un negocio tradicional, mirá la vía de cuenta propia." } ],
      ficha: {
        // «3 años»: la autorización dura 3 años y se renueva por 2 (Ley 14/2013, art. 69.1).
        // El visado del consulado dura 1 año. Informe de ENISA: Ley 14/2013, art. 70.1.
        que: "Un permiso de 3 años para desarrollar un proyecto emprendedor en España.",
        requisitos: ["Proyecto innovador o escalable", "Informe favorable de ENISA"],
        sirve: "Emprender en España durante 3 años.",
        noPermite: "Contenido provisorio.",
        // No es una cosa o la otra: la autorización se pide en la Unidad de Grandes Empresas (que pide el
        // informe a ENISA) y, ya concedida, el visado en el consulado (Ley 14/2013, art. 70.1; Consulado
        // de Córdoba, oct. 2026). Texto sugerido: «Se pide en la Unidad de Grandes Empresas; con la
        // autorización, visado en el Consulado General de España en Córdoba.»
        tramite: "Unidad de Grandes Empresas o consulado. [verificar]",
        fuente: { texto: "ENISA, Gobierno de España", url: "https://www.enisa.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "cuenta_propia", nombre: "Trabajo por cuenta propia", corto: "Cuenta propia",
      resumen: "Para trabajar de forma autónoma con un plan de negocio.",
      reglas: [
        { si: { pregunta: "propia", es: ["no"] }, resultado: "noInteresa" },
        // Ni el Consulado de Córdoba (oct. 2026) ni el RD 1155/2024 (art. 84) fijan un monto: piden que la
        // inversión prevista sea suficiente. El IPREM no aparece para esta vía.
        { si: { pregunta: "ahorros", es: ["bajo"] }, resultado: "cierra", condicion: "capital_economico",
          motivo: "Pide inversión y medios de vida (alrededor de {iprem_anual} por año [verificar]) además del plan de negocio." },
        { si: [ { pregunta: "ahorros", es: ["medio", "alto"] }, { pregunta: "propia", es: ["innovador", "negocio"] } ], resultado: "nota",
          motivo: "Además de los medios de vida, pide una inversión que depende de tu plan de negocio." },
        { si: { pregunta: "propia", es: ["innovador", "negocio"] }, resultado: "nota",
          motivo: "Dura 1 año y queda limitada a una región y un sector." } ],
      ficha: {
        que: "Una autorización para trabajar de forma autónoma en España.",
        // RD 1155/2024, art. 84: pide «la cualificación profesional legalmente exigida o experiencia
        // acreditada suficiente», y que la inversión prevista sea suficiente (sin monto ni IPREM).
        // Texto sugerido: «Cualificación profesional o experiencia en la actividad, si la actividad lo pide».
        requisitos: ["Plan de negocio viable", "Inversión", "Experiencia [verificar]", "Medios de vida: aproximadamente {iprem_anual}, el IPREM anual [verificar]"],
        sirve: "Trabajar por tu cuenta.",
        // RD 1155/2024, art. 83: la autorización inicial dura 1 año y se limita a una comunidad autónoma
        // y a un sector de actividad. La renovación dura 4 años (art. 86).
        noPermite: "Dura 1 año y se limita a una región y un sector.",
        tramite: "Consulado General de España en Córdoba.",
        fuente: { texto: "Portal de inmigración, Gobierno de España", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "investigador", nombre: "Investigador/a", corto: "Investigación",
      resumen: "Para investigar en una universidad, centro de I+D o empresa.",
      reglas: [
        { si: { pregunta: "investigar", es: ["no"] }, resultado: "noInteresa" },
        { si: { pregunta: "investigar", es: ["interes"] }, resultado: "depende", condicion: ["capital_academico", "redes"],
          motivo: "Se abre si una universidad, un centro de I+D o una empresa te acepta para investigar." } ],
      ficha: {
        // «3 años»: la autorización dura 3 años o lo que dure el convenio o contrato, si es menos
        // (Ley 14/2013, art. 72.3). El visado del consulado dura 1 año; en España se sigue con la autorización.
        // Doctorado como investigador: Consulado de Buenos Aires, noticia del 4/10/2026.
        // «con trabajo pleno»: la Hoja 68 de Inclusión (agosto de 2026) dice que habilita a «residir y
        // trabajar» para hacer actividades de investigación, desarrollo e innovación; no habla de cualquier
        // trabajo. Texto sugerido: «Un permiso de 3 años para investigar o hacer un doctorado, con permiso
        // de trabajo para esa actividad». Al terminar, hasta 12 meses para buscar empleo o emprender (art. 72.9).
        // Doctorado sin contrato: la Hoja 68 pide medios de al menos el 50 % del SMI anual (unos 8.547 € en
        // 2026; 100 % si viaja un familiar). Y el propio estudiante puede presentar la solicitud.
        que: "Un permiso de 3 años para investigar, doctorado incluido, con trabajo pleno [verificar].",
        requisitos: ["Aceptación de una universidad, centro de I+D o empresa", "Para hacer un doctorado se pide esta vía, no la de estudiante"],
        sirve: "Investigar y trabajar en España.",
        noPermite: "Contenido provisorio.",
        tramite: "La entidad que te recibe pide la autorización en la Unidad de Grandes Empresas; después, visado en el Consulado General de España en Córdoba. Pueden viajar familiares.",
        fuente: { texto: "Unidad de Grandes Empresas, Ministerio de Inclusión", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "practicas", nombre: "Prácticas", corto: "Prácticas",
      resumen: "Para recién recibidos con un convenio de prácticas en España.",
      reglas: [
        { si: { pregunta: "egreso", es: ["medio", "mas3"] }, resultado: "cierra", condicion: "edad_egreso",
          motivo: "Es para quienes se recibieron hace menos de 2 años o están estudiando." },
        { si: { pregunta: "practicas", es: ["no"] }, resultado: "noInteresa" },
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
        que: "Un permiso para hacer prácticas con un convenio de una entidad española. Después se puede pasar a trabajo sin salir de España [verificar].",
        // Ley 14/2013, disposición adicional 18.ª, y Consulado de Córdoba (oct. 2026): sirve un convenio
        // de prácticas o un contrato de trabajo en prácticas. Además, las prácticas tienen que ser del
        // mismo campo y nivel que tu título o tus estudios, y hay que tener seguro y recursos suficientes.
        // Texto sugerido: «Convenio o contrato de prácticas con una entidad española, en el campo de tu título».
        requisitos: ["Recibido/a hace menos de 2 años, o estudiando", "Convenio de prácticas con una entidad española [verificar]"],
        sirve: "Hacer una primera experiencia laboral en España.",
        noPermite: "Contenido provisorio.",
        // Ley 14/2013, DA 18.ª: la entidad española pide la autorización en la Delegación o Subdelegación
        // del Gobierno de la provincia de las prácticas (resuelve en 30 días); después, visado en el consulado.
        // Texto sugerido: «La entidad española pide la autorización en España; después, visado en el
        // Consulado General de España en Córdoba.»
        tramite: "Consulado General de España en Córdoba. [verificar]",
        fuente: { texto: "Portal de inmigración, Gobierno de España", url: "https://www.inclusion.gob.es" },
        vigencia: "21/10/2026", verificar: false, relleno: true } },

    { id: "estudiante", nombre: "Estudiante", corto: "Estudios",
      resumen: "Para estudiar un máster u otro estudio superior.",
      reglas: [
        { si: { pregunta: "ahorros", es: ["bajo"] }, resultado: "cierra", condicion: "capital_economico",
          motivo: "Pide demostrar medios económicos para todo el período de estudios (unos {iprem_anual} por año), además del costo de la matrícula." },
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
        { si: { pregunta: "cuidados", es: ["si"] }, resultado: "cierra", condicion: "cuidados",
          motivo: "No se extiende a familiares: no contempla que viaje con vos alguien a tu cargo." },
        { si: { pregunta: "ahorros", es: ["bajo", "medio"] }, resultado: "cierra", condicion: "capital_economico",
          motivo: "Pide demostrar fondos de {vyt_fondos} y un seguro con cobertura de {vyt_seguro}." },
        { si: { pregunta: "edad", es: ["hasta35"] }, resultado: "nota",
          motivo: "Hay {vyt_cupo} lugares por año en todo el país. Al terminar, hay que regresar." } ],
      ficha: {
        que: "El Programa de Movilidad de Jóvenes entre Argentina y España: una estancia para explorar, no una vía para quedarse.",
        // Fondos: 1.221 €/mes (SMI 2026) por 12 meses = 14.652 €. Hoja del Consulado de Buenos Aires
        // V.22-04-2026, que reemplazó a la V.05-03-2026 en el mismo enlace.
        requisitos: ["Entre 18 y 35 años", "Título universitario o de educación superior. No hace falta estar recibido/a: alcanza con al menos 2 años aprobados de una carrera universitaria (los años de terciario no cuentan)", "Fondos de {vyt_fondos} (o el SMI por mes de estancia, con billete de regreso)", "Seguro con cobertura de {vyt_seguro}", "No haber participado antes del programa"],
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
        cuidados: "Tener a su hijo a cargo cierra vías que no contemplan a quienes cuidan.",
        estudiar: "Le interesa estudiar, pero la vía pide capital económico." } }
  ]
};
