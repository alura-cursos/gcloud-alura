const inserir = require('../bigquery/inserir')

module.exports = async function insereAtividade (evento) {
    try {
        const atividadeCodificada = evento.data
        const json = Buffer.from(atividadeCodificada, 'base64').toString()
        const atividade = JSON.parse(json)

        const resultados = await inserir(atividade)
        console.log(resultados)
    } catch (erro) {
        console.error(erro)
        console.log(JSON.stringify(erro.response))
    }
}