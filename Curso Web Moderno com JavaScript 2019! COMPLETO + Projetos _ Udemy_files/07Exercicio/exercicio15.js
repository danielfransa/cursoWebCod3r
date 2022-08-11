// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

function receberSomenteParDeIndicePar(array){
    let resultado = []
    for(i=0; i < array.length; i++){
        if(i % 2 == 0){
            if(array[i] % 2 == 0){
                resultado.push(array[i])
            }
        }
    }
    return resultado
}

// resolução proposta com filter...
// function receberSomenteOsParesDeIndicesPares(numeros) {
//     return numeros.filter((numero, indice) => {
//     const numeroPar = numero % 2 === 0
//     const indicePar = indice % 2 === 0

//     return numeroPar && indicePar
//     })
// }



console.log(receberSomenteParDeIndicePar([22, 2, 4, 6, 8, 10, 12, 14, 98, 100, 104]))
console.log(receberSomenteParDeIndicePar([1, 3, 5, 7, 9, 11, 13, 15, 97, 101, 105]))
console.log(receberSomenteParDeIndicePar([0, 1, 2, 3, 4]))