// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.

function calcularMedia(array){
    const quantidade = array.length
    const soma = array.reduce((numA, numB) => numA + numB)

    return soma / quantidade
}

console.log((calcularMedia([0, 10])))
console.log((calcularMedia([1, 2, 3, 4, 5])))
console.log((calcularMedia([23, 4, 32, 12, 34, 54, 76, 8, 78, 90])))
console.log((calcularMedia([01, 02, 04, 04, 05])))