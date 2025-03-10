import express from 'express';
import ConsumerController from '../controllers/ConsumerController.js';
import ProducerController from '../controllers/producerController.js';

const router = express.Router();

router.post('/message', ProducerController.sendMessage); 
router.post('/subscribe', ConsumerController.subscribe); 

export default router;