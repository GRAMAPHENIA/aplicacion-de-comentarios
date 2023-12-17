// Al cargar la página, cargar los comentarios desde localStorage si existen
window.onload = function () {
  loadComments();
};

function submitComment() {
  var commentText = document.getElementById("comment").value;

  // Obtener los comentarios existentes desde localStorage
  var existingComments = JSON.parse(localStorage.getItem("comments")) || [];

  // Agregar el nuevo comentario
  existingComments.push(commentText);

  // Guardar los comentarios actualizados en localStorage
  localStorage.setItem("comments", JSON.stringify(existingComments));

  // Mostrar los comentarios actualizados
  loadComments();
}

function loadComments() {
  var existingComments = JSON.parse(localStorage.getItem("comments")) || [];
  var comentariosContainer = document.getElementById("comentariosContainer");

  // Limpiar el contenedor de comentarios
  comentariosContainer.innerHTML = "";

  // Mostrar los comentarios existentes
  existingComments.forEach(function (comment) {
    var comentarioDiv = document.createElement("div");
    comentarioDiv.className = "comment";
    comentarioDiv.innerHTML =
      "<p>Nombre del Usuario:</p>Usuario logeado<p>" + comment + "</p>";
    comentariosContainer.appendChild(comentarioDiv);
  });
}

function clearComments() {
  // Borrar los comentarios en localStorage
  localStorage.removeItem("comments");

  // Limpiar la visualización de comentarios
  var comentariosContainer = document.getElementById("comentariosContainer");
  comentariosContainer.innerHTML = "";
}

function clearLastComment() {
  // Obtener los comentarios existentes desde localStorage
  var existingComments = JSON.parse(localStorage.getItem("comments")) || [];

  // Verificar si hay comentarios para eliminar
  if (existingComments.length > 0) {
    // Eliminar el último comentario
    existingComments.pop();

    // Guardar los comentarios actualizados en localStorage
    localStorage.setItem("comments", JSON.stringify(existingComments));

    // Mostrar los comentarios actualizados
    loadComments();
  } else {
    console.log("No hay comentarios para eliminar.");
  }
}
