import express from 'express'
import { deleteAccount } from '../controllers/account.controller.js'

const router = express.Router()

router.post('/delete-account', deleteAccount)

export default router