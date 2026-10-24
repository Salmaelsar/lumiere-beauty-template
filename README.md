# Lumière Beauty

Plantilla de una página para un salón de belleza. Funciona con HTML, CSS y JavaScript. Para verla y personalizarla no hay que instalar programas, ni crear una cuenta, ni conectar una base de datos.

Las condiciones de uso están en `LICENSE-TERMS.md`. Ese texto es un borrador y no es asesoramiento jurídico.

## Datos de demostración

Todo lo que aparece en la página al abrirla es un ejemplo. No es un salón real. Cámbialo antes de publicar.


| Dato             | Valor de demostración                                                                                                                                                  | Dónde se cambia                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Nombre del salón | Lumière Beauty                                                                                                                                                         | `name` en `SALON`, dentro de `script.js`     |
| Ciudad           | Madrid                                                                                                                                                                 | `city` en `SALON`                            |
| Dirección        | Calle de Almirante 18, 28004 Madrid                                                                                                                                    | `address` en `SALON`                         |
| Teléfono visible | +34 600 000 000                                                                                                                                                        | `phoneDisplay` en `SALON`                    |
| WhatsApp         | 34600000000                                                                                                                                                            | `phoneWa` en `SALON`                         |
| Correo           | [hola@lumierebeauty.example](mailto:hola@lumierebeauty.example)                                                                                                        | `email` en `SALON`                           |
| Instagram        | @lumiere.beauty                                                                                                                                                        | `instagramUrl` y `instagramLabel` en `SALON` |
| Horario          | Lunes y domingo cerrados. Martes a viernes, 10:00–20:00. Sábado, 10:00–15:00.                                                                                          | `HOURS` en `script.js`                       |
| Precios          | Corte signature 62 €, Color luminoso 98 €, Mechas o balayage 145 €, Recogido 85 €, Ritual facial 89 €, Cejas 24 €, Maquillaje 65 €, Manicura 28 €, Semipermanente 38 € | `price` en `SERVICES`, dentro de `script.js` |


Las fotografías de la carpeta `fotos` también son de muestra. Este proyecto no ha comprobado su licencia.

## Archivos

Deja estos archivos en la misma carpeta. Si los separas, la página deja de verse bien.


| Archivo o carpeta  | Para qué sirve                               |
| ------------------ | -------------------------------------------- |
| `index.html`       | La página. Haz doble clic aquí para abrirla. |
| `style.css`        | Colores y tipografía.                        |
| `script.js`        | Textos, precios, horario, contacto y fotos.  |
| `fotos`            | Las ocho fotografías de muestra.             |
| `README.md`        | Estas instrucciones.                         |
| `LICENSE-TERMS.md` | Borrador de condiciones de uso.              |


## Abrir la página

1. Abre la carpeta de la plantilla.
2. Busca el archivo `index.html`.
3. Haz doble clic en `index.html`.
4. Si el ordenador pregunta con qué programa abrirlo, elige Chrome, Safari, Firefox o Edge.

También puedes arrastrar `index.html` hasta una ventana del navegador. No hace falta un servidor ni instalar nada.

Para ver un cambio después de guardar, vuelve al navegador y recarga la página. En Mac pulsa Comando + R. En Windows pulsa F5.

Arriba a la derecha están **ES** y **EN**. Pulsa uno para cambiar el idioma. La página recuerda la elección en ese navegador.

## Cómo editar los textos y los colores

`index.html` se abre con doble clic. `script.js` y `style.css` no: hay que abrirlos con un editor de texto en modo texto plano.

No uses Word, Pages, Google Docs ni ninguna app que deje el texto en negrita o con colores. Esos programas estropean el archivo y la página puede quedarse en blanco o sin precios.

Abre cada archivo, cambia solo el texto que está entre comillas, guarda y recarga el navegador.

### En Mac, con TextEdit

1. Haz clic con el botón derecho en `script.js`.
2. Elige Abrir con y luego TextEdit. Si no aparece, elige Otra app y busca TextEdit.
3. Mira el menú Formato. Si pone «Convertir a texto sin formato», púlsalo. El archivo tiene que quedar en texto plano, sin barra de negrita ni de colores.
4. Cambia los datos.
5. En el menú Archivo, pulsa Guardar.
6. Vuelve al navegador y recarga `index.html`.

Para los colores, repite los mismos pasos con `style.css`.

### En Windows, con el Bloc de notas

1. Haz clic con el botón derecho en `script.js`.
2. Elige Abrir con y luego Bloc de notas.
3. Cambia los datos.
4. En el menú Archivo, pulsa Guardar.
5. Vuelve al navegador y recarga `index.html`.

Para los colores, repite los mismos pasos con `style.css`.

Al guardar, conserva las comillas `"` y las comas. Si borras una, la página puede dejar de mostrar los precios y los textos. Cambia el texto de dentro y deja los signos donde estaban.

Ejemplo. Esto sí:

```javascript
name: "Salón Aurora",
```

Esto rompe el archivo, porque falta una comilla:

```javascript
name: "Salón Aurora,
```

Si cambias una frase en español, cámbiala también en inglés, en el mismo bloque.

## Dónde se cambia cada cosa

Casi todo está al principio de `script.js`. No hace falta tocar `index.html` para personalizar el salón.


| Qué quieres cambiar                                               | Dónde                                        |
| ----------------------------------------------------------------- | -------------------------------------------- |
| Nombre, ciudad, WhatsApp, teléfono, correo, dirección e Instagram | `SALON` en `script.js`                       |
| Frases de la página, en español y en inglés                       | `COPY` en `script.js`                        |
| Servicios y precios                                               | `SERVICES` en `script.js`                    |
| Horario                                                           | `HOURS` en `script.js`                       |
| Fotos                                                             | `IMAGES` en `script.js` y la carpeta `fotos` |
| Colores y tipografía                                              | `:root` al principio de `style.css`          |


