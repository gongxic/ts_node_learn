import { Express } from 'express'
const products = require('./products')
const API_VERSION = 'v1' // 接口版本


export default (app: any) => {
    const apiProducts = require('./products')

    app.use(`/${API_VERSION}`, apiProducts)


}




