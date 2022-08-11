// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

function filtraNumero(array){
    let resultado = []
    for(let elemento of array){
        if(typeof elemento === "number"){
            resultado.push(elemento)
        }
    }
    return resultado
}

console.log(filtraNumero(['dasd', 1, "ddasd", 3]))