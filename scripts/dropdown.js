function actualizarDropdownProductos() {
    const comboBox1 = document.getElementById('nombreProducto'); // obtiene el elemento select para productos
    comboBox1.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>'; // establece la opcion por defecto
    productos.forEach(producto => {
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`; // establece el texto del option con el nombre y precio del producto
        optionElement.value = producto.getId; // establece el valor del option con el id del producto
        comboBox1.appendChild(optionElement); // agrega el option al select
    });

    const comboBoxEditar = document.getElementById('editarProductoVenta'); // obtiene el elemento select para editar productos
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>'; // establece la opcion por defecto
    productos.forEach(producto => {
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`; // establece el texto del option con el nombre y precio del producto
        optionElement.value = producto.getId; // establece el valor del option con el id del producto
        comboBoxEditar.appendChild(optionElement); // agrega el option al select
    });
}

function actualizarDropdownCategorias() {
    const comboBox2 = document.getElementById('nuevaCategoriaProducto'); // obtiene el elemento select para nuevas categorias
    const comboBoxEditar = document.getElementById('editarCategoriaProducto'); // obtiene el elemento select para editar categorias
    comboBox2.innerHTML = '<option value="" selected disabled>Selecciona una categoría</option>'; // establece la opcion por defecto
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona una categoría</option>'; // establece la opcion por defecto
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

function actualizarDropdownMeseros() {
    const comboBox3 = document.getElementById('nombreMesero'); // obtiene el elemento select para meseros
    comboBox3.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>'; // establece la opcion por defecto
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = mesero.getNombre; // establece el texto del option con el nombre del mesero
        optionElement.value = mesero.getRut; // establece el valor del option con el rut del mesero
        comboBox3.appendChild(optionElement); // agrega el option al select
    });

    const comboBoxEditar = document.getElementById('editarMeseroVenta'); // obtiene el elemento select para editar meseros
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>'; // establece la opcion por defecto
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option'); // crea un nuevo elemento option
        optionElement.textContent = mesero.getNombre; // establece el texto del option con el nombre del mesero
        optionElement.value = mesero.getRut; // establece el valor del option con el rut del mesero
        comboBoxEditar.appendChild(optionElement); // agrega el option al select
    });
}

document.addEventListener('DOMContentLoaded', function () {
    actualizarDropdownProductos(); // llama a la funcion para actualizar el dropdown de productos
    actualizarDropdownCategorias(); // llama a la funcion para actualizar el dropdown de categorias
    actualizarDropdownMeseros(); // llama a la funcion para actualizar el dropdown de meseros
});
