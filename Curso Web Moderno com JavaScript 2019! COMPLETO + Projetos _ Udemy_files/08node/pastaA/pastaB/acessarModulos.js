const moduloA = require('../../01moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia!')
    res.end()
}).listen(8080)