import app from './app';
import https from 'https'

const config = require('../config.js')

https.createServer(app).listen(8086, function () {
    console.log('Example app listening on port 8086!');
})
