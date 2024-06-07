function actualizarDropdownProductos() {
    const comboBox1 = document.getElementById('nombreProducto');
    comboBox1.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>';
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBox1.appendChild(optionElement);
    });

    const comboBoxEditar = document.getElementById('editarProductoVenta');
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>';
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBoxEditar.appendChild(optionElement);
    });
}

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

document.addEventListener('DOMContentLoaded', function () {
    actualizarDropdownProductos();
    actualizarDropdownCategorias();
    actualizarDropdownMeseros();
});
