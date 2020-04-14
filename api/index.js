const Koa = require('koa')
const processador = require('koa-bodyparser')
const aplicacao = new Koa()
const pesquisar = require('../bigquery/pesquisar')

aplicacao.use(processador())
aplicacao.use(async function (contexto) {
    const corpoDaRequisicao = contexto.request.body
    contexto.status = 200
    contexto.body = await pesquisar(corpoDaRequisicao.filtro)
})

aplicacao.listen(3000)
console.log('A API está funcionando normalmente')