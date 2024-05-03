let numero = parseInt(prompt("Ingrese un numero"))
let resto = (numero % 2);

if (resto !== 0 && resto > 0) {
    document.write(`el numero ${numero} es impar`)
} else if (resto == 0) {
    document.write(`el numero ${numero} es par`)
} else {
    document.write(`Ingrese un valor valido`)
}