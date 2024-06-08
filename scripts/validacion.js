(function () {
    'use strict';

    // Validación para formularios de ventas
    const formsVentas = document.querySelectorAll('.needs-validation-ventas'); // selecciona todos los formularios de ventas
    Array.prototype.slice.call(formsVentas)
        .forEach(function (form) { // itera sobre cada formulario de ventas
            form.addEventListener('submit', function (event) { // agrega evento de submit a cada formulario
                event.preventDefault(); // previene el comportamiento por defecto del formulario
                event.stopPropagation(); // detiene la propagación del evento
                const cantidad = document.getElementById('cantidad').value; // obtiene el valor del input cantidad
                if (!form.checkValidity() || cantidad <= 0) { // si el formulario no es válido o la cantidad es menor o igual a 0
                    if (cantidad <= 0) { // si la cantidad es menor o igual a 0
                        document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.'); // establece un mensaje de error
                    } else {
                        document.getElementById('cantidad').setCustomValidity(''); // resetea el mensaje de error
                    }
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                } else {
                    Swal.fire('Venta agregada satisfactoriamente', '', 'success'); // muestra un mensaje de éxito
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                }
            }, false);
        });

    // Validación específica para el campo "cantidad" en ventas
    const cantidadInput = document.getElementById('cantidad'); // selecciona el input cantidad
    if (cantidadInput) {
        cantidadInput.addEventListener('input', function () { // agrega evento input al campo cantidad
            if (this.value > 0) { // si el valor es mayor a 0
                this.setCustomValidity(''); // resetea el mensaje de error
                this.classList.remove('is-invalid'); // remueve la clase is-invalid
                this.classList.add('is-valid'); // agrega la clase is-valid
            } else {
                this.setCustomValidity('La cantidad debe ser mayor que cero.'); // establece un mensaje de error
                this.classList.remove('is-valid'); // remueve la clase is-valid
                this.classList.add('is-invalid'); // agrega la clase is-invalid
            }
        });
    }

    // Validación para formularios de productos
    const formsProductos = document.querySelectorAll('.needs-validation-productos'); // selecciona todos los formularios de productos
    Array.prototype.slice.call(formsProductos)
        .forEach(function (form) { // itera sobre cada formulario de productos
            form.addEventListener('submit', function (event) { // agrega evento de submit a cada formulario
                event.preventDefault(); // previene el comportamiento por defecto del formulario
                event.stopPropagation(); // detiene la propagación del evento
                if (!form.checkValidity()) { // si el formulario no es válido
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                } else {
                    Swal.fire('Producto agregado satisfactoriamente', '', 'success'); // muestra un mensaje de éxito
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                }
            }, false);
        });

    // Validación para formularios de meseros
    const formsMeseros = document.querySelectorAll('.needs-validation-meseros'); // selecciona todos los formularios de meseros
    Array.prototype.slice.call(formsMeseros)
        .forEach(function (form) { // itera sobre cada formulario de meseros
            form.addEventListener('submit', function (event) { // agrega evento de submit a cada formulario
                event.preventDefault(); // previene el comportamiento por defecto del formulario
                event.stopPropagation(); // detiene la propagación del evento
                if (!form.checkValidity()) { // si el formulario no es válido
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                } else {
                    Swal.fire('Mesero agregado satisfactoriamente', '', 'success'); // muestra un mensaje de éxito
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                }
            }, false);
        });

    // Validación para formularios de categorías
    const formsCategorias = document.querySelectorAll('.needs-validation-categorias'); // selecciona todos los formularios de categorías
    Array.prototype.slice.call(formsCategorias)
        .forEach(function (form) { // itera sobre cada formulario de categorías
            form.addEventListener('submit', function (event) { // agrega evento de submit a cada formulario
                event.preventDefault(); // previene el comportamiento por defecto del formulario
                event.stopPropagation(); // detiene la propagación del evento
                if (!form.checkValidity()) { // si el formulario no es válido
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                } else {
                    Swal.fire('Categoría agregada satisfactoriamente', '', 'success'); // muestra un mensaje de éxito
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                }
            }, false);
        });

    // Validación para formularios de edición en modales
    const formsEdicion = document.querySelectorAll('.needs-validation-edicion'); // selecciona todos los formularios de edición
    Array.prototype.slice.call(formsEdicion)
        .forEach(function (form) { // itera sobre cada formulario de edición
            form.addEventListener('submit', function (event) { // agrega evento de submit a cada formulario
                event.preventDefault(); // previene el comportamiento por defecto del formulario
                event.stopPropagation(); // detiene la propagación del evento
                if (!form.checkValidity()) { // si el formulario no es válido
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                } else {
                    const modalId = form.closest('.modal').id; // obtiene el id del modal más cercano
                    let message = 'Cambios guardados satisfactoriamente'; // mensaje por defecto
                    if (modalId === 'modalEditarProducto') { // si es el modal de edición de producto
                        message = 'Producto modificado satisfactoriamente'; // cambia el mensaje
                    } else if (modalId === 'modalEditarMesero') { // si es el modal de edición de mesero
                        message = 'Mesero modificado satisfactoriamente'; // cambia el mensaje
                    } else if (modalId === 'modalEditarCategoria') { // si es el modal de edición de categoría
                        message = 'Categoría modificada satisfactoriamente'; // cambia el mensaje
                    } else if (modalId === 'modalEditarVenta') { // si es el modal de edición de venta
                        message = 'Venta modificada satisfactoriamente'; // cambia el mensaje
                    }
                    Swal.fire(message, '', 'success'); // muestra un mensaje de éxito
                    form.classList.add('was-validated'); // agrega la clase was-validated al formulario
                }
            }, false);
        });

    // Limpiar validación al cerrar modales
    const modals = document.querySelectorAll('.modal'); // selecciona todos los modales
    Array.prototype.slice.call(modals).forEach(function (modal) { // itera sobre cada modal
        modal.addEventListener('hidden.bs.modal', function () { // agrega evento al cerrar el modal
            const form = modal.querySelector('.needs-validation'); // selecciona el formulario dentro del modal
            if (form) { // si existe un formulario
                form.reset(); // resetea el formulario
                form.classList.remove('was-validated'); // remueve la clase was-validated
                const inputs = form.querySelectorAll('input, select'); // selecciona todos los inputs y selects
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid'); // remueve las clases de validación
                    input.setCustomValidity(''); // resetea la validación
                });
            }
        });
    });

})();
