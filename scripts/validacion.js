(function () {
    'use strict';

    // Validación para formularios de ventas
    const formsVentas = document.querySelectorAll('.needs-validation-ventas');
    Array.prototype.slice.call(formsVentas)
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
                    Swal.fire('Venta agregada satisfactoriamente', '', 'success');
                    form.classList.add('was-validated');
                }
            }, false);
        });

    // Validación específica para el campo "cantidad" en ventas
    const cantidadInput = document.getElementById('cantidad');
    if (cantidadInput) {
        cantidadInput.addEventListener('input', function () {
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
    }

    // Validación para formularios de productos
    const formsProductos = document.querySelectorAll('.needs-validation-productos');
    Array.prototype.slice.call(formsProductos)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!form.checkValidity()) {
                    form.classList.add('was-validated');
                } else {
                    Swal.fire('Producto agregado satisfactoriamente', '', 'success');
                    form.classList.add('was-validated');
                }
            }, false);
        });

    // Validación para formularios de meseros
    const formsMeseros = document.querySelectorAll('.needs-validation-meseros');
    Array.prototype.slice.call(formsMeseros)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!form.checkValidity()) {
                    form.classList.add('was-validated');
                } else {
                    Swal.fire('Mesero agregado satisfactoriamente', '', 'success');
                    form.classList.add('was-validated');
                }
            }, false);
        });

    // Validación para formularios de categorías
    const formsCategorias = document.querySelectorAll('.needs-validation-categorias');
    Array.prototype.slice.call(formsCategorias)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!form.checkValidity()) {
                    form.classList.add('was-validated');
                } else {
                    Swal.fire('Categoría agregada satisfactoriamente', '', 'success');
                    form.classList.add('was-validated');
                }
            }, false);
        });

    // Validación para formularios de edición en modales
    const formsEdicion = document.querySelectorAll('.needs-validation-edicion');
    Array.prototype.slice.call(formsEdicion)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!form.checkValidity()) {
                    form.classList.add('was-validated');
                } else {
                    const modalId = form.closest('.modal').id;
                    let message = 'Cambios guardados satisfactoriamente';
                    if (modalId === 'modalEditarProducto') {
                        message = 'Producto modificado satisfactoriamente';
                    } else if (modalId === 'modalEditarMesero') {
                        message = 'Mesero modificado satisfactoriamente';
                    } else if (modalId === 'modalEditarCategoria') {
                        message = 'Categoría modificada satisfactoriamente';
                    } else if (modalId === 'modalEditarVenta') {
                        message = 'Venta modificada satisfactoriamente';
                    }
                    Swal.fire(message, '', 'success');
                    form.classList.add('was-validated');
                }
            }, false);
        });

    // Limpiar validación al cerrar modales
    const modals = document.querySelectorAll('.modal');
    Array.prototype.slice.call(modals).forEach(function (modal) {
        modal.addEventListener('hidden.bs.modal', function () {
            const form = modal.querySelector('.needs-validation');
            if (form) {
                form.reset();
                form.classList.remove('was-validated');
                const inputs = form.querySelectorAll('input, select');
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                    input.setCustomValidity('');
                });
            }
        });
    });

})();