## Nombre y contacto

Este bloque es de demostración. Sustituye cada valor por el del salón:

```javascript
const SALON = {
  name: "Lumière Beauty",
  city: "Madrid",
  phoneWa: "34600000000",
  phoneDisplay: "+34 600 000 000",
  email: "hola@lumierebeauty.example",
  address: "Calle de Almirante 18, 28004 Madrid",
  instagramUrl: "https://instagram.com/lumiere.beauty",
  instagramLabel: "@lumiere.beauty"
};
```

`phoneWa` es el WhatsApp: prefijo del país y número, solo dígitos. En España empieza por `34`. No pongas `+`, espacios ni guiones. `phoneDisplay` es el mismo número, escrito como quieres mostrarlo.

`{salon}` y `{city}`, dentro de los textos, se sustituyen solos por `name` y `city`.

Los botones Reservar abren WhatsApp con un mensaje preparado. El mensaje general está en `whatsapp.general`. El de cada servicio está en `whatsapp.service`; `{servicio}` se cambia por el nombre del tratamiento. Si dejas `phoneWa` vacío, esos botones llevan a la sección de contacto en lugar de abrir WhatsApp.

## Idiomas

Cada texto visible está dos veces en `COPY`, `SERVICES`, `HOURS` e `IMAGES`: una vez en `es` y otra en `en`.

El nombre del salón, los precios, la dirección y el usuario de Instagram no se traducen: salen igual en los dos idiomas.

Para revisar la traducción, abre la página, pulsa **EN** y recorre el menú, el inicio, el salón, los servicios, la galería, el horario y el pie. Después pulsa **ES** y comprueba que el español ha vuelto.

## Servicios y precios

Los precios que ves ahora son de demostración: 62 €, 98 €, 145 €, 85 €, 89 €, 24 €, 65 €, 28 € y 38 €. Cámbialos por los del salón.

Copia un bloque entero para añadir un tratamiento. Los que tengan la misma categoría, escrita igual, se agrupan solos. El precio se muestra tal como lo escribas: `62 €`, `65 EUR` o `$70`.

```javascript
{
  category: { es: "Cabello", en: "Hair" },
  name: { es: "Corte signature", en: "Signature cut" },
  detail: { es: "Consulta, corte y brushing.", en: "Consultation, cut and blow-dry." },
  time: { es: "60 min", en: "60 min" },
  price: "62 €"
}
```

## Horario

El horario de la plantilla también es de demostración: lunes y domingo cerrados, martes a viernes de 10:00 a 20:00, y sábado de 10:00 a 15:00.

En `HOURS`, `closed: true` marca el día como cerrado. Escribe el día y la hora en español y en inglés.

## Colores

Abre `style.css` en texto plano y cambia solo el bloque `:root`, al principio del archivo. En el resto del archivo está el diseño; no hace falta tocarlo para cambiar de salón.

- `--ivory`, `--ivory-deep` y `--beige`: fondos.
- `--gold` y `--gold-deep`: detalles dorados.
- `--ink`: texto y botones oscuros.
- `--serif`: títulos. `--sans`: el resto del texto.

Cada color va detrás de los dos puntos y termina con punto y coma. Cambia el código y deja esos signos. Por ejemplo, `--ivory: #f7f3ec;` puede pasar a `--ivory: #f3efe6;`.

Las fuentes se piden a Google Fonts cuando hay internet. Si no hay conexión, la página usa Georgia o Palatino y una letra sans del sistema. Puedes quitar las tres líneas de Google Fonts en `index.html` y la página sigue funcionando.

## Fotos

Cada foto tiene un nombre fijo en la carpeta `fotos` y una ruta en `IMAGES`, dentro de `script.js`.


| Archivo                | Dónde aparece          |
| ---------------------- | ---------------------- |
| `fotos/portada.jpg`    | Imagen principal       |
| `fotos/peinado.jpg`    | Presentación del salón |
| `fotos/butacas.jpg`    | Galería                |
| `fotos/cabello.jpg`    | Galería                |
| `fotos/maquillaje.jpg` | Galería                |
| `fotos/pinceles.jpg`   | Galería                |
| `fotos/facial.jpg`     | Galería                |
| `fotos/unas.jpg`       | Galería                |


Para cambiar una, guarda la foto nueva con el mismo nombre o cambia la ruta en `IMAGES`. El texto que describe cada foto está en `alt`, en español y en inglés. Escríbelo de nuevo cuando cambies la imagen, para que coincida con lo que se ve.

Son imágenes de muestra. Este proyecto no ha comprobado si se pueden usar comercialmente. Antes de publicar la página, sustitúyelas por fotografías cuyos derechos puedas demostrar, o confirma tú mismo esos derechos. Si en la foto aparece una persona, confirma también que puedes usar su imagen.

## Publicar

Sube la carpeta completa a cualquier alojamiento de páginas estáticas. No hay compilación ni base de datos. Deja juntos `index.html`, `style.css`, `script.js` y la carpeta `fotos`.

## Antes de publicar el salón

1. Cambia el nombre, el WhatsApp, el teléfono visible, el correo, la dirección y el Instagram.
2. Revisa los textos en español y en inglés.
3. Sustituye los precios y el horario de demostración.
4. Sustituye las fotos por las del salón, o confirma que puedes usar las de muestra.
5. Lee `LICENSE-TERMS.md` y adapta el borrador si vas a revender o entregar la página a otra persona.

