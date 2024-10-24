// script.js

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Función para abrir el modal y mostrar la receta
function abrirModal(receta) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <span class="close" onclick="cerrarModal()">&times;</span>
        <h2>${receta.titulo}</h2>
        <img src="${receta.imagen}" alt="${receta.titulo}" style="width:100%; height:auto;">
        <p>${receta.descripcion}</p>
    `;
    
    modal.style.display = 'block'; // Mostrar modal
}

// Agregar eventos de clic a cada ficha de receta
document.querySelectorAll('.receta').forEach(receta => {
    receta.addEventListener('click', () => {
        const titulo = receta.querySelector('h3').textContent;
        const imagen = receta.querySelector('img').src;
        const descripcion = receta.getAttribute('data-descripcion');
        
        abrirModal({ titulo, imagen, descripcion });
    });
});

// Función para cerrar el modal al hacer clic en el fondo
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        cerrarModal();
    }
}

// Event listeners para los botones de navegación
document.getElementById('menu-diario').addEventListener('click', function() {
    window.location.href = 'menu_diario.html';
});

document.getElementById('propiedades').addEventListener('click', function() {
    window.location.href = 'propiedades.html';
});
