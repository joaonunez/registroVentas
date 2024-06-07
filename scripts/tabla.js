function mostrarProductos() {
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

function editarMesero(index) {
    let mesero = meseros[index];
    let newRut = document.getElementById('editarRutMesero').value;
    let newNombre = document.getElementById('editarNombreMesero').value;
    mesero.setRut = newRut;
    mesero.setNombre = newNombre;
    actualizarTablaMeseros();
    actualizarDropdownMeseros();
}

function eliminarMesero(index) {
    meseros.splice(index, 1);
    actualizarTablaMeseros();
    actualizarDropdownMeseros();
    Swal.fire('Mesero eliminado', 'El mesero ha sido eliminado correctamente', 'success');
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

function editarCategoria(index) {
    let categoria = categorias[index];
    let newNombre = document.getElementById('editarNombreCategoria').value;
    categoria.setNombre = newNombre;
    actualizarTablaCategorias();
    actualizarDropdownCategorias();
}

function eliminarCategoria(index) {
    categorias.splice(index, 1);
    actualizarTablaCategorias();
    actualizarDropdownCategorias();
    Swal.fire('Categoría eliminada', 'La categoría ha sido eliminada correctamente', 'success');
}

document.getElementById('verProductos').addEventListener('shown.bs.modal', mostrarProductos);
