const { Router } = require('express');
const { usuariosGet,
        usuariosDelete,
        usuariosPatch,
        usuariosPost,
        usuariosPut } = require('../controllers/user.controllers');

const router = Router();



  router.get('/', usuariosGet);

  router.put('/:numero',usuariosPut);
  
  router.post('/',usuariosPost);

  router.delete('/',usuariosDelete);
  router.patch('/',usuariosPatch);












module.exports = router;