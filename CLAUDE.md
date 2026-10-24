# Mapa de caminos a España

Recurso de información ocupacional (TP N.º 3, Cátedra de Orientación Vocacional y Ocupacional, Facultad de Psicología, UNC, 2026). Es una página web con un árbol de decisión sobre las vías legales para trabajar en España. Grupo: Antonella Caro, Patricia Farjatt, Andrea Vitali y Karim. Karim es el único que programa; el resto del grupo edita contenido desde la web de GitHub.

## Para quién y para qué

- **Población:** jóvenes de Córdoba (Argentina) de 22 a 35 años, con título universitario o técnico superior, que evalúan emigrar a España.
- **Nivel general de información:** muestra el panorama y dónde profundizar. No da asesoramiento legal ni dicta un destino.
- **Los visados funcionan como indicador** de los caminos legales posibles.
- **Tres usos:**
  1. cada persona lo recorre sola desde el celular (link o QR);
  2. se graba la pantalla para un video de unos 14 minutos que simula un taller (los "recorridos de ejemplo");
  3. se proyecta en una jornada (el "modo proyección").

## Enfoque (no negociable)

- **Orientación crítica e interseccional.** Cuando una vía se cierra, se nombra la **condición del entorno** que la cierra (ascendencia europea, capital económico, informalidad laboral, tipo de formación, edad o tiempo desde el egreso, cargas de cuidado, redes, mercado laboral de destino). Nunca se presenta como un déficit de la persona.
- **Mapa, no embudo.** La persona ve todas las vías: abiertas, "se abren si…" y cerradas (y por qué). Quedarse en Córdoba se presenta como un proyecto de vida legítimo.
- **Tono:** cálido, no culpabiliza. Voseo rioplatense ("tenés", "podés", "mirá"), lenguaje claro, frases cortas.
- **Vacaciones y Trabajo** se presenta como una estancia para explorar, no como una vía para quedarse.

## Arquitectura

| Archivo | Rol |
|---|---|
| `datos.js` | Todo el contenido en `const DATOS = {...}`: cifras, textos, condiciones, preguntas, vías (con reglas y ficha) y personajes. Lo edita gente no técnica. |
| `index.html` | Estilos y lógica, sin contenido. Carga `datos.js` con `<script src>`; si falla, muestra un aviso con la línea del error. |
| `verificar.js` | Valida `datos.js` y comprueba los tres recorridos de ejemplo. También corre en GitHub Actions. |
| `README.md` | Guía para el grupo: editar desde la web de GitHub. |

- **Reglas de las vías** (en `datos.js`): `{ si, resultado, condicion, motivo }`. `si` puede ser una condición o una lista de condiciones (todas tienen que cumplirse). Los resultados posibles son `cierra`, `depende`, `noInteresa`, `nota`, `advierte` y `oculta`. Prioridad: oculta > cerrada > noInteresa > depende > abierta. `nota` y `advierte` no cambian el estado: `advierte` muestra «⚠ Antes de avanzar, revisá» con algo que la persona tiene que chequear por su cuenta (un dato no oficial, un monto que acorta la estancia, una limitación con personas a cargo). Una regla `advierte` sin `si` se muestra siempre.
- **Cifras:** `{nombre}` dentro de cualquier texto se reemplaza por `DATOS.cifras.nombre`.
- **Lógica duplicada:** `cumple()` y `evaluar()` existen en `index.html` y copiadas en `verificar.js`. Si cambiás la lógica, actualizá las dos.

## Reglas al hacer cambios

1. **El contenido sobre visados y trabajo va en `datos.js`, nunca escrito en `index.html`:** vías, fichas, condiciones, cifras, preguntas, personajes y los textos que explican el mapa. Los rótulos de interfaz sin contenido propio ("Volver al inicio", "Ver ficha", "Cambiar", los títulos de la ficha) pueden quedar en `index.html`.
2. **Corré `node verificar.js` antes de cada commit.** Si un cambio altera a propósito lo que muestra un personaje, actualizá `ESPERADO` en `verificar.js` y explicalo en el PR.
3. **Mantené `datos.js` fácil de editar a mano:** comentarios en español, una cifra por línea, nada de lógica ni funciones adentro.
4. **Sin dependencias ni analítica.** Nada de librerías, frameworks, trackers ni llamadas a servidores. La única carga externa permitida son las fuentes de Google Fonts, y siempre con una fuente de respaldo. Las respuestas de la persona no salen del navegador.
5. **Tiene que funcionar:**
   - publicado en GitHub Pages y abriendo `index.html` desde la compu, sin servidor (por eso `datos.js` es un script y no un JSON con `fetch`);
   - en un celular vertical de unos 375 px (sin scroll horizontal, áreas de toque de al menos 44 px);
   - proyectado y grabado.
6. **Accesibilidad:** contraste adecuado en tema claro y oscuro, todo navegable con teclado, foco visible, y el estado nunca se comunica solo con color (siempre ícono + texto).
7. **Mostrá el cambio:** si el cambio es visual, revisalo en ancho de celular (375 px) y de escritorio antes de abrir el PR. Chromium y Playwright están disponibles en el entorno.
8. **Contenido legal o de cifras:** no inventes requisitos, montos ni fechas.
   - **Si una fuente oficial confirma que un dato está mal y dice cuál es el correcto**, corregilo y citá la fuente en un comentario arriba.
   - **Si no se pudo confirmar**, escribí `[verificar]` al lado de ese dato (por ejemplo, `"Fondos de {vyt_fondos} [verificar]"`). No marques con `[verificar]` un dato que ya sabés que está mal.
   - `verificar: true` marca la ficha entera: usalo solo si no se sabe qué dato hay que revisar. `relleno: true` marca contenido provisorio.
   - Avisá en el PR qué corregiste y qué quedó marcado. Las decisiones de contenido (qué mostrar, cómo se abre o se cierra una vía) las toma el grupo.

## Flujo de trabajo

- **Todo cambio pasa por un pull request** contra `main`. GitHub Pages publica desde `main` (`/ (root)`), así que el PR es la revisión del grupo antes de publicar. Un cambio = un commit con su propio mensaje.
- **Preguntá en qué rama trabajar.** Antes del primer cambio de cada conversación, listá los PRs abiertos desde ramas `claude/`:
  ```bash
  gh api repos/rkgomezisa/mapa-caminos-es/pulls --jq '.[] | select(.head.ref | startswith("claude/")) | "#\(.number) \(.head.ref) → \(.base.ref) | \(.title)"'
  ```
  Si hay alguno, preguntale a Karim en qué rama trabajar: una de esas (el cambio se suma como commit y se actualiza la descripción del PR) o una rama nueva desde `main`. Mostrale qué PR se relaciona con el cambio y si alguno depende de otro que no se mergeó. La idea es no acumular PRs, así que si uno ya abierto sirve, recomendalo. Si no hay ninguno abierto, creá una rama nueva desde `main`. Se mira GitHub y no la memoria, porque una conversación nueva no sabe qué PR abrió la anterior.
- **Mensajes de commit y descripción del PR en español**, explicando qué cambia para quien usa la página.
- **No hagas push directo a `main`**, salvo que Karim lo pida.
