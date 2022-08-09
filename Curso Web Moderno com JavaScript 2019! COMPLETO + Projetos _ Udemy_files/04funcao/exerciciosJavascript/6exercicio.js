//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.

function simples(capitalInicial, taxaDeJuros, tempo){
    let jurosSimples = (capitalInicial+(capitalInicial * taxaDeJuros * tempo))
    console.log(jurosSimples)
    
}

function compostos(capitalInicial, taxaDeJuros, tempo){
    let jurosComposto = (capitalInicial*((1+taxaDeJuros)**tempo))
    console.log(jurosComposto)
}

simples(1000, 0.1, 4)
compostos(1000, 0.1, 4)