import express from 'express'
import { googleAuth, logOut } from '../controllers/auth.controller.js'

const authRouter = express.Router()

// Use POST for authentication callback that expects a request body
authRouter.post('/google', googleAuth)
authRouter.get('/logout', logOut)

export default authRouter