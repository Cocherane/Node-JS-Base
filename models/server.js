const express = require('express')
const cors = require('cors');
const { json } = require('express');



class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        // middleware 
        this.middlewares();


        // Aplication Rutes
        this.routes();
    };


    middlewares(){

        // CORS
        this.app.use( cors() );
        
        // Parse y Read  of body
        this.app.use( json() );

        // Directorio publico
        this.app.use( express.static('public') );

    }

    // Routes
    routes(){
        this.app.use( this.usuarioPath , require('./routes/usuarios')  );
    }


    listen(){
        this.app.listen( this.port, () => {
            console.log('listening on port', this.port);
        });
    }

}
// server export
module.exports = Server;    