const pubsub = require('./pubsub');
const { topico, cursoValido, aulasValidas, atividadesValidas } = require('../config');

const recebeAtividade = async (requisicao, resposta) => {
  const atividade = requisicao.body;

  if (atividadesValidas.indexOf(atividade.tipo_atividade) === -1) {
    return resposta
      .send('Tipo de atividade inválida!');
  }

  if (atividade.curso !== cursoValido) {
    return resposta
      .send('Curso inválido!');
  }

  if (aulasValidas.indexOf(atividade.aula) === -1) {
    return resposta
      .send('Aula inválida!');
  }

  if (
    atividade.tipo_atividade !== 'criar_pergunta' &&
    Object.prototype.hasOwnProperty.call(atividade, 'registro_original')
  ) {
    return resposta
      .send('Necessário existir o campo registro_original!');
  }

  const idMensagemPubsub = await pubsub(atividade, topico);
  resposta
    .send(`Atividade enviada para o banco de dados, ID: ${idMensagemPubsub}`);
};

module.exports = recebeAtividade;
