// Validación para formulario de ventas
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation-ventas');
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
                    form.classList.add('was-validated');
                } else {
                    validarYIngresarVenta();
                }
            }, false);
        });

    // Limpiar custom validity al cambiar el valor del input
    document.getElementById('cantidad').addEventListener('input', function () {
        if (this.value > 0) {
            this.setCustomValidity('');
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.setCustomValidity('La cantidad debe ser mayor que cero.');
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
})();


// Validación para formulario de productos
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation-productos');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity()) {
                    validarYAgregarProducto();
                }
                form.classList.add('was-validated');
            }, false);
        });
})();

// Validación para formulario de meseros
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation-meseros');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity()) {
                    validarYAgregarMesero();
                }
                form.classList.add('was-validated');
            }, false);
        });
})();

// Validación para formulario de categorías
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation-categorias');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity()) {
                    validarYAgregarCategoria();
                }
                form.classList.add('was-validated');
            }, false);
        });
})();
