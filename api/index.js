const Koa = require('koa')
const aplicacao = new Koa()

aplicacao.use(function (contexto) {
    contexto.status = 200
    contexto.body = {
        mensagem: 'API está funcionando'
    }
})

aplicacao.listen(3000)
console.log('A API está funcionando normalmente')