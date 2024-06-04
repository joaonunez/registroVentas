let ventaIdCounter = 1; // inicializamos el contador del id de la venta en 1

let ingresarVenta = function(){
    let productoId = document.getElementById('nombreProducto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let meseroRut = document.getElementById('nombreMesero').value;
    let fecha = document.getElementById('fecha').value;
    let productoSeleccionado = productos.find(producto => producto.getId == productoId);
    let meseroSeleccionado = meseros.find(mesero => mesero.getRut == meseroRut);
  
    // Verificar que el mesero y el producto existan
    if (productoSeleccionado && meseroSeleccionado) {
        // Crear una nueva venta
        let venta = new Venta(
            ventaIdCounter, 
            meseroSeleccionado, 
            productoSeleccionado, 
            cantidad,
            fecha
        );

        // Agregar la venta a la lista de ventas
        ventas.push(venta);

        // Incrementar el contador para la siguiente venta
        ventaIdCounter++;

        console.log('Nueva venta creada', venta);
        mostrarVentas();
    } else {
        console.error('Error: Mesero o producto no encontrado');
    }
    
}

