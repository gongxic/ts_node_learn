import express from "express";
import bodyParser from "body-parser";
import routers from './routers'
import cookieParser from 'cookie-parser'
import path from 'path'
import helmet from 'helmet'

class App {
    public app: express.Application = express();
    constructor() {
        this.config();
        routers(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser('cookie_kite'))
        // 安全中间件
        this.app.use(helmet())
        // 配置服务端模板渲染引擎中间件
        this.app.engine('html', require('ejs').renderFile)
        // serving static files 
        this.app.use(express.static('public'));
        // 配置静态资源加载中间件
        this.app.use(express.static(path.join(__dirname, '../../static')))
        this.app.set('views', path.join(__dirname, '../../views'))

    }

}

export default new App().app;