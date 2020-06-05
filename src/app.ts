import { Express } from "express"
const express = require('express');
const app: Express = express();

app.get('/', function (req, res) {
    res.send('Hello World112!');
});
app.listen(8880, function () {
    console.log('Example app listening on port 8888!');
})
