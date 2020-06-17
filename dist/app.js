"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routers_1 = __importDefault(require("./routers"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        routers_1.default(this.app);
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(cookie_parser_1.default('cookie_kite'));
        // 安全中间件
        this.app.use(helmet_1.default());
        // 配置服务端模板渲染引擎中间件
        this.app.engine('html', require('ejs').renderFile);
        // serving static files 
        this.app.use(express_1.default.static('public'));
        // 配置静态资源加载中间件
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../../static')));
        this.app.set('views', path_1.default.join(__dirname, '../../views'));
    }
}
exports.default = new App().app;
