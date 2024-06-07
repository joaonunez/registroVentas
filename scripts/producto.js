class Producto {
    constructor(id, nombre, categoria, precio) {
        this._id = id;
        this._nombre = nombre;
        this._categoria = categoria;
        this._precio = precio;
    }

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

function actualizarDropdownProductos() {
    const comboBox1 = document.getElementById('nombreProducto');
    comboBox1.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>';
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBox1.appendChild(optionElement);
    });

    const comboBoxEditar = document.getElementById('editarProductoVenta');
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>';
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBoxEditar.appendChild(optionElement);
    });
}

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

function editarProducto(index) {
    let producto = productos[index];
    let newNombre = document.getElementById('editarNombreProducto').value;
    let newCategoriaId = document.getElementById('editarCategoriaProducto').value;
    let newCategoria = categorias.find(cat => cat.getId == newCategoriaId);
    let newPrecio = document.getElementById('editarPrecioProducto').value;
    producto.setNombre = newNombre;
    producto.setCategoria = newCategoria;
    producto.setPrecio = parseInt(newPrecio);
    actualizarTablaProductos();
    actualizarDropdownProductos();
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    actualizarTablaProductos();
    actualizarDropdownProductos();
    Swal.fire('Producto eliminado', 'El producto ha sido eliminado correctamente', 'success');
}

function validarYAgregarProducto() {
    const form = document.querySelector('.needs-validation-productos');
    if (form.checkValidity()) {
        agregarProducto();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Producto ingresado', 'El producto ha sido ingresado correctamente', 'success');
    } else {
        form.classList.add('was-validated');
    }
}

function agregarProducto() {
    let nombre = document.getElementById('nuevoNombreProducto').value;
    let categoriaId = document.getElementById('nuevaCategoriaProducto').value;
    let categoriaSeleccionada = categorias.find(cat => cat.getId == categoriaId);
    let precio = parseInt(document.getElementById('nuevoPrecioProducto').value);
    let id = productos.length ? productos[productos.length - 1].getId + 1 : 1;

    productos.push(new Producto(id, nombre, categoriaSeleccionada, precio));
    actualizarTablaProductos();
    actualizarDropdownProductos();
}

document.getElementById('agregarProductoButton').addEventListener('click', validarYAgregarProducto);

document.addEventListener('DOMContentLoaded', function () {
    actualizarTablaProductos();
    actualizarDropdownProductos();
});
