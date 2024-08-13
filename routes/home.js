const express = require('express');
const { leerUrls } = require('../controller/homeController');
const router = express.Router();

router.get("/", (req, res) => {
    leerUrls(req, res);
});

router.post('/', (req, res) => {
    agregarUrl(req, res);
});


module.exports = router;