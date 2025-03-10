// Importa a classe Kafka do módulo 'kafkajs'
import { Kafka } from 'kafkajs'

// o Apache Kafka é um sistema open-source de mensageria do tipo publish/subscribe
// Ele é uma plataforma distribuída de streaming de eventos é basicamente um conjunto de máquinas (brokers) 
// trabalhando para produzir e processar dados no momento em que o evento acontece. Ou seja, em tempo real.


// Cria uma instância do cliente Kafka
const kafka = new Kafka({
  clientId: 'my-app', // Identifica o cliente; útil para logs e monitoramento

  // O broker é o "coração" do Kafka. Cada broker é um servidor que recebe, armazena e entrega as mensagens.

  brokers: ['localhost:9092', 'localhost:9092'], // Lista dos brokers do Kafka aos quais o cliente se conectará
  // Um cluster Kafka geralmente tem vários brokers, como kafka1:9092, kafka2:9092.
  // Cada broker executa as partições dos tópicos
  // Tópicos: É como um canal ou pasta onde as mensagens são enviadas.
    // Exemplo: Um tópico chamado pagamentos pode receber eventos sobre transações.
})

export default kafka