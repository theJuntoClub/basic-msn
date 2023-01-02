const containerMsg = document.getElementById("cloud");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

// añadiendo evento cuando clickeamos nuetro botón de enviar
btn.addEventListener("keypress", (e) => {
  // localizando tecla "Enter"
  if (e.key === "Enter") {
    // creando mi mensaje
    let newMsg = document.createElement("LI");
    // añadiendo una clase de CSS desde JS a mi elemento
    newMsg.classList.add("new-msg");
    // consiguiendo el valor del texto enviado
    newMsg.textContent = msg.value;
    // agregando nuevos mensajes a nuestro chat
    containerMsg.appendChild(newMsg);
    // dejando vacío mi input para un nuevo mensaje
    msg.value = "";
  }
});
