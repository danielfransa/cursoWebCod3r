// Criar uma função que receba um array de números e retorne o menor número desse array.

function menorNumero(array){
    let menor = 9999999

    for(i in array){
        if(array[i] < menor){
            menor = array[i]
        }
    }
    
    return console.log(menor)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])
