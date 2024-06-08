class Venta {
    constructor(id, mesero, producto, cantidad, fecha) {
        this._id = id; // inicializa el id de la venta
        this._mesero = mesero; // inicializa el mesero de la venta
        this._producto = producto; // inicializa el producto de la venta
        this._cantidad = cantidad; // inicializa la cantidad de la venta
        this._fecha = fecha; // inicializa la fecha de la venta
    }

    get getId() {
        return this._id; // devuelve el id de la venta
    }
    get getMesero() {
        return this._mesero; // devuelve el mesero de la venta
    }
    get getProducto() {
        return this._producto; // devuelve el producto de la venta
    }
    get getCantidad() {
        return this._cantidad; // devuelve la cantidad de la venta
    }
    get getFecha() {
        return this._fecha; // devuelve la fecha de la venta
    }

    set setMesero(mesero) {
        this._mesero = mesero; // establece el mesero de la venta
    }
    set setProducto(producto) {
        this._producto = producto; // establece el producto de la venta
    }
    set setCantidad(cantidad) {
        this._cantidad = cantidad; // establece la cantidad de la venta
    }
    set setFecha(fecha) {
        this._fecha = fecha; // establece la fecha de la venta
    }
}

let ventas = []; // inicializa un array vacío para almacenar las ventas

function validarYIngresarVenta() {
    const form = document.querySelector('.needs-validation-ventas'); // selecciona el formulario de ventas
    const cantidad = document.getElementById('cantidad').value; // obtiene el valor del campo cantidad
    if (form.checkValidity() && cantidad > 0) { // verifica si el formulario es válido y la cantidad es mayor a 0
        ingresarVenta(); // llama a la función para ingresar la venta
        form.reset(); // resetea el formulario
        form.classList.remove('was-validated'); // remueve la clase de validación
        Swal.fire('Venta ingresada', 'La venta ha sido ingresada correctamente', 'success'); // muestra un mensaje de éxito
    } else {
        form.classList.add('was-validated'); // agrega la clase de validación al formulario
        if (cantidad <= 0) {
            document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.'); // establece un mensaje de error
        } else {
            document.getElementById('cantidad').setCustomValidity(''); // resetea el mensaje de error
        }
    }
}

let ventaIdCounter = 1; // inicializa un contador para los ids de las ventas

function ingresarVenta() {
    let productoId = document.getElementById('nombreProducto').value; // obtiene el id del producto seleccionado
    let cantidad = parseInt(document.getElementById('cantidad').value); // obtiene la cantidad y la convierte a entero
    let meseroRut = document.getElementById('nombreMesero').value; // obtiene el rut del mesero seleccionado
    let fecha = document.getElementById('fecha').value; // obtiene la fecha
    let productoSeleccionado = productos.find(producto => producto.getId == productoId); // encuentra el producto seleccionado
    let meseroSeleccionado = meseros.find(mesero => mesero.getRut == meseroRut); // encuentra el mesero seleccionado

    if (productoSeleccionado && meseroSeleccionado) {
        let venta = new Venta(
            ventaIdCounter, // asigna el id de la venta
            meseroSeleccionado, // asigna el mesero de la venta
            productoSeleccionado, // asigna el producto de la venta
            cantidad, // asigna la cantidad de la venta
            fecha // asigna la fecha de la venta
        );

        ventas.push(venta); // agrega la venta al array de ventas
        ventaIdCounter++; // incrementa el contador de ids
        mostrarVentas(); // actualiza la tabla de ventas
    } else {
        console.error('Error: Mesero o producto no encontrado'); // muestra un mensaje de error si no se encuentra el mesero o el producto
    }
}

