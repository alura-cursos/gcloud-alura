const { BigQuery } = require('@google-cloud/bigquery');
const bigQuery = new BigQuery();

const pesquisar = async query => {
  const config = {
    location: 'US',
    query
  };

  const [trabalho] = await bigQuery
    .createQueryJob(config);

  const [resultados] = await trabalho
    .getQueryResults();

  return resultados;
};

module.exports = pesquisar;
