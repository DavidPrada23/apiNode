const express = require('express');
const UserCtrl = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserCtrl.getAll)
      .get('/:id', UserCtrl.getById)
      .post('/', UserCtrl.createUser)
      .put('/:id', UserCtrl.updateUser)
      .delete('/:id', UserCtrl.removeUser);

module.exports = router;