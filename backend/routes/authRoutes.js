import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
import { login, signup } from '../controllers/authController.js';
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);


export default router;