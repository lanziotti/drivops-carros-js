const express = require('express');

const routes = express();

routes.post('/usuario', (req, res) => {
    return res.json("Teste funcionando OK!");
})

module.exports = routes;