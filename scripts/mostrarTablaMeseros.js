// Función para mostrar meseros en la tabla
document.addEventListener('DOMContentLoaded', function () {
    let tbody = document.getElementById('tablaMeseros').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla
    meseros.forEach(mesero => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = mesero.getRut;
        row.insertCell(1).innerText = mesero.getNombre;
    
    });
});