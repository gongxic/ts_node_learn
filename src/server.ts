import express from "express"
import app from './app';
import bodyParser from 'body-parser'

const config = require('../config.js')

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
})
