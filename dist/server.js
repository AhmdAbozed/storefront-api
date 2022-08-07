import express from 'express';
import bodyParser from 'body-parser';
import catalog from './routes/catalog.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
var port = process.env.backendPort;
var app = express();
var address = "http://localhost:3000";
var corsOptions = {
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
catalog(app);
app.listen(port, function () {
    console.log("starting app on: ".concat(address));
});
export { app };
