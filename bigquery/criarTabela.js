const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

async function criarTabela () {
    const dataset = instancia.dataset('forumAlura')
    const [tabelas] = await dataset.getTables()
    const nomeTabela = 'atividades'
    const tabelasEncontradas = tabelas.filter(function (tabelaAtual) {
        return tabelaAtual.id === nomeTabela
    })

    if (tabelasEncontradas.length > 0) {
        console.log('Essa tabela já existe!')
        return
    }

    const estrutura = [
        {
            name: 'data_criacao_atividade',
            type: 'timestamp',
            mode: 'required'
        },
        {
            name: 'tipo_de_atividade',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'nome_do_curso',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'nome_da_aula',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'texto',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'id_atividade_principal',
            type: 'integer',
            mode: 'nullable'
        }
    ]

    await dataset.createTable(nomeTabela, { schema: estrutura })
    console.log('A tabela foi criada com sucesso!')
}

criarTabela()