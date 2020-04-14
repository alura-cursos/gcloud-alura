const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

module.exports = function inserir (linhas) {
    const dataset = instancia.dataset('forumAlura')
    const tabela = dataset.table('atividades')

    return tabela.insert(linhas)
}