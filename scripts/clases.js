class Producto{
    constructor(id,nombre,categoria,precio){
        this._id = id;
        this._nombre = nombre;
        this._categoria = categoria;
        this._precio = precio;
    }

    get getId(){
        return this._id;
    }
    get getNombre(){
        return this._nombre;
    }
    get getCategoria(){
        return this._categoria;
    }
    get getPrecio(){
        return this._precio;
    }
}


class Venta{
    constructor(id,mesero,producto,cantidad,fecha){
        this._id = id;
        this._mesero = mesero;
        this._producto = producto;
        this._cantidad = cantidad;
        this._fecha = fecha;

    }
    
    get getId(){
        return this._id;
    }
    get getMesero(){
        return this._mesero;
    }
    get getProducto(){
        return this._producto;
    }
    get getCantidad(){
        return this._cantidad;
    }
    get getFecha(){
        return this._fecha;
    }
}

class Mesero{
    constructor(rut,nombre){
        this._rut = rut;
        this._nombre = nombre;
    }
    get getRut(){
        return this._rut;
    }
    get getNombre(){
        return this._nombre;
    }
}







