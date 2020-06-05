import { Express } from "express"
const express = require('express')
const app: Express = express();

import bodyParser from 'body-parser'

var products = [
    { name: 'apple juice', description: 'good', price: 12.12 },
    { name: 'banana juice', description: 'just so sos', price: 4.50 }
]

app.use(bodyParser.json())

app.get('/products', function (req, res) {
    res.json(products);
});

app.get('/products/:id', function (req, res) {
    if (products.length <= Number(req.params.id) || Number(req.params.id) < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No products found')
    }
    res.json(products[Number(req.params.id)]);
})

app.post('/products', function (req, res) {

    if (typeof req.param('name') === "undefined" ||
        typeof req.param('description') === "undefined" ||
        typeof req.param('price') === "undefined") {
        res.statusCode = 400;
        res.send('Error 400: products properties missing');
    }

    var newProduct = {
        name: req.param('name'),
        description: req.param('description'),
        price: Number(req.param('price'))
    }

    products.push(newProduct)
    res.statusCode = 201;
    res.location('/products/' + products.length);
    res.json(true);
})

app.get('/', function (req, res) {
    res.send('Hello World112!');
});

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
})
