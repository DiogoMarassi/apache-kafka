import express from 'express';
import KafkaConsumer from './kafka/consumer.js';
import KafkaProducer from './kafka/producer.js';
import router from './route/routes.js'; 

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', router);

app.listen(port, async () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
    await KafkaProducer.connect();
});

export { app };
