const { BigQuery } = require('@google-cloud/bigquery');
const bigQuery = new BigQuery();
const { nomeDataset, nomeTabela } = require('../config');

async function criarTabela() {
  const [ tabelas ] = await bigQuery
    .dataset(nomeDataset)
    .getTables();
  const tabelaExiste = tabelas
    .filter(tabela => tabela.id === nomeTabela)
    .shift();

  if (tabelaExiste) {
    console.log('Tabela já existe!');
    return;
  }

  const estrutura = 'nome_de_usuario:string, data_atividade:date, tipo_atividade:string, id_app:integer';

  const config = {
    schema: estrutura,
    location: 'US',
  };

  await bigQuery
    .dataset(nomeDataset)
    .createTable(nomeTabela, config);

  console.log('Tabela criada com sucesso!');
}

criarTabela();
