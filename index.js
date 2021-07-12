const express = require('express');
const app = express();
const path = require('path');
const port = 2409;

/* Middleware */
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`))