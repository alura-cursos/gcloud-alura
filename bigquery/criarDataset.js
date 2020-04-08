const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

async function criarDataset () {
    const [datasets] = await instancia.getDatasets()
    const nomeDataset = 'forumAlura'
    const datasetsFiltrados = datasets.filter(function (datasetAtual) {
        return datasetAtual.id === nomeDataset
    })

    if (datasetsFiltrados.length > 0) {
        console.log('Este dataset já foi criado!')
        return
    }

    await instancia.createDataset(nomeDataset)
    console.log('Foi criado com sucesso!')
}

criarDataset()