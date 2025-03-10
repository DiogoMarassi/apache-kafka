import kafka from 'kafka'
import KafkaConsumer from '../kafka/consumer.js'

class ConsumerController {
  static async subscribe(req, res) {
    const { topic } = req.body

    if (!topic) {
      return res.status(400).json({ error: 'Tópico e mensagem são obrigatórios' })
    }

    try {
      await KafkaConsumer.connect(topic)
      await KafkaConsumer.run(topic)
      res.status(200).json({ 
        topic: topic,
        status: 'Consumidor inscrito com sucesso!'
       })
    } catch (error) {
      console.error('Erro ao inscrever no tópico:', error)
      res.status(500).json({ error: 'Erro interno ao inscrever-se no tópico' })
    }
  }
}

export default ConsumerController
