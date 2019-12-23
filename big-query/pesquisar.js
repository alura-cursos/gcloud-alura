const { BigQuery } = require('@google-cloud/bigquery');
const bigQuery = new BigQuery();
const { nomeDataset, nomeTabela } = require('../config');

module.exports = async function pesquisar(query) {
  const config = {
    location: 'US',
    query
  };

  const [ trabalho ] = await bigQuery
    .createQueryJob(config);

  const [ resultados ] = await trabalho
    .getQueryResults();

  return resultados;
}
