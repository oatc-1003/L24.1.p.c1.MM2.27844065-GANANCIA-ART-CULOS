export default class Articulo{
    constructor(codigo, costo, precio){
        this.codigo=codigo;
        this.costo=costo;
        this.precio=precio;
    }

    set codigo(c){
        this._codigo=c
    }
    get codigo(){
        return this._codigo
    }
    set costo(c){
        this._costo=c
    }
    get costo(){
        return this._costo
    }
    set precio(p){
        this._precio=p
    }
    get precio(){
        return this._precio
    }

}