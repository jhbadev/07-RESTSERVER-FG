const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.userPath = '/api/user';

        // Connect dbConnection
        this.connectDB();

        //Middlewares
        this.middlewares();

        // Application routes
        this.routes();
    }

    async connectDB() {

        await dbConnection();

    }

    middlewares() {

        // LECTURA Y PARSEO JSON

        this.app.use(express.json());
        // CORS

        this.app.use(cors());

        // Directorio publico
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.use(this.userPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port ', this.port)
        })
    }

}

module.exports = Server;