const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

async function criarTabela () {
    const nomeTabela = 'atividades'
    const [tabelas] = await instancia.dataset('forumAlura').getTables()
    const tabelasEncontradas = tabelas.filter(function (tabelaAtual) {
        return tabelaAtual.id === nomeTabela
    })

    if (tabelasEncontradas.length > 0) {
        console.log('Esta tabela já existe!')
        return
    }

    const estrutura = [
        {
            name: 'id',
            type: 'integer'
        },
        {
            name: 'data_criacao_atividade',
            type: 'timestamp'
        },
        {
            name: 'tipo_atividade',
            type: 'string'
        },
        {
            name: 'nome_do_curso',
            type: 'string'
        },
        {
            name: 'nome_da_aula',
            type: 'string'
        },
        {
            name: 'texto',
            type: 'string'
        },
        {
            name: 'id_atividade_principal',
            type: 'integer'
        }
    ]

    await instancia.dataset('forumAlura').createTable(nomeTabela, { schema: estrutura })
    console.log('Tabela criada com sucesso!')
}

criarTabela()