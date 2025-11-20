// Función para actualizar la imagen en el modal
function setImage(src) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
}

#contador-visitas {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: #222;
    color: #fff;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    z-index: 9999;
}
