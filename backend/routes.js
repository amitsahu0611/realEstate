import express from 'express'
import userController from './controllers/userController.js';
import authController from './controllers/authController.js';
const router = express.Router();

router.get('/test',userController().send)
router.post('/signUp', authController().signUp)

export default router