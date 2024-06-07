function buscarEnTablaPorId(inputId, tablaId) {
    let input = document.getElementById(inputId);
    let filter = input.value.toLowerCase();
    let tabla = document.getElementById(tablaId);
    let tr = tabla.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

document.getElementById('buscarVentas').addEventListener('keyup', function () {
    buscarEnTablaPorId('buscarVentas', 'tablaVentas');
});
document.getElementById('buscarMeseros').addEventListener('keyup', function () {
    buscarEnTablaPorId('buscarMeseros', 'tablaMeseros');
});
document.getElementById('buscarProductos').addEventListener('keyup', function () {
    buscarEnTablaPorId('buscarProductos', 'tablaProductos2');
});
document.getElementById('buscarCategorias').addEventListener('keyup', function () {
    buscarEnTablaPorId('buscarCategorias', 'tablaCategorias');
});
