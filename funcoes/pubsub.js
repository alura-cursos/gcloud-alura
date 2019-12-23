const { PubSub } = require('@google-cloud/pubsub');

module.exports = (dados, topico) => {
  const pubsub = new PubSub();

  if (typeof dados !== 'string') {
    dados = JSON.stringify(dados);
  }

  dados = Buffer.from(dados);

  return pubsub.topic(topico).publish(dados);
};
