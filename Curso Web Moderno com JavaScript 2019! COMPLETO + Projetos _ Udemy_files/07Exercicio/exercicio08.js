// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

function mutiplicar(num1, num2){
    let resultado = 0
    for(i=0; i < num2; i++){
        resultado = resultado + num1 
    }
    return resultado
}

console.log(mutiplicar(7, 8))
console.log(mutiplicar(6, 4))
console.log(mutiplicar(7, 100))
console.log(mutiplicar(7100, 27348))
console.log(mutiplicar(2, 10))