'use strict';

const express = require('express');

// Constants
const HOST = '127.0.0.1';
const PORT = 3000;

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
