const Url = require("../models/Url");

const leerUrls = async (req, res) => {
     const urls = [
        { origin: "https://www.google.com/bluuweb1", shortURL: "fastfj1" },
        { origin: "https://www.google.com/bluuweb2", shortURL: "fastfj2" },
        { origin: "https://www.google.com/bluuweb3", shortURL: "fastfj3" },
        { origin : "https://www.google.com/bluuweb4", shortURL: "fastfj4" },
        
    ];
    res.render("home", {titulo: "Página de inicio", urls: urls});
}

const agregarUrl = async (req, res) => {
    try {
        const url = new Url({ origin: 'estatico' });
        // await url.save();
        console.log(url);
       // res.send("Agregado");
        res.redirect("/");
    } catch (error) { 
        console.log(error);
        res.send("Error algo fallo");
    }
};

module.exports = {
    leerUrls,
    agregarUrl,
};