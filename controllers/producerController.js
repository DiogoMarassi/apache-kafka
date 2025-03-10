import KafkaProducer from '../kafka/producer.js'

class ProducerController {
  static async sendMessage(req, res) {
    const { topic, message } = req.body

    if (!topic || !message) {
      return res.status(400).json({ error: 'Tópico e mensagem são obrigatórios' })
    }

    try {
      await KafkaProducer.sendMessage(topic, message)
      res.status(200).json({ 
        message: message,
        topic: topic,
        status: 'Mensagem enviada com sucesso'
       })
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      res.status(500).json({ error: 'Erro interno ao enviar mensagem' })
    }
  }
}

export default ProducerController

