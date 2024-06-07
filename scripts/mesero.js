class Mesero {
    constructor(rut, nombre) {
        this._rut = rut;
        this._nombre = nombre;
    }

    get getRut() {
        return this._rut;
    }
    get getNombre() {
        return this._nombre;
    }

    set setRut(rut) {
        this._rut = rut;
    }
    set setNombre(nombre) {
        this._nombre = nombre;
    }
}

let meseros = [
    new Mesero('18.232.243-5', 'Eduardo Gomez'),
    new Mesero('19.132.254-5', 'Juan Pérez'),
    new Mesero('20.231.567-K', 'Melissa Casio')
];
