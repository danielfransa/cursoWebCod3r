// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 

function compararNumeros(num1, num2){
    if(num1 > num2 || num1 === num2){
        return true
    }else 
        return false
}

console.log(compararNumeros(0, 0))
console.log(compararNumeros(0, "0"))
console.log(compararNumeros(5, 7))