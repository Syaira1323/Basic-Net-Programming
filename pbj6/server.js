const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes'); // Mengimpor rute dari route.js

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use('/api', route); // Menggunakan rute pada endpoint /api

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${4000}`);
});
