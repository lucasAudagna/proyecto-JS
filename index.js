//Lado del vendedor
class Cubo{
    constructor(nombre, precio, stickers){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stickers = stickers.toUpperCase();
    }
    calcularIva(){
        this.precio = (this.precio * 1.21).toFixed(2);
    }
    descuentoSticker(){
        if(this.stickers == "SIN"){
            return this.precio = (this.precio * 0.85).toFixed(2);
        }else{
            return this.precio
        }
    }
}

const arrCubos = [];

function ingresarProducto(){
    let nombre = prompt("Ingrese nombre del cubo");
    let precio = parseFloat(prompt("Ingrese precio del cubo"));
    let stickers = prompt("¿Con o sin stickers?");
    arrCubos.push(new Cubo(nombre, precio, stickers));
    return arrCubos;
}

for(let i=0; i<3; i++){
    ingresarProducto();
    arrCubos[i].calcularIva();
    arrCubos[i].descuentoSticker();
    if(i==2){
        console.log(arrCubos);
    }
}


//Lado del cliente
function compra(){
    let total = 0;
    let carrito = "";
    do{
        carrito = prompt("Seleccione que cubo quiere comprar: 1, 2 o 3. Si quiere revisar los precios nuevamente, escriba 'R'. Una vez elegido escriba 'fin'.")
        switch(carrito){
            case "1":
                total = total + parseFloat(arrCubos[0].precio);
                break;
            case "2":
                total = total + parseFloat(arrCubos[1].precio);
                break;
            case "3":
                total = total + parseFloat(arrCubos[2].precio);
                break;
            case "R":
                const precios = arrCubos.map(Cubo => Cubo.precio);
                console.log (precios);
                break;
            case "fin":
                alert("A continuación podrá ver el total de su compra.")
                break;
            default:
                alert("No se seleccionó ningun cubo");
                break;
        }
    } while (carrito != "fin");

    console.log("El total de su compra es: $" + total);
}

compra();