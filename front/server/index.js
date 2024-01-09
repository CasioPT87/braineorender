const express = require('express');
const path = require('path')
const axios = require('axios')

// Create an instance of Express
const app = express();

// para hacer "public" el directorio publico
app.use(express.static(path.join(__dirname, './client/simple/public')));
// para hacer "dist" el directorio publico
app.use(express.static(path.join(__dirname, './client/bundled/dist')));

app.get('/spa-csr', (req, res) => {
    // SPA
    res.sendFile(path.join(__dirname, './client/bundled/dist/index.html'));
});

app.get('/ssr', async (req, res) => {
    // SSR
    const { data } = await axios.get('http://localhost:3000/data')
    const myDiv = `<div>Cuando ${data.name} ${data.lastname} tenia ${data.age} era el mehonnn</div>`
    const stringHtml = `<html><head><title>Hello</title></head><body><h1>Hello, world!</h1>${myDiv}</body></html>`
    res.send(stringHtml);
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});