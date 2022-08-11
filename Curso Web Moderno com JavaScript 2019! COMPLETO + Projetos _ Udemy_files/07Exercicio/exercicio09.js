// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(num1, repetir){
    let array = []
    for(i=0; i < repetir; i++){
        array[i] = num1
    }

    return array

}

console.log(repetir(3, 5))
console.log(repetir(2, 3))
console.log(repetir(6, 20))
console.log(repetir(1, 7))
console.log(repetir(3, 5))


// implementado pela resolução do exercicio, muito bom metodo fill
// function repetir2(item, quantidade){
//     return Array(quantidade).fill(item)
// }

// console.log(repetir2(3, 5))
// console.log(repetir2(2, 3))
// console.log(repetir2(6, 20))
// console.log(repetir2(1, 7))
// console.log(repetir2(3, 5))