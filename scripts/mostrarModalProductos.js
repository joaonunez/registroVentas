let mostrarProductos = function() {
    let tbody = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla

    
    productos.forEach((producto, index) => {
        
        setTimeout(() => {
            let row = tbody.insertRow(); // Crear una nueva fila
            row.classList.add('fade-in'); // Añadir la clase de animación
            row.insertCell(0).innerText = producto.getId; // Insertar celda para el ID
            row.insertCell(1).innerText = producto.getNombre; // Insertar celda para el nombre
            row.insertCell(2).innerText = producto.getCategoria; // Insertar celda para categoria
            row.insertCell(3).innerText = "$ "+producto.getPrecio; // Insertar celda para el precio
        }, index * 10); // Retraso de 500ms por cada fila
    });
}
document.getElementById('verProductos').addEventListener('shown.bs.modal', mostrarProductos);
