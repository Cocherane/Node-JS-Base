const { Router } = require('express');
const { usuariosGet, usauriosPut, usauriosPost, usuariosDelete, usuariosPatch } = require('../../controllers/usuariosController');


const router = Router();


router.get( '/', usuariosGet );

router.post( '/', usauriosPost );

router.put( '/:id', usauriosPut );

router.patch( '/', usuariosPatch );

router.delete( '/', usuariosDelete );



//export router
module.exports = router;