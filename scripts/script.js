// Clase Producto
class Producto {
    constructor(id, nombre, categoria, precio) {
        this._id = id;
        this._nombre = nombre;
        this._categoria = categoria;
        this._precio = precio;
    }

    // Métodos getter para acceder a las propiedades del producto
    get getId() {
        return this._id;
    }
    get getNombre() {
        return this._nombre;
    }
    get getCategoria() {
        return this._categoria;
    }
    get getPrecio() {
        return this._precio;
    }
}

// Clase Venta
class Venta {
    constructor(id, mesero, producto, cantidad, fecha) {
        this._id = id;
        this._mesero = mesero;
        this._producto = producto;
        this._cantidad = cantidad;
        this._fecha = fecha;
    }
    
    // Métodos getter para acceder a las propiedades de la venta
    get getId() {
        return this._id;
    }
    get getMesero() {
        return this._mesero;
    }
    get getProducto() {
        return this._producto;
    }
    get getCantidad() {
        return this._cantidad;
    }
    get getFecha() {
        return this._fecha;
    }
}

// Clase Mesero
class Mesero {
    constructor(rut, nombre) {
        this._rut = rut;
        this._nombre = nombre;
    }

    // Métodos getter para acceder a las propiedades del mesero
    get getRut() {
        return this._rut;
    }
    get getNombre() {
        return this._nombre;
    }
}

// Datos iniciales de productos
let productos = [
    new Producto(1, 'Café Espresso', 'Bebestible', 1500),
    new Producto(2, 'Capuccino', 'Bebestible', 2000),
    new Producto(3, 'Sandwich Ave', 'Comestible', 3000),
    new Producto(4, 'Té Verde', 'Bebestible', 1200),
    new Producto(5, 'Ensalada de Frutas', 'Comestible', 1800),
    new Producto(6, 'Hamburguesa Clásica', 'Comestible', 2500),
    new Producto(7, 'Ensalada César', 'Comestible', 1800),
    new Producto(8, 'Galletas de Chocolate', 'Comestible', 1500),
    new Producto(9, 'Agua Mineral', 'Bebestible', 1000),
    new Producto(10, 'Pizza Margarita', 'Comestible', 2200),
    new Producto(11, 'Helado de Vainilla', 'Comestible', 2000)
];

// Datos iniciales de meseros
let meseros = [
    new Mesero('18.232.243-5', 'Eduardo Gomez'),
    new Mesero('19.132.254-5', 'Juan Pérez'),
    new Mesero('20.231.567-K', 'Melissa Casio')
];

// Array para almacenar ventas
let ventas = [];

// Función para actualizar el dropdown de productos
function actualizarDropdownProductos() {
    const comboBox1 = document.getElementById('nombreProducto');
    comboBox1.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>'; // Agregar la opción por defecto
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBox1.appendChild(optionElement);
    });
}

// Función para actualizar el dropdown de meseros
function actualizarDropdownMeseros() {
    const comboBox2 = document.getElementById('nombreMesero');
    comboBox2.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>'; // Agregar la opción por defecto
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option');
        optionElement.textContent = mesero.getNombre;
        optionElement.value = mesero.getRut;
        comboBox2.appendChild(optionElement);
    });
}

// Llamar las funciones para llenar los dropdowns inicialmente
actualizarDropdownProductos();
actualizarDropdownMeseros();

// Función para mostrar los productos en la tabla del modal
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
            row.insertCell(3).innerText = `$${producto.getPrecio}`; // Insertar celda para el precio
        }, index * 10); // Retraso de 10ms por cada fila
    });
}

// Evento para mostrar productos en el modal
document.getElementById('verProductos').addEventListener('shown.bs.modal', mostrarProductos);

// Validación de formularios
(function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                const cantidad = document.getElementById('cantidad').value;
                if (!form.checkValidity() || cantidad <= 0) {
                    if (cantidad <= 0) {
                        document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.');
                    } else {
                        document.getElementById('cantidad').setCustomValidity('');
                    }
                } else {
                    ingresarVenta(); // Ingresar la venta
                }
                form.classList.add('was-validated');
            }, false);
        });
})();

// Contador para el ID de las ventas
let ventaIdCounter = 1;

// Función para ingresar una nueva venta
let ingresarVenta = function() {
    let productoId = document.getElementById('nombreProducto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let meseroRut = document.getElementById('nombreMesero').value;
    let fecha = document.getElementById('fecha').value;
    let productoSeleccionado = productos.find(producto => producto.getId == productoId);
    let meseroSeleccionado = meseros.find(mesero => mesero.getRut == meseroRut);

    if (productoSeleccionado && meseroSeleccionado) {
        let venta = new Venta(
            ventaIdCounter,
            meseroSeleccionado,
            productoSeleccionado,
            cantidad,
            fecha
        );

        ventas.push(venta);
        ventaIdCounter++;
        mostrarVentas();
    } else {
        console.error('Error: Mesero o producto no encontrado');
    }
}

// Evento para manejar el ingreso de una venta
document.getElementById('ingresarVentaButton').addEventListener('click', function(event) {
    event.preventDefault();
    const form = document.querySelector('.needs-validation');
    const cantidad = document.getElementById('cantidad').value;
    if (form.checkValidity() && cantidad > 0) {
        ingresarVenta();
    } else {
        form.classList.add('was-validated');
        if (cantidad <= 0) {
            document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.');
        } else {
            document.getElementById('cantidad').setCustomValidity('');
        }
    }
});

// Función para mostrar las ventas en la tabla
let mostrarVentas = function() {
    let tbody = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla

    ventas.forEach(venta => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = venta.getId;
        row.insertCell(1).innerText = venta.getMesero.getNombre;
        row.insertCell(2).innerText = venta.getProducto.getNombre;
        row.insertCell(3).innerText = venta.getCantidad;
        row.insertCell(4).innerText = venta.getFecha;
        row.insertCell(5).innerText = `$${venta.getProducto.getPrecio * venta.getCantidad}`;
    });
};

