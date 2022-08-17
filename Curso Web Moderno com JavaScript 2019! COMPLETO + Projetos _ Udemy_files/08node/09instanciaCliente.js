const contadorA = require('./07instanciaUnica')
const contadorB = require('./07instanciaUnica')

const contadorC = require('./08instanciaNova')()
const contadorD = require('./08instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
