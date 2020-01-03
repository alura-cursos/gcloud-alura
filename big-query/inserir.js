const { BigQuery } = require('@google-cloud/bigquery');
const bigQuery = new BigQuery();
const { nomeDataset, nomeTabela } = require('../config');

const inserir = async linhas => {
  const tabela = bigQuery
    .dataset(nomeDataset)
    .table(nomeTabela);

  return tabela.insert(linhas);
};

module.exports = inserir;
