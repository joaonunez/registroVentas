// Obtener el elemento select del DOM MASCOTAS
const comboBox2 = document.getElementById('nombreMesero');

// Iterar sobre el arreglo de mascotas y agregar opciones al combo box
meseros.forEach(mesero => {
    // Crear un elemento opción para cada mascota
    const optionElement = document.createElement('option');
    
   
    // Establecer el texto de la opción usando el nombre y el tipo de la mascota
    optionElement.textContent = mesero.getNombre;
    
    // Establecer el valor de la opción como el ID de la mascota
    optionElement.value = mesero.getRut;
    
    // Agregar la opción al combo box
    comboBox2.appendChild(optionElement);
});