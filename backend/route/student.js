import express from 'express'
import { addbulk, addone } from '../controllers/studentController.js'

const stdrouter = express.Router()

stdrouter.post('/add',addone)
stdrouter.post('/add-bulk',addbulk)

export default stdrouter