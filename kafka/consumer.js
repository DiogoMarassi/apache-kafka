import kafka from '../config/kafkaConfig.js'
class KafkaConsumer {

  // O constructor inicia as propriedades da classe toda vez que uma instancia é inicializada
  // Garante que toda instancia tenha seus proprios valores iniciais
  constructor() {
    this.consumer = kafka.consumer({ groupId: 'test-group' })
    // kafka.consumer é um método do KafkaJS que cria um consumidor Kafka
  }

  // Ou seja, o constructor basicamente serve para inicializar a instancia sempre que ela é criada
  // Se nao usarmos o constructor, teriamos que inicializar assim que algum método for chamado, o que é ruim. É isso?

  async connect(topic) {
    await this.consumer.connect()
    await this.consumer.subscribe({ topic: topic, fromBeginning: true })
  }

  async run(topic) {
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
      },
    });
  }

}


export default new KafkaConsumer() 