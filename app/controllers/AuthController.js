const User = require('../models/User');

function login(req, res) {
    const {username, password} = req.body;
    if(!(username && password)){
        return res.status(400).send({message: '¡Usuario y contraseña son requeridos!'});
    }
    try {
        User.find()
    } catch (error) {
        
    }

}

function signUp(req, res) {
    res.send('signUp');
}

function logout(req, res) {
    res.send('logout');
}

module.exports = {
    login,
    signUp,
    logout
}