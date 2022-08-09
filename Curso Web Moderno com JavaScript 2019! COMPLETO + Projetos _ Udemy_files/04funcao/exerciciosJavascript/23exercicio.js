// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1) // insere a nota em um array
    notas.push(nota2) // insere a nota em um array
    notas.push(nota3) // insere a nota em um array
    notas.sort((a,b) => a < b ? 1 : -1) //essa função junto com o .sort deixa o Array cadastrado da maior nota
                                        // para a menor exemplo:
                                        // array original [2.8, 6, 3.5]
                                        // array depois da funçao e do .sort [6, 3.5, 2.8] 
    
    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}, Média: ${mediaFinal} ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 4, 6, 5)