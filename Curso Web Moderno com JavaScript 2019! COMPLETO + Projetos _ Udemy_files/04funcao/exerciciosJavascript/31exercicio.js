// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function lerVetor(){
    let vetor = [2, 6, 7, 8, 3, 999, -12, 15, 11, -13, 99, 100, 10, 20, 1]
    let contador=0
    
        for(i=0; i<vetor.length; i++){
            if(vetor[i] < 0){
                contador++
            }
            
        }
    console.log('Temos ' + contador + ' números negativos no vetor')
}

lerVetor()