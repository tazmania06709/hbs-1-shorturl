const mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect(process.env.URI)
.then(() => console.log('db connect OK'))
.catch((err) => console.log('fallo la conexion' + err));
