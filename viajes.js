// PARTE 1

let edad = prompt("¿Cuál es tu edad?");
let presupuesto = prompt("¿Cuál es tu presupuesto?");

if (edad < 18) {
    alert("Solo puede viajar con un adulto");
} else if (edad >= 18 && edad < 65) {
    if (presupuesto < 1000) {
        alert("No puede viajar con ese presupuesto");
    } else {
        console.log("Puede viajar");
    }
} else if (edad >= 65) {
    if (presupuesto < 1000) {
        alert("No puede viajar con ese presupuesto");
    } else {
        alert("Tiene un 10% de descuento");
    }
} else {
    alert("Ingrese un valor numérico");
}

// PARTE 2
let destinos = [
    {lugar: "Bariloche", precio: 1200}, 
    {lugar: "Mendoza", precio: 800}, 
    {lugar: "Córdoba", precio: 950}, 
    {lugar: "Ushuaia", precio: 1600}
]

for (let destino of destinos) {
    console.log(destino.lugar)
}

let presupuestoMax = prompt("¿Cuál es su presupuesto máximo?");

destinos.forEach(function(destino) {
    if (destino.precio <= presupuestoMax) {
        console.log("Puede viajar a " + destino.lugar + " por " + destino.precio);
    } else {
        console.log("No puede viajar a " + destino.lugar + " por " + destino.precio);
    }
})
