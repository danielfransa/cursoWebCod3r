// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function lerVetor(){
    let vetor = [2, 6, 7, 8, 3, 9, 12, 15, 11, 13, 99, 100]
    let par=0
    let impar=0
        for(i=0; i<vetor.length; i++){
            if(vetor[i] % 2 == 0){
                par++
            }else{
                impar++
            }
            
        }
    console.log('Quantidade de números par = ' + par + ' Quantidade de números impar = ' + impar)
}

lerVetor()