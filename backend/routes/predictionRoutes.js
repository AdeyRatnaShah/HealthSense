import express from 'express';
const router = express.Router();
import processModel from '../controllers/predictionController.js';
import protect from '../middlewares/authMiddlware.js';

router.post('/:model', protect, processModel);

export default router;