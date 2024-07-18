export default class Tienda{
    constructor(){
        this.contArticulos=0;
        this.acuPrecioVenta=0;
        this.contArticuloMayor65=0;
    }

    procesarArticulo(articulo){
        this.contArticulos++
        this.acuPrecioVenta+=articulo.precio
        if( articulo.precio > 65){
            this.contArticuloMayor65++
        }
    }

    promedioPrecioVenta(){
        return this.acuPrecioVenta/this.contArticulos

    }

}