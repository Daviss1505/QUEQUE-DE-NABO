function mostrarDetalle(receta) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    let detalles = "";

    if (receta === "queque") {
        detalles = `
            <h2>Queque de Nabo</h2>
            <p>Un queque delicioso y nutritivo hecho con nabo fresco.</p>
            <h3>Ingredientes</h3>
            <ul>
                <li>1 taza de nabo rallado</li>
                <li>1 taza de harina</li>
                <li>2 huevos</li>
                <li>1/2 taza de azúcar</li>
            </ul>
            <h3>Preparación</h3>
            <p>Mezclar ingredientes y hornear a 180°C por 30 minutos.</p>
        `;
    } else if (receta === "galletas") {
        detalles = `
            <h2>Galletas de Avena</h2>
            <p>Galletas crujientes y saludables con avena.</p>
            <h3>Ingredientes</h3>
            <ul>
                <li>1 taza de avena</li>
                <li>1/2 taza de azúcar</li>
                <li>1 huevo</li>
            </ul>
            <h3>Preparación</h3>
            <p>Mezclar y hornear a 180°C por 20 minutos.</p>
        `;
    }

    modalContent.innerHTML = detalles;
    modal.style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
