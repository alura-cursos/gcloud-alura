const inserir = require('../big-query/inserir');

const insereAtividade = async (mensagemPubsub) => {
  try {
    let atividade = mensagemPubsub.data
      ? Buffer.from(mensagemPubsub.data, 'base64').toString()
      : mensagemPubsub;

    if (typeof atividade === 'string') {
      atividade = JSON.parse(atividade);
    }

    const resultados = await inserir(atividade);

    console.log(resultados);
  } catch (erro) {
    console.error(erro);
    console.log(erro.response);
  }
};

module.exports = insereAtividade;
