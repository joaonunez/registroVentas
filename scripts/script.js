// Clase Producto
class Producto {
    // Constructor de la clase Producto
    constructor(id, nombre, categoria, precio) {
        this._id = id; // ID del producto
        this._nombre = nombre; // Nombre del producto
        this._categoria = categoria; // Categoría del producto
        this._precio = precio; // Precio del producto
    }

    // Métodos getter para obtener las propiedades del producto
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

    // Métodos setter para modificar las propiedades del producto
    set setNombre(nombre) {
        this._nombre = nombre;
    }
    set setCategoria(categoria) {
        this._categoria = categoria;
    }
    set setPrecio(precio) {
        this._precio = precio;
    }
}

// Clase Venta
class Venta {
    // Constructor de la clase Venta
    constructor(id, mesero, producto, cantidad, fecha) {
        this._id = id; // ID de la venta
        this._mesero = mesero; // Mesero que realizó la venta
        this._producto = producto; // Producto vendido
        this._cantidad = cantidad; // Cantidad vendida
        this._fecha = fecha; // Fecha de la venta
    }

    // Métodos getter para obtener las propiedades de la venta
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
    // Constructor de la clase Mesero
    constructor(rut, nombre) {
        this._rut = rut; // RUT del mesero
        this._nombre = nombre; // Nombre del mesero
    }

    // Métodos getter para obtener las propiedades del mesero
    get getRut() {
        return this._rut;
    }
    get getNombre() {
        return this._nombre;
    }

    // Métodos setter para modificar las propiedades del mesero
    set setRut(rut) {
        this._rut = rut;
    }
    set setNombre(nombre) {
        this._nombre = nombre;
    }
}

// Clase Categoria
class Categoria {
    // Constructor de la clase Categoria
    constructor(id, nombre) {
        this._id = id; // ID de la categoría
        this._nombre = nombre; // Nombre de la categoría
    }

    // Métodos getter para obtener las propiedades de la categoría
    get getId() {
        return this._id;
    }
    get getNombre() {
        return this._nombre;
    }

    // Método setter para modificar el nombre de la categoría
    set setNombre(nombre) {
        this._nombre = nombre;
    }
}

// Arrays para almacenar productos, meseros, categorías y ventas
let productos = [
    new Producto(1, 'Café Espresso', new Categoria(1, 'Bebestible'), 1500),
    new Producto(2, 'Capuccino', new Categoria(1, 'Bebestible'), 2000),
    new Producto(3, 'Sandwich Ave', new Categoria(2, 'Comestible'), 3000),
    new Producto(4, 'Té Verde', new Categoria(1, 'Bebestible'), 1200),
    new Producto(5, 'Ensalada de Frutas', new Categoria(2, 'Comestible'), 1800),
    new Producto(6, 'Hamburguesa Clásica', new Categoria(2, 'Comestible'), 2500),
    new Producto(7, 'Ensalada César', new Categoria(2, 'Comestible'), 1800),
    new Producto(8, 'Galletas de Chocolate', new Categoria(2, 'Comestible'), 1500),
    new Producto(9, 'Agua Mineral', new Categoria(1, 'Bebestible'), 1000),
    new Producto(10, 'Pizza Margarita', new Categoria(2, 'Comestible'), 2200),
    new Producto(11, 'Helado de Vainilla', new Categoria(2, 'Comestible'), 2000)
];

let meseros = [
    new Mesero('18.232.243-5', 'Eduardo Gomez'),
    new Mesero('19.132.254-5', 'Juan Pérez'),
    new Mesero('20.231.567-K', 'Melissa Casio')
];

let categorias = [
    new Categoria(1, 'Bebestible'),
    new Categoria(2, 'Comestible')
];

let ventas = [];

// Función para actualizar el dropdown de productos
function actualizarDropdownProductos() {
    const comboBox1 = document.getElementById('nombreProducto');
    comboBox1.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>';
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBox1.appendChild(optionElement);
    });
}

// Función para actualizar el dropdown de categorías
function actualizarDropdownCategorias() {
    const comboBox2 = document.getElementById('nuevaCategoriaProducto');
    const comboBoxEditar = document.getElementById('editarCategoriaProducto');
    comboBox2.innerHTML = '<option value="" selected disabled>Selecciona una categoría</option>';
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona una categoría</option>';
    categorias.forEach(categoria => {
        const optionElement = document.createElement('option');
        const optionElementEditar = document.createElement('option');
        optionElement.textContent = categoria.getNombre;
        optionElement.value = categoria.getId;
        optionElementEditar.textContent = categoria.getNombre;
        optionElementEditar.value = categoria.getId;
        comboBox2.appendChild(optionElement);
        comboBoxEditar.appendChild(optionElementEditar);
    });
}

