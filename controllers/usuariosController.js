const {response, request} = require('express');



// GET 
const usuariosGet = ( req = request, res = response ) =>{

    const { q, nombre, page = 1 , limit = 10, apikey } = req.query;

    res.status(201).json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        page,
        limit,
        apikey
    })
}

// POST
const usauriosPost = ( req, res ) =>{
    const { nombre, edad } = req.body
    res.json({
        msg:'Post API - Controlador',
        nombre,
        edad
    })
}

// PUT 
const usauriosPut = ( req, res ) =>{
    const { id } = req.params;


    res.json({
        mesg: 'Put API - Controlador',
        id
    })
}

// PATCH
const usuariosPatch = ( req, res ) =>{
    res.json('Patch API - Controlador')
}


// DELETE
const usuariosDelete = ( req, res ) =>{
    res.json('Delete API - Controlador')
}





// export callbacks
module.exports = {
    usuariosGet,
    usauriosPost,
    usauriosPut,
    usuariosPatch,
    usuariosDelete
};