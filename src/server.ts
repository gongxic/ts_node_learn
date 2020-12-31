import app from './app';
import https from 'http'

const config = require('../config.js')

http.createServer(app).listen(8086, function () {
    console.log('Example app listening on port 8086!');
})
