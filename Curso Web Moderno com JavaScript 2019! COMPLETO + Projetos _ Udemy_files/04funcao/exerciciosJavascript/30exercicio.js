// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

function lerVetor(){
    let vetor = [2, 6, 7, 8, 3, 999, -12, 15, 11, 13, 99, 100, 10, 20, 1]
    let maior=-999999
    let menor=99999
        for(i=0; i<vetor.length; i++){
            if(vetor[i] > maior){
                maior = vetor[i]
            }else if(vetor[i] < menor){
                menor = vetor[i]
            }
            
        }
    console.log('Maior número = ' + maior + ' Menor número = ' + menor)
}

lerVetor()