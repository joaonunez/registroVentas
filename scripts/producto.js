class Producto { // clase para crear objetos de producto
    constructor(id, nombre, categoria, precio) { // constructor que inicializa los atributos del producto
        this._id = id; // id del producto
        this._nombre = nombre; // nombre del producto
        this._categoria = categoria; // categoria del producto
        this._precio = precio; // precio del producto
    }

    get getId() { // getter para obtener el id del producto
        return this._id;
    }
    get getNombre() { // getter para obtener el nombre del producto
        return this._nombre;
    }
    get getCategoria() { // getter para obtener la categoria del producto
        return this._categoria;
    }
    get getPrecio() { // getter para obtener el precio del producto
        return this._precio;
    }

    set setNombre(nombre) { // setter para establecer el nombre del producto
        this._nombre = nombre;
    }
    set setCategoria(categoria) { // setter para establecer la categoria del producto
        this._categoria = categoria;
    }
    set setPrecio(precio) { // setter para establecer el precio del producto
        this._precio = precio;
    }
}

let productos = [ // array de productos inicializados con varios objetos producto
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

function actualizarDropdownProductos() { // funcion para actualizar el dropdown de productos
    const comboBox1 = document.getElementById('nombreProducto'); // obtiene el elemento select para productos
    comboBox1.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>'; // establece la opcion por defecto
    productos.forEach(producto => { // recorre el array de productos
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`; // establece el texto del option con el nombre y precio del producto
        optionElement.value = producto.getId; // establece el valor del option con el id del producto
        comboBox1.appendChild(optionElement); // agrega el option al select
    });

    const comboBoxEditar = document.getElementById('editarProductoVenta'); // obtiene el elemento select para editar productos
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>'; // establece la opcion por defecto
    productos.forEach(producto => { // recorre el array de productos
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`; // establece el texto del option con el nombre y precio del producto
        optionElement.value = producto.getId; // establece el valor del option con el id del producto
        comboBoxEditar.appendChild(optionElement); // agrega el option al select
    });
}

function actualizarTablaProductos() { // funcion para actualizar la tabla de productos
    let tbody = document.getElementById('tablaProductos2').getElementsByTagName('tbody')[0]; // obtiene el cuerpo de la tabla de productos
    tbody.innerHTML = ''; // limpia el contenido de la tabla
    productos.forEach((producto, index) => { // recorre el array de productos
        let row = tbody.insertRow(); // inserta una nueva fila en la tabla
        row.insertCell(0).innerText = producto.getId; // inserta una celda con el id del producto
        row.insertCell(1).innerText = producto.getNombre; // inserta una celda con el nombre del producto
        row.insertCell(2).innerText = producto.getCategoria.getNombre; // inserta una celda con la categoria del producto
        row.insertCell(3).innerText = `$${producto.getPrecio}`; // inserta una celda con el precio del producto

        let editCell = row.insertCell(4); // inserta una celda para el boton de editar
        let editButton = document.createElement('button'); // crea un boton de editar
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>'; // establece el icono del boton
        editButton.className = 'btn btn-primary'; // establece la clase del boton
        editButton.setAttribute('data-bs-toggle', 'modal'); // establece el atributo para mostrar el modal
        editButton.setAttribute('data-bs-target', '#modalEditarProducto'); // establece el target del modal
        editButton.onclick = function () {
            abrirModalEditarProducto(index); // funcion para abrir el modal de edicion
        };
        editCell.appendChild(editButton); // agrega el boton a la celda

        let deleteCell = row.insertCell(5); // inserta una celda para el boton de eliminar
        let deleteButton = document.createElement('button'); // crea un boton de eliminar
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>'; // establece el icono del boton
        deleteButton.className = 'btn btn-danger'; // establece la clase del boton
        deleteButton.onclick = function () {
            eliminarProducto(index); // funcion para eliminar un producto
        };
        deleteCell.appendChild(deleteButton); // agrega el boton a la celda
    });
}

function abrirModalEditarProducto(index) { // funcion para abrir el modal de edicion de productos
    let producto = productos[index]; // obtiene el producto por su indice
    document.getElementById('editarNombreProducto').value = producto.getNombre; // establece el valor del input de nombre
    document.getElementById('editarCategoriaProducto').value = producto.getCategoria.getId; // establece el valor del input de categoria
    document.getElementById('editarPrecioProducto').value = producto.getPrecio; // establece el valor del input de precio
    document.getElementById('formEditarProducto').onsubmit = function(event) {
        event.preventDefault(); // previene el envio del formulario
        if (validarFormularioModal('formEditarProducto')) { // valida el formulario
            editarProducto(index); // llama a la funcion para editar el producto
            $('#modalEditarProducto').modal('hide'); // cierra el modal
            Swal.fire('Producto modificado', 'El producto ha sido modificado correctamente', 'success'); // muestra una alerta de exito
        }
    };
    $('#modalEditarProducto').modal('show'); // muestra el modal de edicion
}

function editarProducto(index) { // funcion para editar un producto
    let producto = productos[index]; // obtiene el producto por su indice
    let newNombre = document.getElementById('editarNombreProducto').value; // obtiene el nuevo nombre del input
    let newCategoriaId = document.getElementById('editarCategoriaProducto').value; // obtiene la nueva categoria del input
    let newCategoria = categorias.find(cat => cat.getId == newCategoriaId); // busca la categoria por su id
    let newPrecio = document.getElementById('editarPrecioProducto').value; // obtiene el nuevo precio del input
    producto.setNombre = newNombre; // establece el nuevo nombre al producto
    producto.setCategoria = newCategoria; // establece la nueva categoria al producto
    producto.setPrecio = parseInt(newPrecio); // establece el nuevo precio al producto
    actualizarTablaProductos(); // actualiza la tabla de productos
    actualizarDropdownProductos(); // actualiza el dropdown de productos
}

function eliminarProducto(index) { // funcion para eliminar un producto
    productos.splice(index, 1); // elimina el producto del array por su indice
    actualizarTablaProductos(); // actualiza la tabla de productos
    actualizarDropdownProductos(); // actualiza el dropdown de productos
    Swal.fire('Producto eliminado', 'El producto ha sido eliminado correctamente', 'success'); // muestra una alerta de exito
}

function validarYAgregarProducto() { // funcion para validar y agregar un producto
    const form = document.querySelector('.needs-validation-productos'); // obtiene el formulario de validacion de productos
    if (form.checkValidity()) { // verifica si el formulario es valido
        agregarProducto(); // llama a la funcion para agregar un producto
        form.reset(); // resetea el formulario
        form.classList.remove('was-validated'); // remueve la clase de validacion
        Swal.fire('Producto ingresado', 'El producto ha sido ingresado correctamente', 'success'); // muestra una alerta de exito
    } else {
        form.classList.add('was-validated'); // agrega la clase de validacion si el formulario no es valido
    }
}

function agregarProducto() { // funcion para agregar un producto
    let nombre = document.getElementById('nuevoNombreProducto').value; // obtiene el valor del input de nombre
    let categoriaId = document.getElementById('nuevaCategoriaProducto').value; // obtiene el valor del input de categoria
    let categoriaSeleccionada = categorias.find(cat => cat.getId == categoriaId); // busca la categoria por su id
    let precio = parseInt(document.getElementById('nuevoPrecioProducto').value); // obtiene el valor del input de precio
    let id = productos.length ? productos[productos.length - 1].getId + 1 : 1; // genera un nuevo id para el producto

    productos.push(new Producto(id, nombre, categoriaSeleccionada, precio)); // agrega un nuevo producto al array
    actualizarTablaProductos(); // actualiza la tabla de productos
    actualizarDropdownProductos(); // actualiza el dropdown de productos
}

document.getElementById('agregarProductoButton').addEventListener('click', validarYAgregarProducto); // agrega un evento de click al boton para validar y agregar producto

document.addEventListener('DOMContentLoaded', function () { // evento que se ejecuta cuando el DOM se ha cargado completamente
    actualizarTablaProductos(); // llama a la funcion para actualizar la tabla de productos
    actualizarDropdownProductos(); // llama a la funcion para actualizar el dropdown de productos
});

document.getElementById('verProductos').addEventListener('show.bs.modal', function () { // evento que se ejecuta cuando se muestra el modal de ver productos
    const tablaProductosBody = document.querySelector('#tablaProductos tbody'); // obtiene el cuerpo de la tabla de productos
    tablaProductosBody.innerHTML = ''; // limpia la tabla antes de llenarla

    let tbody = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0]; // obtiene el cuerpo de la tabla de productos
    tbody.innerHTML = ''; // limpia el contenido de la tabla
    productos.forEach((producto, index) => { // recorre el array de productos
        setTimeout(() => { // establece un retraso para la animacion
            let row = tbody.insertRow(); // inserta una nueva fila en la tabla
            row.classList.add('fade-in'); // agrega la clase de animacion a la fila
            row.insertCell(0).innerText = producto.getId; // inserta una celda con el id del producto
            row.insertCell(1).innerText = producto.getNombre; // inserta una celda con el nombre del producto
            row.insertCell(2).innerText = producto.getCategoria.getNombre; // inserta una celda con la categoria del producto
            row.insertCell(3).innerText = `$${producto.getPrecio}`; // inserta una celda con el precio del producto
        }, index * 10); // establece el retraso de la animacion
    });
});
