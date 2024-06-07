class Categoria {
    constructor(id, nombre) {
        this._id = id;
        this._nombre = nombre;
    }

    get getId() {
        return this._id;
    }
    get getNombre() {
        return this._nombre;
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }
}

let categorias = [
    new Categoria(1, 'Bebestible'),
    new Categoria(2, 'Comestible')
];

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
        if (validarFormularioModal('formEditarCategoria')) {
            editarCategoria(index);
            $('#modalEditarCategoria').modal('hide');
            Swal.fire('Categoría modificada', 'La categoría ha sido modificada correctamente', 'success');
        }
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

function validarYAgregarCategoria() {
    const form = document.querySelector('.needs-validation-categorias');
    if (form.checkValidity()) {
        agregarCategoria();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Categoría ingresada', 'La categoría ha sido ingresada correctamente', 'success');
    } else {
        form.classList.add('was-validated');
    }
}

function agregarCategoria() {
    let nombre = document.getElementById('nuevoNombreCategoria').value;
    let id = categorias.length ? categorias[categorias.length - 1].getId + 1 : 1;

    categorias.push(new Categoria(id, nombre));
    actualizarTablaCategorias();
    actualizarDropdownCategorias();
}

