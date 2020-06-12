import express from "express";
import bodyParser from "body-parser";
import routers from './routers'

class App {
    public app: express.Application = express();
    constructor() {
        this.config();
        this.
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }


}

export default new App().app;