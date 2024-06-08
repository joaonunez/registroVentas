class Mesero {
    constructor(rut, nombre) { // constructor para crear un objeto mesero con rut y nombre
        this._rut = rut; // inicializa el rut del mesero
        this._nombre = nombre; // inicializa el nombre del mesero
    }

    get getRut() { // getter para obtener el rut del mesero
        return this._rut;
    }
    get getNombre() { // getter para obtener el nombre del mesero
        return this._nombre;
    }

    set setRut(rut) { // setter para establecer el rut del mesero
        this._rut = rut;
    }
    set setNombre(nombre) { // setter para establecer el nombre del mesero
        this._nombre = nombre;
    }
}

let meseros = [ // array de objetos mesero
    new Mesero('18.232.243-5', 'Eduardo Gomez'),
    new Mesero('19.132.254-5', 'Juan Pérez'),
    new Mesero('20.231.567-K', 'Melissa Casio')
];

function actualizarDropdownMeseros() {
    const comboBox3 = document.getElementById('nombreMesero'); // obtiene el elemento select para los meseros
    comboBox3.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>'; // establece la opción por defecto
    meseros.forEach(mesero => { // recorre el array de meseros
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = mesero.getNombre; // establece el texto del option con el nombre del mesero
        optionElement.value = mesero.getRut; // establece el valor del option con el rut del mesero
        comboBox3.appendChild(optionElement); // agrega el option al select
    });

    const comboBoxEditar = document.getElementById('editarMeseroVenta'); // obtiene el elemento select para editar meseros
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>'; // establece la opción por defecto
    meseros.forEach(mesero => { // recorre el array de meseros
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = mesero.getNombre; // establece el texto del option con el nombre del mesero
        optionElement.value = mesero.getRut; // establece el valor del option con el rut del mesero
        comboBoxEditar.appendChild(optionElement); // agrega el option al select
    });
}

function actualizarTablaMeseros() {
    let tbody = document.getElementById('tablaMeseros').getElementsByTagName('tbody')[0]; // obtiene el cuerpo de la tabla de meseros
    tbody.innerHTML = ''; // limpia el contenido de la tabla
    meseros.forEach((mesero, index) => { // recorre el array de meseros
        let row = tbody.insertRow(); // inserta una nueva fila en la tabla
        row.insertCell(0).innerText = mesero.getRut; // inserta una celda con el rut del mesero
        row.insertCell(1).innerText = mesero.getNombre; // inserta una celda con el nombre del mesero
        let editCell = row.insertCell(2); // inserta una celda para el botón de editar
        let editButton = document.createElement('button'); // crea un botón de editar
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>'; // establece el icono del botón
        editButton.className = 'btn btn-primary'; // establece la clase del botón
        editButton.setAttribute('data-bs-toggle', 'modal'); // establece el atributo para mostrar el modal
        editButton.setAttribute('data-bs-target', '#modalEditarMesero'); // establece el target del modal
        editButton.onclick = function () {
            abrirModalEditarMesero(index); // función para abrir el modal de edición
        };
        editCell.appendChild(editButton); // agrega el botón a la celda

        let deleteCell = row.insertCell(3); // inserta una celda para el botón de eliminar
        let deleteButton = document.createElement('button'); // crea un botón de eliminar
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>'; // establece el icono del botón
        deleteButton.className = 'btn btn-danger'; // establece la clase del botón
        deleteButton.onclick = function () {
            eliminarMesero(index); // función para eliminar un mesero
        };
        deleteCell.appendChild(deleteButton); // agrega el botón a la celda
    });
}

function abrirModalEditarMesero(index) {
    let mesero = meseros[index]; // obtiene el mesero por su índice
    document.getElementById('editarRutMesero').value = mesero.getRut; // establece el valor del input de rut
    document.getElementById('editarNombreMesero').value = mesero.getNombre; // establece el valor del input de nombre
    document.getElementById('formEditarMesero').onsubmit = function(event) {
        event.preventDefault(); // previene el envío del formulario
        if (validarFormularioModal('formEditarMesero')) { // valida el formulario
            editarMesero(index); // llama a la función para editar el mesero
            $('#modalEditarMesero').modal('hide'); // cierra el modal
            Swal.fire('Mesero modificado', 'El mesero ha sido modificado correctamente', 'success'); // muestra una alerta de éxito
        }
    };
    $('#modalEditarMesero').modal('show'); // muestra el modal de edición
}

function editarMesero(index) {
    let mesero = meseros[index]; // obtiene el mesero por su índice
    let newRut = document.getElementById('editarRutMesero').value; // obtiene el nuevo rut del input
    let newNombre = document.getElementById('editarNombreMesero').value; // obtiene el nuevo nombre del input
    mesero.setRut = newRut; // establece el nuevo rut al mesero
    mesero.setNombre = newNombre; // establece el nuevo nombre al mesero
    actualizarTablaMeseros(); // actualiza la tabla de meseros
    actualizarDropdownMeseros(); // actualiza el dropdown de meseros
}

function eliminarMesero(index) {
    meseros.splice(index, 1); // elimina el mesero del array por su índice
    actualizarTablaMeseros(); // actualiza la tabla de meseros
    actualizarDropdownMeseros(); // actualiza el dropdown de meseros
    Swal.fire('Mesero eliminado', 'El mesero ha sido eliminado correctamente', 'success'); // muestra una alerta de éxito
}

function validarYAgregarMesero() {
    const form = document.querySelector('.needs-validation-meseros'); // obtiene el formulario de validación de meseros
    if (form.checkValidity()) { // verifica si el formulario es válido
        agregarMesero(); // llama a la función para agregar un mesero
        form.reset(); // resetea el formulario
        form.classList.remove('was-validated'); // remueve la clase de validación
        Swal.fire('Mesero ingresado', 'El mesero ha sido ingresado correctamente', 'success'); // muestra una alerta de éxito
    } else {
        form.classList.add('was-validated'); // agrega la clase de validación si el formulario no es válido
    }
}

function agregarMesero() {
    let rut = document.getElementById('nuevoRutMesero').value; // obtiene el valor del input de rut
    let nombre = document.getElementById('nuevoNombreMesero').value; // obtiene el valor del input de nombre

    meseros.push(new Mesero(rut, nombre)); // agrega un nuevo mesero al array
    actualizarTablaMeseros(); // actualiza la tabla de meseros
    actualizarDropdownMeseros(); // actualiza el dropdown de meseros
}

document.getElementById('agregarMeseroButton').addEventListener('click', validarYAgregarMesero); // agrega un evento de click al botón para validar y agregar mesero

document.addEventListener('DOMContentLoaded', function () { // evento que se ejecuta cuando el DOM se ha cargado completamente
    actualizarTablaMeseros(); // llama a la función para actualizar la tabla de meseros
    actualizarDropdownMeseros(); // llama a la función para actualizar el dropdown de meseros
});
