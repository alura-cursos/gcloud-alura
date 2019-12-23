const pubsub = require('./pubsub');
const { topico } = require('../config');

module.exports = async (requisicao, resposta) => {
  const atividade = requisicao.body;
  const idMensagemPubsub = await pubsub(atividade, topico);
  resposta
    .send(`Atividade enviada para o banco de dados, ID: ${idMensagemPubsub}`);
};
