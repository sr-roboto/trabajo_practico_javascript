let nro1 = parseInt(prompt("Ingrese el primer numero"));
let nro2 = parseInt(prompt("Ingrese el segundo numero"));
let nro3 = parseInt(prompt("Ingrese el tercer numero"));
let numeros = [];

numeros.push(nro1)
numeros.push(nro2)
numeros.push(nro3)

function comparar(a, b) { // una funcion que toma dos parametros del array y los compara devolviendo un valor 1 -1 0
    return a - b; // con esto ordenamos los elementos del array en orden ascendente
}

numeros.sort(comparar); //con el metodo sort ordenamos los elementos de un arreglo

document.write(numeros)









