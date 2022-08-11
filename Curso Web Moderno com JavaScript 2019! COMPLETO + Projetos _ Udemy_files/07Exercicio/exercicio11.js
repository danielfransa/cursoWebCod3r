// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

function receberPrimeiroEUltimoElemento(elemento){
    const primeiroElemento = elemento.shift() // shift pega o primeiro elemento
    const ultimoElemento = elemento.pop()     // poop pega o ultimo elemento

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([7, 10, 20, 32, 45, 50, "ultimo", 1]))

