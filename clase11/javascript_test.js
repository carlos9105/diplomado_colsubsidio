let elemento1 = {
    "valor": 25,
    "nombre": "Tierra",
}

let elemento2 = {
    "valor": 10,
    "nombre": "Agua",
}

console.log(elemento1.valor + elemento2.valor)
console.log(elemento1.nombre + " " + elemento2.nombre)
console.log(elemento1.nombre + elemento2.valor)
console.log(elemento1.valor + elemento2.nombre)


const elemento3 = "abcd"

for (const letter in elemento3) {
    console.log(elemento3[2])
}