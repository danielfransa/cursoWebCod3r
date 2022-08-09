let a = 7;
let b = 94;
let c

console.log("Primeiro valor de A = " + a)
console.log("Primeiro valor de B = " + b)

c = a
a = b
b = c

// [a, b] = [b, a] Não funcionou

console.log("Trocando os Valores...")
console.log("Segundo valor de A = " + a)
console.log("Segundo valor de B = " + b)