(function () {
    'use strict'
  
    // Selecciona todos los formularios que tienen la clase 'needs-validation'
    const forms = document.querySelectorAll('.needs-validation')
  
    // Recorre todos los formularios y evita el envío en caso de que sean inválidos
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                const cantidad = document.getElementById('cantidad').value;
                if (!form.checkValidity() || cantidad <= 0) {
                    event.preventDefault()
                    event.stopPropagation()
                    if (cantidad <= 0) {
                        document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.');
                    } else {
                        document.getElementById('cantidad').setCustomValidity('');
                    }
                } else {
                    event.preventDefault(); // Prevenir la recarga de la página
                    ingresarVenta(); // Ejecutar tu función personalizada
                }
  
                form.classList.add('was-validated')
            }, false)
        })
})();

document.getElementById('ingresarVentaButton').addEventListener('click', function() {
    const form = document.querySelector('.needs-validation');
    const cantidad = document.getElementById('cantidad').value;
    if (form.checkValidity() && cantidad > 0) {
        ingresarVenta();
    } else {
        form.classList.add('was-validated');
        if (cantidad <= 0) {
            document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.');
        } else {
            document.getElementById('cantidad').setCustomValidity('');
        }
    }
});
