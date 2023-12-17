# DEJAR COMENTARIOS

> \_...dejar conetarios, es un componente simple para dejar comentarios en un post. En este caso lo que estamos buscando es lograr que el creador pueda hacer un post y que los usuarios visitantes puedan dejar su comentarios. En primera instancia se guardaran los datos en `localStorage`.

_*A continuacion relataremos el caso y como se genera.*_

# 1. Creamos el archivo `index.html`

### HTML

Estructura básica:

El código define un documento HTML básico con la declaración del tipo de documento, configuración del idioma, y la estructura típica de la cabeza `(<head>)` y el cuerpo `(<body>)`.
Contenido del Blog:

Se presenta un área que contiene el contenido del post del blog, con un título `(<h2>)` y un párrafo `(<p>)`. Este contenido está dentro de un contenedor con la clase "post".
Formulario de Comentarios:

Existe un formulario de comentarios dentro de un contenedor con la clase "comment-form". Incluye un título `(<h3>)`, un área de texto `(<textarea>)` para ingresar comentarios y un botón `(<input>)` para enviar comentarios mediante la función submitComment().
Sección de Comentarios:

Hay una sección dedicada a mostrar comentarios almacenados. La sección incluye un título `(<h3>)` y un contenedor con la clase "comentarios" y el id "comentariosContainer" donde se espera que se muestren los comentarios.
Estilos CSS:

Se hace referencia a estilos CSS que probablemente definan la apariencia visual de la página. Sin embargo, los detalles específicos de esos estilos no se proporcionan en este fragmento.
En resumen, el código establece una estructura básica para un blog que incluye la presentación de un post, un formulario para dejar comentarios, y una sección para mostrar comentarios almacenados. La funcionalidad de enviar comentarios parece estar vinculada a una función llamada submitComment(), y la apariencia visual se define mediante estilos CSS que no se muestran aquí.

# 2. Creamos el archivo `script.js`

### JS

**A.** localStorage.getItem("comments"): Esta parte obtiene el valor almacenado en el almacenamiento local bajo la clave "comments". El valor almacenado es una cadena de texto que representa datos en formato JSON.

**B.** JSON.parse(...): La función JSON.parse toma la cadena JSON obtenida del almacenamiento local y la convierte en un objeto JavaScript. En este caso, se espera que la cadena represente un array de comentarios.

**C.** || []: Esta parte utiliza el operador de coalescencia nula (||) para proporcionar un valor predeterminado en caso de que no haya comentarios almacenados o si hay un problema al analizar la cadena JSON. En este caso, el valor predeterminado es un array vacío [].

> En resumen, la línea de código completa está recuperando los comentarios del almacenamiento local, convirtiéndolos en un array de JavaScript mediante el uso de JSON.parse, y si no hay comentarios almacenados o hay un error en el proceso, se utiliza un array vacío como valor predeterminado.

_Esta técnica es comúnmente utilizada para manejar situaciones en las que los datos pueden no estar disponibles o no estar en el formato esperado, proporcionando un valor predeterminado en su lugar._

# 3. Creamos el archivo `style.css`

### CSS
