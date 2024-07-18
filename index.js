// 6. GANANCIA ARTÍCULOS
// Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
// desea hacer un procesamiento que determine el promedio de los precios de venta y cantidad de
// artículos con precio superior a 65$
// El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
// precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
// 333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
// Promedio de los precios de venta: 41.25
// Cantidad de artículos con precio superior a 65$:2 

import Articulo from "./classes/articulo.js";
import Tienda from "./classes/tienda.js";

let _articulo1=new Articulo(888,10,15)
let _articulo2=new Articulo(777,20,25)
let _articulo3=new Articulo(999,15,25)
let _articulo4=new Articulo(666,25,35)
let _articulo5=new Articulo(111,50,70)
let _articulo6=new Articulo(333,40,50)
let _articulo7=new Articulo(444,80,100)
let _articulo8=new Articulo(222,5,10)

let _tienda=new Tienda();

_tienda.procesarArticulo(_articulo1)
_tienda.procesarArticulo(_articulo2)
_tienda.procesarArticulo(_articulo3)
_tienda.procesarArticulo(_articulo4)
_tienda.procesarArticulo(_articulo5)
_tienda.procesarArticulo(_articulo6)
_tienda.procesarArticulo(_articulo7)
_tienda.procesarArticulo(_articulo8)

document.body.innerHTML+=`
<br>
Promedio de los precios de venta: ${_tienda.promedioPrecioVenta()}
<br>
Cantidad de artículos con precio superior a 65$:${_tienda.contArticuloMayor65}
`