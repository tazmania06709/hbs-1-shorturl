const express = require('express');
const { create } = require("express-handlebars");


const app = express();

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

console.log(("Hola soy el backend"));

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs"); 
app.set("views", "./views");

app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});