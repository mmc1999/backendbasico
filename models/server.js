const express = require('express');
const cors = require("cors");
const app = express();

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = "/api/usuarios" 

        //middlewares
        this.middlewares();

        //rutas de mi app
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static("public"))
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require("../routes/user"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto ", this.port)
        })
    }
}

module.exports = {
    Server
}