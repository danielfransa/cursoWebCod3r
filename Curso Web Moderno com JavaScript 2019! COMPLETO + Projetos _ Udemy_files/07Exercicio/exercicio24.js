// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

function contarCaracteres(caracter, frase) {
    let fraseToCaracter = frase.split('')
    let contar = 0

    for (i in fraseToCaracter) {
        if (caracter === fraseToCaracter[i]) {
            contar++
        }
    }
    console.log(contar)
}

contarCaracteres('r', 'A sorte favorece os audases')
contarCaracteres('c', 'Conhece-te a ti mesmo')
contarCaracteres('r', 'O rato roeu a roupa do rei de Roma')