let fondo, compra, saldo, fruta, frutaUno, frutaDos, verdura, verduraDos, carne, carneUno, carneDos, frutaTotal, frutaUnoTotal, frutaDosTotal, verduraTotal, verduraUnoTotal, verduraDosTotal, carneTotal, carneUnoTotal, carneDosTotal


while (true) {
    // pido el monto a gastar
    fondo = Number(prompt("Hola!cuanto dinero queres gastar en tu compra?"))
    // si se ingresa un "no numero"
    while (isNaN(fondo)) {
        alert("Ingresa un numero valido por favor")
        fondo = Number(prompt("Hola!cuanto dinero queres gastar en tu compra?"))
    
    }
    // opcion fondos insuficientes
    if (fondo < 2000) {
        alert("Siendo sincero, necesitas más dinero")

    }
    // primer lista de acuerdo a los fondos
    else if (fondo >= 2000 && fondo <= 5000) {

        compra = Number(prompt("Pone 1 si queres comprar frutas, 2 si queres comprar verduras, 3 si queres comprar carne"))
        if (compra == 1) {
            fruta = Number(prompt("podes comprar manzanas, cuantas queres? Ingresa el numero"))
            frutaUno = Number(prompt("podes comprar duraznos, cuantas queres? Ingresa el numero"))
            frutaDos = Number(prompt("podes comprar melon, cuantas queres? Ingresa el numero"))
            
        }
        else if (compra == 2) {
            verdura = Number(prompt("podes comprar  zanahorias, cuantas queres? Ingresa el numero"))
            verduraUno = Number(prompt("podes comprar remolachas, cuantas queres? Ingresa el numero"))
            verduraDos = Number(prompt("podes comprar  repollos, cuantas queres? Ingresa el numero"))
        }
        else if (compra == 3) {
            carne = Number(prompt("podes comprar bifes de chorizos, cuantos queres? Ingresa el numero"))
            carneUno = Number(prompt("podes comprar  costilla, cuantas queres? Ingresa el numero"))
            carneDos = Number(prompt("podes comprar  pollo, cuantas queres? Ingresa el numero"))
        } else {
            alert("el numero que ingresaste es incorrecto, por favor ingresa el correcto!")
        }
    }
    //segunda lista para fondos superiores
    else if (fondo > 5000 && fondo <= 20000) {
        compra = Number(prompt("Pone 1 si queres comprar frutas, 2 si queres comprar verduras, 3 si queres comprar carne"))
        if (compra == 1) {
            fruta = Number(prompt("podes comprar bolsas de manzanas, cuantas queres? Ingresa el numero"))
            frutaUno = Number(prompt("podes comprar bolsas de anana, cuantas queres? Ingresa el numero"))
            frutaDos = Number(prompt("podes comprar durazno en almibar, cuantas queres? Ingresa el numero"))

        }
        else if (compra == 2) {
            verdura = Number(prompt("podes comprar tomates cherrys, cuantas queres? Ingresa el numero"))
            verduraUno = Number(prompt("podes comprar bolsones de papa, cuantas queres? Ingresa el numero"))
            verduraDos = Number(prompt("podes comprar cebolla picada, cuantas queres? Ingresa el numero"))
        }
        else if (compra == 3) {
            carne = Number(prompt("podes comprar hasta  salmon, cuantos queres? Ingresa el numero"))
            carneUno = Number(prompt("podes comprar hasta  vacio de ternera, cuantas queres? Ingresa el numero"))
            carneDos = Number(prompt("podes comprar hasta  parrillada hecha, cuantos queres? Ingresa el numero"))
        }
    } else {
        alert("Disculpame, no tenemos productos por un monto tan alto! gracias")
    }

    let salir = confirm("Deseas salir de la compra?")
    if (salir == true) {
        break
    }
}
