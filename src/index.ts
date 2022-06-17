let precio: number = 450
let cantidad: number = 3
let compra: number = (cantidad * precio)
let descuento: number = compra - (compra * 0.1) 

if (compra >= 1000) {
  console.log ("El total tiene descuento y es de:" + descuento)
} else {
  console.log ("El total es de:" + compra)
}


