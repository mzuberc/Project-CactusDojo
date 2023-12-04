function alerta(elemento) {
    alert("Your cart is empty");

}

function cambia_imagen(elemento_img) {
    elemento_img.src = "images/assets/succulents-2.jpg";
}

function regresa_imagen(elemento_img) {
    elemento_img.src = "images/assets/succulents-1.jpg";
}

function eliminar_cookies() {
    var cookie = document.querySelector(".cookies");
    cookie.remove();
}

