import express from 'express'

const router = express.Router()



router.get('/products', function (req, res) {
    var products = [
        { name: 'apple juice', description: 'good', price: 12.12 },
        { name: 'banana juice', description: 'just so sos', price: 4.50 }
    ]
    res.json(products);
})

router.get('/products/:id', function (req, res) {
    var products = [
        { name: 'apple juice', description: 'good', price: 12.12 },
        { name: 'banana juice', description: 'just so sos', price: 4.50 }
    ]
    if (products.length <= Number(req.params.id) || Number(req.params.id) < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No products found')
    }
    res.json(products[Number(req.params.id)]);
})

router.post('/products', function (req, res) {
    var products = [
        { name: 'apple juice', description: 'good', price: 12.12 },
        { name: 'banana juice', description: 'just so sos', price: 4.50 }
    ]

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

module.exports = router;