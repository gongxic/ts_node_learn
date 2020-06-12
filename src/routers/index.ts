import { Express } from 'express'
const products = require('./products')

export default (app: any){
    const apiClient = require('./products')
    app.use("/api-client/", apiLimiter)
}


