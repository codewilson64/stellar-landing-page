import express from 'express'
import { createSubscription } from '../controllers/subscribe.controller.js'

const router = express.Router()

router.post('/subscribe', createSubscription)

export default router