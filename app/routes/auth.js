const express = require('express');
const AuthCtrl = require('../controllers/AuthController');

const router = express.Router();

router.post('/login', AuthCtrl.login);

module.exports = router;