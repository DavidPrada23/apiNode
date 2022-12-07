const User = require('../models/User');

function getAll(req, res) {
    res.send('getAll');
}

function getById(req, res) {
    res.send('getById');
}

function createUser(req, res) {
    res.send('createUser');
}

function updateUser(req, res) {
    res.send('updateUser');
}

function removeUser(req, res) {
    res.send('removeUser');
}

module.exports = {
    getAll,
    getById,
    createUser,
    updateUser,
    removeUser
}