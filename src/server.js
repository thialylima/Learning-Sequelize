const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.use(express.json());

app.use(routes);

app.listen(3333);