function buscarEnTablaPorId(inputId, tablaId) {
    let input = document.getElementById(inputId); // obtiene el elemento de entrada por su id
    let filter = input.value.toLowerCase(); // convierte el valor de entrada a minusculas
    let tabla = document.getElementById(tablaId); // obtiene la tabla por su id
    let tr = tabla.getElementsByTagName('tr'); // obtiene todas las filas de la tabla

    for (let i = 1; i < tr.length; i++) { // recorre las filas de la tabla, comienza en 1 para saltar el encabezado
        let td = tr[i].getElementsByTagName('td')[0]; // obtiene la primera celda de cada fila
        if (td) { // verifica si la celda existe
            let txtValue = td.textContent || td.innerText; // obtiene el texto de la celda
            if (txtValue.toLowerCase().indexOf(filter) > -1) { // verifica si el texto contiene el filtro
                tr[i].style.display = ""; // si coincide, muestra la fila
            } else {
                tr[i].style.display = "none"; // si no coincide, oculta la fila
            }
        }
    }
}

document.getElementById('buscarVentas').addEventListener('keyup', function () { // agrega un evento keyup al elemento buscarVentas
    buscarEnTablaPorId('buscarVentas', 'tablaVentas'); // llama a la funcion para buscar en la tabla de ventas
});
document.getElementById('buscarMeseros').addEventListener('keyup', function () { // agrega un evento keyup al elemento buscarMeseros
    buscarEnTablaPorId('buscarMeseros', 'tablaMeseros'); // llama a la funcion para buscar en la tabla de meseros
});
document.getElementById('buscarProductos').addEventListener('keyup', function () { // agrega un evento keyup al elemento buscarProductos
    buscarEnTablaPorId('buscarProductos', 'tablaProductos2'); // llama a la funcion para buscar en la tabla de productos
});
document.getElementById('buscarCategorias').addEventListener('keyup', function () { // agrega un evento keyup al elemento buscarCategorias
    buscarEnTablaPorId('buscarCategorias', 'tablaCategorias'); // llama a la funcion para buscar en la tabla de categorias
});
