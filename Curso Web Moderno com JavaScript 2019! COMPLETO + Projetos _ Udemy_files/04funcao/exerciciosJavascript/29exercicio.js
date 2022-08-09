// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações

function lerVetor(){
    let vetor = [2, 6, 7, 8, 3, 9, 12, 15, 11, 13, 99, 100, 10, 20, 1]
    let dentroIntervalo=0
    let foraIntervalo=0
        for(i=0; i<vetor.length; i++){
            if(vetor[i] >= 10 && vetor[i] <= 20){
                dentroIntervalo++
            }else{
                foraIntervalo++
            }
            
        }
    console.log('Quantidade de números no intervalo = ' + dentroIntervalo + ' Quantidade de números fora do intervalo = ' + foraIntervalo)
}

lerVetor()