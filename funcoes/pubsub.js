const { PubSub } = require('@google-cloud/pubsub');
const pubsub = new PubSub();

module.exports = (dados, topico) => {
  if (typeof dados !== 'string') {
    dados = JSON.stringify(dados);
  }

  dados = Buffer.from(dados);

  return pubsub.topic(topico).publish(dados);
};
