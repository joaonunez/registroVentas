class Mesero {
    constructor(rut, nombre) {
        this._rut = rut;
        this._nombre = nombre;
    }

    get getRut() {
        return this._rut;
    }
    get getNombre() {
        return this._nombre;
    }

    set setRut(rut) {
        this._rut = rut;
    }
    set setNombre(nombre) {
        this._nombre = nombre;
    }
}

let meseros = [
    new Mesero('18.232.243-5', 'Eduardo Gomez'),
    new Mesero('19.132.254-5', 'Juan Pérez'),
    new Mesero('20.231.567-K', 'Melissa Casio')
];

function actualizarDropdownMeseros() {
    const comboBox3 = document.getElementById('nombreMesero');
    comboBox3.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>';
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option');
        optionElement.textContent = mesero.getNombre;
        optionElement.value = mesero.getRut;
        comboBox3.appendChild(optionElement);
    });

    const comboBoxEditar = document.getElementById('editarMeseroVenta');
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>';
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option');
        optionElement.textContent = mesero.getNombre;
        optionElement.value = mesero.getRut;
        comboBoxEditar.appendChild(optionElement);
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

function validarYAgregarMesero() {
    const form = document.querySelector('.needs-validation-meseros');
    if (form.checkValidity()) {
        agregarMesero();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Mesero ingresado', 'El mesero ha sido ingresado correctamente', 'success');
    } else {
        form.classList.add('was-validated');
    }
}

function agregarMesero() {
    let rut = document.getElementById('nuevoRutMesero').value;
    let nombre = document.getElementById('nuevoNombreMesero').value;

    meseros.push(new Mesero(rut, nombre));
    actualizarTablaMeseros();
    actualizarDropdownMeseros();
}


document.getElementById('agregarMeseroButton').addEventListener('click', validarYAgregarMesero);

document.addEventListener('DOMContentLoaded', function () {
    actualizarTablaMeseros();
    actualizarDropdownMeseros();
});
