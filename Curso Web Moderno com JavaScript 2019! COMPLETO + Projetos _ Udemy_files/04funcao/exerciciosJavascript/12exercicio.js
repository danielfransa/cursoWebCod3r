//Faça um algoritmo que calcule o fatorial de um número.

let numero = 10
let fatorial = numero

for(i=numero - 1; i>0; i--){
    fatorial = fatorial * i
}

console.log(fatorial)

//solução com função chamando ela mesma até parar

function fatorial2 (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial2(numero - 1)
    }
}

console.log(fatorial2(10))