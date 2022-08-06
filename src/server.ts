import express from 'express'
import { Request, Response } from 'express'
import bodyParser from 'body-parser'
import catalog from './routes/catalog.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.backendPort 
const app = express()
const address: string = "http://localhost:3000"

const corsOptions = {
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

catalog(app);

app.listen(port, function () {
    console.log(`starting app on: ${address}`)
})

export {app}