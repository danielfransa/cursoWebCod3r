// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function lerVetor(){
    let vetor = [200, 29, 45, 21]
    let soma=0
    
        for(i=0; i<vetor.length; i++){
            soma = soma + vetor[i]
        }
    
    media = soma / vetor.length    
    
    console.log('A média dos vetores é: ' + media)
}

lerVetor()