// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

// minha solução falhou na comparação daniel/danilo?
// function verificaString(string1, string2) {
//     let existe = undefined    
//     for (i = 0; i < string1.length; i++) {
//         let caractereString1 = string1.charAt(i).toLowerCase()
//         for (j = 0; j < string2.length; j++) {
//             let caractereString2 = string2.charAt(j).toLowerCase()
//             if (caractereString1 == caractereString2) {
//                 existe = true
//                 break
//             } else {
//                 existe = false
//             }
//         }
       
//     }
//     return existe
    
// }

// console.log(verificaString('daniel', 'danilo'))

function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificacaoDeString('daniel', 'danilo'))