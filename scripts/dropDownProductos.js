// Obtener el elemento select del DOM Productos
const comboBox1 = document.getElementById('nombreProducto');

// Iterar sobre el arreglo de mascotas y agregar opciones al combo box
productos.forEach(producto => {
    // Crear un elemento opción para cada mascota
    const optionElement = document.createElement('option');
    
   
    // Establecer el texto de la opción usando el nombre y el tipo de la mascota
    optionElement.textContent = producto.getNombre + " ($"+producto.getPrecio+" CLP)";
    
    // Establecer el valor de la opción como el ID de la mascota
    optionElement.value = producto.getId;
    
    // Agregar la opción al combo box
    comboBox1.appendChild(optionElement);
});