// Función para actualizar el dropdown de meseros
function actualizarDropdownMeseros() {
    const comboBox3 = document.getElementById('nombreMesero');
    comboBox3.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>';
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option');
        optionElement.textContent = mesero.getNombre;
        optionElement.value = mesero.getRut;
        comboBox3.appendChild(optionElement);
    });
}

// Actualizar dropdowns al cargar la página
actualizarDropdownProductos();
actualizarDropdownCategorias();
actualizarDropdownMeseros();

// Función para mostrar los productos en la tabla con animación
let mostrarProductos = function() {
    let tbody = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    productos.forEach((producto, index) => {
        setTimeout(() => {
            let row = tbody.insertRow();
            row.classList.add('fade-in');
            row.insertCell(0).innerText = producto.getId;
            row.insertCell(1).innerText = producto.getNombre;
            row.insertCell(2).innerText = producto.getCategoria.getNombre;
            row.insertCell(3).innerText = `$${producto.getPrecio}`;
        }, index * 10);
    });
}

// Evento para mostrar productos cuando se abre el modal
document.getElementById('verProductos').addEventListener('shown.bs.modal', mostrarProductos);

// Inicializar validación de formularios
(function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation, .needs-validation2, .needs-validation3, .needs-validation4');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                const cantidad = document.getElementById('cantidad')?.value;
                if (!form.checkValidity() || (cantidad !== undefined && cantidad <= 0)) {
                    if (cantidad !== undefined && cantidad <= 0) {
                        document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.');
                    } else {
                        document.getElementById('cantidad')?.setCustomValidity('');
                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
})();

// Validar e ingresar una venta
function validarYIngresarVenta() {
    const form = document.querySelector('.needs-validation');
    const cantidad = document.getElementById('cantidad').value;
    if (form.checkValidity() && cantidad > 0) {
        ingresarVenta();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Venta ingresada', 'La venta ha sido ingresada correctamente', 'success');
    } else {
        form.classList.add('was-validated');
        if (cantidad <= 0) {
            document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.');
        } else {
            document.getElementById('cantidad').setCustomValidity('');
        }
    }
}

// Contador para asignar ID único a cada venta
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

        ventas.push(venta); // Agregar la venta al array de ventas
        ventaIdCounter++; // Incrementar el contador de ID de ventas
        mostrarVentas(); // Actualizar la tabla de ventas
    } else {
        console.error('Error: Mesero o producto no encontrado');
    }
}

// Función para mostrar las ventas en la tabla
let mostrarVentas = function() {
    let tbody = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
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

// Validar y agregar un nuevo producto
function validarYAgregarProducto() {
    const form = document.querySelector('.needs-validation2');
    if (form.checkValidity()) {
        agregarProducto();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Producto ingresado', 'El producto ha sido ingresado correctamente', 'success');
    } else {
        form.classList.add('was-validated');
    }
}

// Función para agregar un nuevo producto
function agregarProducto() {
    let nombre = document.getElementById('nuevoNombreProducto').value;
    let categoriaId = document.getElementById('nuevaCategoriaProducto').value;
    let categoriaSeleccionada = categorias.find(cat => cat.getId == categoriaId);
    let precio = parseInt(document.getElementById('nuevoPrecioProducto').value);
    let id = productos.length ? productos[productos.length - 1].getId + 1 : 1;

    productos.push(new Producto(id, nombre, categoriaSeleccionada, precio));
    actualizarTablaProductos(); // Actualizar la tabla de productos
    actualizarDropdownProductos(); // Actualizar el dropdown de productos
}

// Validar y agregar un nuevo mesero
function validarYAgregarMesero() {
    const form = document.querySelector('.needs-validation3');
    if (form.checkValidity()) {
        agregarMesero();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Mesero ingresado', 'El mesero ha sido ingresado correctamente', 'success');
    } else {
        form.classList.add('was-validated');
    }
}

// Función para agregar un nuevo mesero
function agregarMesero() {
    let rut = document.getElementById('nuevoRutMesero').value;
    let nombre = document.getElementById('nuevoNombreMesero').value;

    meseros.push(new Mesero(rut, nombre));
    actualizarTablaMeseros(); // Actualizar la tabla de meseros
    actualizarDropdownMeseros(); // Actualizar el dropdown de meseros
}

// Validar y agregar una nueva categoría
function validarYAgregarCategoria() {
    const form = document.querySelector('.needs-validation4');
    if (form.checkValidity()) {
        agregarCategoria();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Categoría ingresada', 'La categoría ha sido ingresada correctamente', 'success');
    } else {
        form.classList.add('was-validated');
    }
}

// Función para agregar una nueva categoría
function agregarCategoria() {
    let nombre = document.getElementById('nuevoNombreCategoria').value;
    let id = categorias.length ? categorias[categorias.length - 1].getId + 1 : 1;

    categorias.push(new Categoria(id, nombre));
    actualizarTablaCategorias(); // Actualizar la tabla de categorías
    actualizarDropdownCategorias(); // Actualizar el dropdown de categorías
}

// Añadir eventos a los botones de agregar producto, mesero y categoría
document.getElementById('agregarProductoButton').addEventListener('click', validarYAgregarProducto);
document.getElementById('agregarMeseroButton').addEventListener('click', validarYAgregarMesero);
document.getElementById('agregarCategoriaButton').addEventListener('click', validarYAgregarCategoria);

// Función para inicializar las tablas al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    actualizarTablaMeseros();
    actualizarTablaProductos();
    actualizarTablaCategorias();
});

