import express from 'express';
import protect from '../middlewares/authMiddlware.js';
import { login, signup, getProfile } from '../controllers/authController.js';
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/profile', protect, getProfile);

export default router;