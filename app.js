const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Route test pour vérifier que le serveur fonctionne
app.use('/api/test', (req, res) => {
    res.json({ message: "Test d'API réussi !" });
});

module.exports = app;