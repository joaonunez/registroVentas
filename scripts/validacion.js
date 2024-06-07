(function () {
    'use strict';
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
