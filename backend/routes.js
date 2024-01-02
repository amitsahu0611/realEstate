import express from 'express'
import userController from './controllers/userController.js';
import authController from './controllers/authController.js';
const router = express.Router();

router.get('/test',userController().send)
router.post('/signUp', authController().signUp)
router.post('/signIn', authController().signIn)

export default router