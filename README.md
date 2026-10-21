# Mapa de caminos a España

Recurso de información ocupacional de nivel general sobre las vías legales para trabajar en España. Está pensado para jóvenes de Córdoba de 22 a 35 años con formación universitaria o técnica superior que evalúan emigrar.

Trabajo Práctico N.º 3 · Cátedra de Orientación Vocacional y Ocupacional · Facultad de Psicología, UNC · 2026.
Equipo: Antonella Caro, Patricia Farjatt, Andrea Vitali y Karim (comisiones Mayra Sánchez – Facundo Ianna).

> Información general. No reemplaza el asesoramiento profesional. Verificá siempre en la fuente oficial.

## Qué hay en esta carpeta

| Archivo | Qué contiene | ¿Se toca para actualizar? |
|---|---|---|
| `datos.js` | Todo el contenido: cifras, fechas, preguntas, vías, fichas, fuentes y personajes de ejemplo | **Sí, solo este** |
| `index.html` | El diseño y la lógica del árbol | No |
| `README.md` | Estas instrucciones | No |
| `verificar.js` | Revisión automática del contenido (ver más abajo) | No |
| `CLAUDE.md` | Contexto y reglas para trabajar con Claude Code | No |

## Cómo actualizar una cifra o un texto (desde la web, sin instalar nada)

1. Entrá al repositorio en GitHub y abrí el archivo **`datos.js`**.
2. Tocá el ícono del **lápiz** (*Edit this file*), arriba a la derecha.
3. Buscá lo que querés cambiar con **Ctrl + F** (en Mac, **Cmd + F**). Por ejemplo, `vyt_fondos`.
4. Cambiá **solo el texto entre comillas**:
   ```js
   vyt_fondos:            "14.652 €",
   ```
5. Tocá **Commit changes…**. En el mensaje, escribí qué cambiaste y por qué. Por ejemplo: *"Actualizo fondos de Vacaciones y Trabajo según hoja del consulado de noviembre 2026"*.
6. Esperá uno o dos minutos y recargá la página publicada.

### Reglas para no romper nada

- Cambiá solo lo que está **entre comillas**.
- No borres las comillas `"`, las comas `,` del final de línea ni las llaves `{ }`.
- Si necesitás comillas dentro de un texto, usá « » o comillas simples ' '.
- Las líneas que empiezan con `//` son comentarios: explican y no se muestran en la página.

### Cifras que se repiten

Los montos y fechas que aparecen en varias pantallas están juntos al principio de `datos.js`, en el bloque `cifras`. Donde un texto dice `{vyt_fondos}`, la página pone automáticamente el valor de esa cifra. Se cambia en un solo lugar y se actualiza en todas partes.

**Cada vez que actualicen datos, cambien también `fecha_vigencia`**, que es la fecha que aparece en el pie.

### Completar una ficha

Cada vía tiene un bloque `ficha:` con: qué es, requisitos, para qué sirve, qué no permite, dónde se tramita, fuente (texto y `url`) y `vigencia`. Hay dos interruptores:

- `verificar: true` muestra el aviso **⚠ Dato a verificar**.
- `relleno: true` muestra el aviso **Contenido provisorio**. Cuando la ficha tenga datos reales, cámbienlo a `relleno: false`.

## Si algo se rompe

Si después de un cambio la página muestra **"No se pudo cargar el contenido"**, falta o sobra una coma, una comilla o una llave en `datos.js`. El aviso indica el número de línea aproximado.

Para volver a la versión anterior:

1. Abrí `datos.js` en GitHub y tocá **History** (el reloj).
2. Entrá a la versión anterior al cambio que rompió la página y copiá su contenido.
3. Editá `datos.js` como en los pasos de arriba, pegá ese contenido y guardá.

También pueden corregir directamente la línea que indica el aviso.

### Verificación automática

Cada vez que alguien guarda un cambio, GitHub revisa `datos.js` solo. Comprueba que el formato sea válido, que todo esté conectado (preguntas, respuestas, condiciones, cifras) y que los tres recorridos de ejemplo sigan mostrando lo que tienen que mostrar.

- Una **tilde verde ✓** al lado del cambio (en la pestaña *Commits* o *Actions*) quiere decir que todo está bien.
- Una **cruz roja ✕** quiere decir que algo se rompió. Tocala para ver el detalle: dice qué falla y dónde.

## Publicación

El sitio se publica con **GitHub Pages**: *Settings → Pages → Deploy from a branch → `main` / `(root)`*. Es una página pública: cualquiera puede abrirla desde el celular o la compu con el link o el QR, sin cuenta.

- Después de guardar un cambio, la página se actualiza en uno o dos minutos. Si no ves el cambio, recargá; a veces el navegador tarda unos minutos más en soltar la versión anterior.
- Para usarla sin internet (por ejemplo, en la jornada), descargá la carpeta (*Code → Download ZIP*) y abrí `index.html`.

## Privacidad

La página no usa analítica ni guarda ni envía las respuestas: todo ocurre en el navegador de quien la usa. Como cualquier servidor web, GitHub registra datos técnicos de las visitas (por ejemplo, la dirección IP).
