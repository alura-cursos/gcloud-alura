const Koa = require('koa');
const app = new Koa();
const pesquisar = require('../big-query/pesquisar');
const { idProjetoGoogle, nomeDataset, nomeTabela } = require('../config');
const autenticador = require('basic-auth');
const usuario = process.env.USUARIO;
const senha = process.env.SENHA;

app.use(async contexto => {
  if (!contexto.headers.authorization) {
    contexto.body = { erro: 'Permissão de acesso negada' };
    return;
  }

  const credenciais = autenticador.parse(contexto.headers.authorization);

  if (credenciais.name !== usuario || credenciais.pass !== senha) {
    contexto.body = { erro: 'Permissão de acesso negada' };
    return;
  }

  // basic
  const query = `SELECT *
    FROM \`${idProjetoGoogle}.${nomeDataset}.${nomeTabela}\`
    LIMIT 100`;
  contexto.body = await pesquisar(query);
});

app.listen(8080);
console.log('API está funcionando');
