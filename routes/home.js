const express = require('express');
const { leerUrls, agregarUrl } = require('../controller/homeController');
const router = express.Router();

router.get("/",leerUrls);

router.post("/", agregarUrl);
 

module.exports = router;