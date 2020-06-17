"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = require('./products');
const API_VERSION = 'v1'; // 接口版本
exports.default = (app) => {
    const apiProducts = require('./products');
    app.use(`/api-client/${API_VERSION}`, apiProducts);
};
