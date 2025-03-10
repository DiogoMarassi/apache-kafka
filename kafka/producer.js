import kafka from '../config/kafkaConfig.js'

class KafkaProducer {

  constructor() {
    this.producer = kafka.producer()
  }

  async connect() {
    await this.producer.connect()
  }

  async sendMessage(topic, message) {
    await this.producer.send({
      topic,
      messages: [
        { value: JSON.stringify(message) },
      ],
    })
  }
  
  async disconnect() {
    await this.producer.disconnect()
  }
}

// exportamos uma unica instancia da classe
export default new KafkaProducer() 
