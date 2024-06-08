class Categoria {
    constructor(id, nombre) {
        this._id = id; // asigna el id pasado al constructor a la propiedad _id
        this._nombre = nombre; // asigna el nombre pasado al constructor a la propiedad _nombre
    }

    get getId() {
        return this._id; // devuelve el id de la categoria
    }
    get getNombre() {
        return this._nombre; // devuelve el nombre de la categoria
    }

    set setNombre(nombre) {
        this._nombre = nombre; // establece el nuevo nombre para la categoria
    }
}

let categorias = [
    new Categoria(1, 'Bebestible'), // crea una nueva categoria con id 1 y nombre 'Bebestible'
    new Categoria(2, 'Comestible') // crea una nueva categoria con id 2 y nombre 'Comestible'
];

function actualizarDropdownCategorias() {
    const comboBox2 = document.getElementById('nuevaCategoriaProducto'); // obtiene el elemento select para nuevas categorias
    const comboBoxEditar = document.getElementById('editarCategoriaProducto'); // obtiene el elemento select para editar categorias
    comboBox2.innerHTML = '<option value="" selected disabled>Selecciona una categoría</option>'; // establece la opcion por defecto para nuevas categorias
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona una categoría</option>'; // establece la opcion por defecto para editar categorias
    categorias.forEach(categoria => {
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        const optionElementEditar = document.createElement('option'); // crea otro nuevo elemento option
        optionElement.textContent = categoria.getNombre; // establece el texto del option con el nombre de la categoria
        optionElement.value = categoria.getId; // establece el valor del option con el id de la categoria
        optionElementEditar.textContent = categoria.getNombre; // establece el texto del option con el nombre de la categoria
        optionElementEditar.value = categoria.getId; // establece el valor del option con el id de la categoria
        comboBox2.appendChild(optionElement); // agrega el option al select de nuevas categorias
        comboBoxEditar.appendChild(optionElementEditar); // agrega el option al select de editar categorias
    });
}

function actualizarTablaCategorias() {
    let tbody = document.getElementById('tablaCategorias').getElementsByTagName('tbody')[0]; // obtiene el cuerpo de la tabla de categorias
    tbody.innerHTML = ''; // limpia el cuerpo de la tabla
    categorias.forEach((categoria, index) => {
        let row = tbody.insertRow(); // inserta una nueva fila en la tabla
        row.insertCell(0).innerText = categoria.getId; // inserta una celda con el id de la categoria
        row.insertCell(1).innerText = categoria.getNombre; // inserta una celda con el nombre de la categoria
        let editCell = row.insertCell(2); // inserta una celda para el boton de editar
        let editButton = document.createElement('button'); // crea un boton de editar
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>'; // agrega un icono al boton
        editButton.className = 'btn btn-primary'; // agrega clases de estilo al boton
        editButton.setAttribute('data-bs-toggle', 'modal'); // establece el atributo data-bs-toggle para abrir el modal
        editButton.setAttribute('data-bs-target', '#modalEditarCategoria'); // establece el atributo data-bs-target con el id del modal
        editButton.onclick = function () {
            abrirModalEditarCategoria(index); // asigna la funcion abrirModalEditarCategoria al evento onclick
        };
        editCell.appendChild(editButton); // agrega el boton de editar a la celda

        let deleteCell = row.insertCell(3); // inserta una celda para el boton de eliminar
        let deleteButton = document.createElement('button'); // crea un boton de eliminar
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>'; // agrega un icono al boton
        deleteButton.className = 'btn btn-danger'; // agrega clases de estilo al boton
        deleteButton.onclick = function () {
            eliminarCategoria(index); // asigna la funcion eliminarCategoria al evento onclick
        };
        deleteCell.appendChild(deleteButton); // agrega el boton de eliminar a la celda
    });
}

function abrirModalEditarCategoria(index) {
    let categoria = categorias[index]; // obtiene la categoria a editar
    document.getElementById('editarNombreCategoria').value = categoria.getNombre; // establece el valor del input con el nombre de la categoria
    document.getElementById('formEditarCategoria').onsubmit = function(event) {
        event.preventDefault(); // previene el envio del formulario
        if (validarFormularioModal('formEditarCategoria')) { // verifica si el formulario es valido
            editarCategoria(index); // llama a la funcion editarCategoria
            $('#modalEditarCategoria').modal('hide'); // cierra el modal
            Swal.fire('Categoría modificada', 'La categoría ha sido modificada correctamente', 'success'); // muestra un mensaje de exito
        }
    };
    $('#modalEditarCategoria').modal('show'); // muestra el modal
}

function editarCategoria(index) {
    let categoria = categorias[index]; // obtiene la categoria a editar
    let newNombre = document.getElementById('editarNombreCategoria').value; // obtiene el nuevo nombre del input
    categoria.setNombre = newNombre; // establece el nuevo nombre en la categoria
    actualizarTablaCategorias(); // actualiza la tabla de categorias
    actualizarDropdownCategorias(); // actualiza el dropdown de categorias
}

function eliminarCategoria(index) {
    categorias.splice(index, 1); // elimina la categoria del array
    actualizarTablaCategorias(); // actualiza la tabla de categorias
    actualizarDropdownCategorias(); // actualiza el dropdown de categorias
    Swal.fire('Categoría eliminada', 'La categoría ha sido eliminada correctamente', 'success'); // muestra un mensaje de exito
}

function validarYAgregarCategoria() {
    const form = document.querySelector('.needs-validation-categorias'); // obtiene el formulario de categorias
    if (form.checkValidity()) { // verifica si el formulario es valido
        agregarCategoria(); // llama a la funcion agregarCategoria
        form.reset(); // resetea el formulario
        form.classList.remove('was-validated'); // remueve la clase de validacion
        Swal.fire('Categoría ingresada', 'La categoría ha sido ingresada correctamente', 'success'); // muestra un mensaje de exito
    } else {
        form.classList.add('was-validated'); // agrega la clase de validacion
    }
}

function agregarCategoria() {
    let nombre = document.getElementById('nuevoNombreCategoria').value; // obtiene el nombre del input
    let id = categorias.length ? categorias[categorias.length - 1].getId + 1 : 1; // calcula el nuevo id

    categorias.push(new Categoria(id, nombre)); // agrega la nueva categoria al array
    actualizarTablaCategorias(); // actualiza la tabla de categorias
    actualizarDropdownCategorias(); // actualiza el dropdown de categorias
}
