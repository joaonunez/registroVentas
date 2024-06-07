class Producto {
    constructor(id, nombre, categoria, precio) {
        this._id = id;
        this._nombre = nombre;
        this._categoria = categoria;
        this._precio = precio;
    }

    get getId() {
        return this._id;
    }
    get getNombre() {
        return this._nombre;
    }
    get getCategoria() {
        return this._categoria;
    }
    get getPrecio() {
        return this._precio;
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }
    set setCategoria(categoria) {
        this._categoria = categoria;
    }
    set setPrecio(precio) {
        this._precio = precio;
    }
}

let productos = [
    new Producto(1, 'Café Espresso', categorias[0], 1500),
    new Producto(2, 'Capuccino', categorias[0], 2000),
    new Producto(3, 'Sandwich Ave', categorias[1], 3000),
    new Producto(4, 'Té Verde', categorias[0], 1200),
    new Producto(5, 'Ensalada de Frutas', categorias[1], 1800),
    new Producto(6, 'Hamburguesa Clásica', categorias[1], 2500),
    new Producto(7, 'Ensalada César', categorias[1], 1800),
    new Producto(8, 'Galletas de Chocolate', categorias[1], 1500),
    new Producto(9, 'Agua Mineral', categorias[0], 1000),
    new Producto(10, 'Pizza Margarita', categorias[1], 2200),
    new Producto(11, 'Helado de Vainilla', categorias[1], 2000)
];
