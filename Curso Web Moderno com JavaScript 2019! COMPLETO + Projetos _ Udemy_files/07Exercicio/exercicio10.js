// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

function simboloMais(num){
    let resultato = ''
    for(i=0; i < num; i++){
        resultato += '+'
    }
    return resultato
}

console.log(simboloMais(10))
