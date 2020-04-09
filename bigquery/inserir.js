const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

module.exports = function inserir (linhas) {
    const tabela = instancia.dataset('forumAlura').table('atividades')

    return tabela.insert(linhas)
}