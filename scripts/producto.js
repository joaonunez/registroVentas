// Clase Producto
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
    new Producto(1, 'Café Espresso', new Categoria(1, 'Bebestible'), 1500),
    new Producto(2, 'Capuccino', new Categoria(1, 'Bebestible'), 2000),
    new Producto(3, 'Sandwich Ave', new Categoria(2, 'Comestible'), 3000),
    new Producto(4, 'Té Verde', new Categoria(1, 'Bebestible'), 1200),
    new Producto(5, 'Ensalada de Frutas', new Categoria(2, 'Comestible'), 1800),
    new Producto(6, 'Hamburguesa Clásica', new Categoria(2, 'Comestible'), 2500),
    new Producto(7, 'Ensalada César', new Categoria(2, 'Comestible'), 1800),
    new Producto(8, 'Galletas de Chocolate', new Categoria(2, 'Comestible'), 1500),
    new Producto(9, 'Agua Mineral', new Categoria(1, 'Bebestible'), 1000),
    new Producto(10, 'Pizza Margarita', new Categoria(2, 'Comestible'), 2200),
    new Producto(11, 'Helado de Vainilla', new Categoria(2, 'Comestible'), 2000)
];
