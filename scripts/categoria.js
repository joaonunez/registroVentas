// Clase Categoria
class Categoria {
    constructor(id, nombre) {
        this._id = id;
        this._nombre = nombre;
    }

    get getId() {
        return this._id;
    }
    get getNombre() {
        return this._nombre;
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }
}

let categorias = [
    new Categoria(1, 'Bebestible'),
    new Categoria(2, 'Comestible')
];
