const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const urls = [
        { origin: "https://www.google.com/bluuweb1", shortURL: "fastfj1" },
        { origin: "https://www.google.com/bluuweb2", shortURL: "fastfj2" },
        { origin: "https://www.google.com/bluuweb3", shortURL: "fastfj3" },
        { origin : "https://www.google.com/bluuweb4", shortURL: "fastfj4" },
        
    ];
    res.render("home", {titulo: "Página de inicio", urls: urls});
});


module.exports = router;