let mostrarVentas = function() {
    let tbody = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0]; // selecciona el cuerpo de la tabla de ventas
    tbody.innerHTML = ''; // limpia el contenido del cuerpo de la tabla
    ventas.forEach((venta, index) => { // itera sobre el array de ventas
        let row = tbody.insertRow(); // inserta una nueva fila en el cuerpo de la tabla
        row.insertCell(0).innerText = venta.getId; // agrega el id de la venta a la primera celda
        row.insertCell(1).innerText = venta.getMesero.getNombre; // agrega el nombre del mesero a la segunda celda
        row.insertCell(2).innerText = venta.getProducto.getNombre; // agrega el nombre del producto a la tercera celda
        row.insertCell(3).innerText = venta.getCantidad; // agrega la cantidad a la cuarta celda
        row.insertCell(4).innerText = venta.getFecha; // agrega la fecha a la quinta celda
        row.insertCell(5).innerText = `$${venta.getProducto.getPrecio * venta.getCantidad}`; // agrega el total a la sexta celda
        
        let editCell = row.insertCell(6); // agrega una nueva celda para el botón de editar
        let editButton = document.createElement('button'); // crea un botón de editar
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>'; // establece el contenido del botón
        editButton.className = 'btn btn-primary'; // agrega una clase al botón
        editButton.setAttribute('data-bs-toggle', 'modal'); // establece los atributos para el modal
        editButton.setAttribute('data-bs-target', '#modalEditarVenta'); // establece el objetivo del modal
        editButton.onclick = function () {
            abrirModalEditarVenta(index); // agrega un evento de clic para abrir el modal de edición
        };
        editCell.appendChild(editButton); // agrega el botón a la celda de editar

        let deleteCell = row.insertCell(7); // agrega una nueva celda para el botón de eliminar
        let deleteButton = document.createElement('button'); // crea un botón de eliminar
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>'; // establece el contenido del botón
        deleteButton.className = 'btn btn-danger'; // agrega una clase al botón
        deleteButton.onclick = function () {
            eliminarVenta(index); // agrega un evento de clic para eliminar la venta
        };
        deleteCell.appendChild(deleteButton); // agrega el botón a la celda de eliminar
    });
};

function abrirModalEditarVenta(index) {
    let venta = ventas[index]; // obtiene la venta correspondiente al índice
    document.getElementById('editarProductoVenta').value = venta.getProducto.getId; // establece el valor del producto en el modal
    document.getElementById('editarCantidadVenta').value = venta.getCantidad; // establece el valor de la cantidad en el modal
    document.getElementById('editarMeseroVenta').value = venta.getMesero.getRut; // establece el valor del mesero en el modal
    document.getElementById('editarFechaVenta').value = venta.getFecha; // establece el valor de la fecha en el modal
    document.getElementById('formEditarVenta').onsubmit = function(event) {
        event.preventDefault(); // previene el comportamiento por defecto del formulario
        if (validarFormularioModal('formEditarVenta')) {
            editarVenta(index); // llama a la función para editar la venta
            $('#modalEditarVenta').modal('hide'); // oculta el modal
            Swal.fire('Cambios guardados satisfactoriamente', '', 'success'); // muestra un mensaje de éxito
        }
    };
    $('#modalEditarVenta').modal('show'); // muestra el modal de edición
}

function validarFormularioModal(formId) {
    const form = document.getElementById(formId); // selecciona el formulario por id
    const inputs = form.querySelectorAll('input, select'); // selecciona todos los inputs y selects del formulario
    let isValid = true; // establece una bandera para la validez del formulario
    inputs.forEach(input => {
        if (!input.value) { // si el input no tiene valor
            input.classList.add('is-invalid'); // agrega la clase de invalidación
            isValid = false; // establece la bandera de validez en falso
        } else {
            input.classList.remove('is-invalid'); // remueve la clase de invalidación
            input.classList.add('is-valid'); // agrega la clase de validación
        }
    });
    return isValid; // devuelve el estado de validez del formulario
}


function editarVenta(index) {
    let venta = ventas[index]; // obtiene la venta correspondiente al índice
    let newProductoId = document.getElementById('editarProductoVenta').value; // obtiene el nuevo id del producto
    let newProducto = productos.find(producto => producto.getId == newProductoId); // encuentra el nuevo producto
    let newCantidad = document.getElementById('editarCantidadVenta').value; // obtiene la nueva cantidad
    let newMeseroRut = document.getElementById('editarMeseroVenta').value; // obtiene el nuevo rut del mesero
    let newMesero = meseros.find(mesero => mesero.getRut == newMeseroRut); // encuentra el nuevo mesero
    let newFecha = document.getElementById('editarFechaVenta').value; // obtiene la nueva fecha
    
    venta.setProducto = newProducto; // establece el nuevo producto
    venta.setCantidad = parseInt(newCantidad); // establece la nueva cantidad
    venta.setMesero = newMesero; // establece el nuevo mesero
    venta.setFecha = newFecha; // establece la nueva fecha
    
    mostrarVentas(); // actualiza la tabla de ventas
}

function eliminarVenta(index) {
    ventas.splice(index, 1); // elimina la venta del array de ventas
    mostrarVentas(); // actualiza la tabla de ventas
    Swal.fire('Venta eliminada', 'La venta ha sido eliminada correctamente', 'success'); // muestra un mensaje de éxito
}

document.getElementById('ingresarVentaButton').addEventListener('click', validarYIngresarVenta); // agrega un evento de clic al botón de ingresar venta

document.addEventListener('DOMContentLoaded', function () {
    mostrarVentas(); // muestra las ventas cuando el documento está cargado
});
