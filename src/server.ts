import express from 'express'
import { Request, Response } from 'express'
import bodyParser from 'body-parser'
import catalog from './routes/catalog.js'

const app = express()
const address: string = "http://localhost:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('the day ive decided to be is why i go through any of this')
})

catalog(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