// Evento para cargar las tablas de meseros y productos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    actualizarTablaMeseros();
    actualizarTablaProductos();
});

// Función para actualizar la tabla de meseros
function actualizarTablaMeseros() {
    let tbody = document.getElementById('tablaMeseros').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla
    meseros.forEach((mesero, index) => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = mesero.getRut;
        row.insertCell(1).innerText = mesero.getNombre;
        let editCell = row.insertCell(2);
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>';
        editButton.className = 'btn btn-primary';
        editButton.onclick = function () {
            editarMesero(index);
        };
        editCell.appendChild(editButton);

        let deleteCell = row.insertCell(3);
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>';
        deleteButton.className = 'btn btn-danger';
        deleteButton.onclick = function () {
            eliminarMesero(index);
        };
        deleteCell.appendChild(deleteButton);
    });
}

// Función para editar un mesero
function editarMesero(index) {
    let mesero = meseros[index];
    let newRut = prompt("Editar RUT:", mesero.getRut);
    if (newRut !== null) {
        mesero._rut = newRut;
    }
    let newNombre = prompt("Editar Nombre:", mesero.getNombre);
    if (newNombre !== null) {
        mesero._nombre = newNombre;
    }
    actualizarTablaMeseros();
    actualizarDropdownMeseros(); // Actualizar el dropdown de meseros
}

// Función para eliminar un mesero
function eliminarMesero(index) {
    meseros.splice(index, 1);
    actualizarTablaMeseros();
    actualizarDropdownMeseros(); // Actualizar el dropdown de meseros
}

// Función para actualizar la tabla de productos
function actualizarTablaProductos() {
    let tbody = document.getElementById('tablaProductos2').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla
    productos.forEach((producto, index) => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = producto.getId;
        row.insertCell(1).innerText = producto.getNombre;
        row.insertCell(2).innerText = producto.getCategoria;
        row.insertCell(3).innerText = `$${producto.getPrecio}`;

        let editCell = row.insertCell(4);
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>';
        editButton.className = 'btn btn-primary';
        editButton.onclick = function () {
            editarProducto(index);
        };
        editCell.appendChild(editButton);

        let deleteCell = row.insertCell(5);
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>';
        deleteButton.className = 'btn btn-danger';
        deleteButton.onclick = function () {
            eliminarProducto(index);
        };
        deleteCell.appendChild(deleteButton);
    });
}

// Función para editar un producto
function editarProducto(index) {
    let producto = productos[index];
    let newNombre = prompt("Editar Nombre:", producto.getNombre);
    if (newNombre !== null) {
        producto._nombre = newNombre;
    }
    let newCategoria = prompt("Editar Categoría:", producto.getCategoria);
    if (newCategoria !== null) {
        producto._categoria = newCategoria;
    }
    let newPrecio = prompt("Editar Precio:", producto.getPrecio);
    if (newPrecio !== null) {
        producto._precio = parseInt(newPrecio);
    }
    actualizarTablaProductos();
    actualizarDropdownProductos(); // Actualizar el dropdown de productos
}

// Función para eliminar un producto
function eliminarProducto(index) {
    productos.splice(index, 1);
    actualizarTablaProductos();
    actualizarDropdownProductos(); // Actualizar el dropdown de productos
}

// Evento para manejar la adición de un nuevo producto
document.getElementById('formAgregarProducto').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nuevoNombreProducto').value;
    let categoria = document.getElementById('nuevaCategoriaProducto').value;
    let precio = parseInt(document.getElementById('nuevoPrecioProducto').value);
    let id = productos.length ? productos[productos.length - 1].getId + 1 : 1;

    productos.push(new Producto(id, nombre, categoria, precio));
    actualizarTablaProductos();
    actualizarDropdownProductos(); // Actualizar el dropdown de productos
    document.getElementById('formAgregarProducto').reset();
});

// Evento para manejar la adición de un nuevo mesero
document.getElementById('formAgregarMesero').addEventListener('submit', function(event) {
    event.preventDefault();
    let rut = document.getElementById('nuevoRutMesero').value;
    let nombre = document.getElementById('nuevoNombreMesero').value;

    meseros.push(new Mesero(rut, nombre));
    actualizarTablaMeseros();
    actualizarDropdownMeseros(); // Actualizar el dropdown de meseros
    document.getElementById('formAgregarMesero').reset();
});
