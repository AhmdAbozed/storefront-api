import express from 'express';
import bodyParser from 'body-parser';
import catalog from './routes/catalog.js';
var app = express();
var address = "http://localhost:3000";
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('the day ive decided to be is why i go through any of this');
});
catalog(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
