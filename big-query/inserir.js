const { BigQuery } = require('@google-cloud/bigquery');
const bigQuery = new BigQuery();
const { nomeDataset, nomeTabela } = require('../config');

module.exports = async function inserir(linhas) {
  const tabela = bigQuery
    .dataset(nomeDataset)
    .table(nomeTabela);

  return tabela.insert(linhas);
}