// Función para actualizar la tabla de meseros
function actualizarTablaMeseros() {
    let tbody = document.getElementById('tablaMeseros').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    meseros.forEach((mesero, index) => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = mesero.getRut;
        row.insertCell(1).innerText = mesero.getNombre;
        let editCell = row.insertCell(2);
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>';
        editButton.className = 'btn btn-primary';
        editButton.setAttribute('data-bs-toggle', 'modal');
        editButton.setAttribute('data-bs-target', '#modalEditarMesero');
        editButton.onclick = function () {
            abrirModalEditarMesero(index);
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

// Función para abrir el modal de edición de mesero
function abrirModalEditarMesero(index) {
    let mesero = meseros[index];
    document.getElementById('editarRutMesero').value = mesero.getRut;
    document.getElementById('editarNombreMesero').value = mesero.getNombre;
    document.getElementById('formEditarMesero').onsubmit = function(event) {
        event.preventDefault();
        editarMesero(index);
        $('#modalEditarMesero').modal('hide');
        Swal.fire('Mesero modificado', 'El mesero ha sido modificado correctamente', 'success');
    };
    $('#modalEditarMesero').modal('show');
}

// Función para editar un mesero
function editarMesero(index) {
    let mesero = meseros[index];
    let newRut = document.getElementById('editarRutMesero').value;
    let newNombre = document.getElementById('editarNombreMesero').value;
    mesero.setRut = newRut;
    mesero.setNombre = newNombre;
    actualizarTablaMeseros(); // Actualizar la tabla de meseros
    actualizarDropdownMeseros(); // Actualizar el dropdown de meseros
}

// Función para eliminar un mesero
function eliminarMesero(index) {
    meseros.splice(index, 1);
    actualizarTablaMeseros(); // Actualizar la tabla de meseros
    actualizarDropdownMeseros(); // Actualizar el dropdown de meseros
    Swal.fire('Mesero eliminado', 'El mesero ha sido eliminado correctamente', 'success');
}

// Función para actualizar la tabla de productos
function actualizarTablaProductos() {
    let tbody = document.getElementById('tablaProductos2').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    productos.forEach((producto, index) => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = producto.getId;
        row.insertCell(1).innerText = producto.getNombre;
        row.insertCell(2).innerText = producto.getCategoria.getNombre;
        row.insertCell(3).innerText = `$${producto.getPrecio}`;

        let editCell = row.insertCell(4);
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>';
        editButton.className = 'btn btn-primary';
        editButton.setAttribute('data-bs-toggle', 'modal');
        editButton.setAttribute('data-bs-target', '#modalEditarProducto');
        editButton.onclick = function () {
            abrirModalEditarProducto(index);
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

// Función para abrir el modal de edición de producto
function abrirModalEditarProducto(index) {
    let producto = productos[index];
    document.getElementById('editarNombreProducto').value = producto.getNombre;
    document.getElementById('editarCategoriaProducto').value = producto.getCategoria.getId;
    document.getElementById('editarPrecioProducto').value = producto.getPrecio;
    document.getElementById('formEditarProducto').onsubmit = function(event) {
        event.preventDefault();
        editarProducto(index);
        $('#modalEditarProducto').modal('hide');
        Swal.fire('Producto modificado', 'El producto ha sido modificado correctamente', 'success');
    };
    $('#modalEditarProducto').modal('show');
}

// Función para editar un producto
function editarProducto(index) {
    let producto = productos[index];
    let newNombre = document.getElementById('editarNombreProducto').value;
    let newCategoriaId = document.getElementById('editarCategoriaProducto').value;
    let newCategoria = categorias.find(cat => cat.getId == newCategoriaId);
    let newPrecio = document.getElementById('editarPrecioProducto').value;
    producto.setNombre = newNombre;
    producto.setCategoria = newCategoria;
    producto.setPrecio = parseInt(newPrecio);
    actualizarTablaProductos(); // Actualizar la tabla de productos
    actualizarDropdownProductos(); // Actualizar el dropdown de productos
}

// Función para eliminar un producto
function eliminarProducto(index) {
    productos.splice(index, 1);
    actualizarTablaProductos(); // Actualizar la tabla de productos
    actualizarDropdownProductos(); // Actualizar el dropdown de productos
    Swal.fire('Producto eliminado', 'El producto ha sido eliminado correctamente', 'success');
}

// Función para actualizar la tabla de categorías
function actualizarTablaCategorias() {
    let tbody = document.getElementById('tablaCategorias').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    categorias.forEach((categoria, index) => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = categoria.getId;
        row.insertCell(1).innerText = categoria.getNombre;
        let editCell = row.insertCell(2);
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>';
        editButton.className = 'btn btn-primary';
        editButton.setAttribute('data-bs-toggle', 'modal');
        editButton.setAttribute('data-bs-target', '#modalEditarCategoria');
        editButton.onclick = function () {
            abrirModalEditarCategoria(index);
        };
        editCell.appendChild(editButton);

        let deleteCell = row.insertCell(3);
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>';
        deleteButton.className = 'btn btn-danger';
        deleteButton.onclick = function () {
            eliminarCategoria(index);
        };
        deleteCell.appendChild(deleteButton);
    });
}

// Función para abrir el modal de edición de categoría
function abrirModalEditarCategoria(index) {
    let categoria = categorias[index];
    document.getElementById('editarNombreCategoria').value = categoria.getNombre;
    document.getElementById('formEditarCategoria').onsubmit = function(event) {
        event.preventDefault();
        editarCategoria(index);
        $('#modalEditarCategoria').modal('hide');
        Swal.fire('Categoría modificada', 'La categoría ha sido modificada correctamente', 'success');
    };
    $('#modalEditarCategoria').modal('show');
}

// Función para editar una categoría
function editarCategoria(index) {
    let categoria = categorias[index];
    let newNombre = document.getElementById('editarNombreCategoria').value;
    categoria.setNombre = newNombre;
    actualizarTablaCategorias(); // Actualizar la tabla de categorías
    actualizarDropdownCategorias(); // Actualizar el dropdown de categorías
}

// Función para eliminar una categoría
function eliminarCategoria(index) {
    categorias.splice(index, 1);
    actualizarTablaCategorias(); // Actualizar la tabla de categorías
    actualizarDropdownCategorias(); // Actualizar el dropdown de categorías
    Swal.fire('Categoría eliminada', 'La categoría ha sido eliminada correctamente', 'success');
}

// Función para buscar en las tablas
function buscarEnTabla(inputId, tablaId) {
    let input = document.getElementById(inputId);
    let filter = input.value.toLowerCase();
    let tabla = document.getElementById(tablaId);
    let tr = tabla.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let tds = tr[i].getElementsByTagName('td');
        let match = false;
        for (let j = 0; j < tds.length; j++) {
            if (tds[j]) {
                let txtValue = tds[j].textContent || tds[j].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    match = true;
                    break;
                }
            }
        }
        if (match) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

// Evento de búsqueda en tiempo real para cada tabla
document.getElementById('buscarVentas').addEventListener('keyup', function () {
    buscarEnTabla('buscarVentas', 'tablaVentas');
});
document.getElementById('buscarMeseros').addEventListener('keyup', function () {
    buscarEnTabla('buscarMeseros', 'tablaMeseros');
});
document.getElementById('buscarProductos').addEventListener('keyup', function () {
    buscarEnTabla('buscarProductos', 'tablaProductos2');
});
document.getElementById('buscarCategorias').addEventListener('keyup', function () {
    buscarEnTabla('buscarCategorias', 'tablaCategorias');
});
