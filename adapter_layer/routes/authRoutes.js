import * as authController from '../controllers/authController.js'
import express from 'express'

const authRoutes = express.Router()

authRoutes.post('/Register', authController.registerStudent);


export default authRoutes