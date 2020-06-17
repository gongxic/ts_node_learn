import app from './app';
import http from 'http'

const config = require('../config.js')

http.createServer(app).listen(8080, function () {
    console.log('Example app listening on port 8080!');
})
