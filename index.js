const express = require('express');
const app = express();
require('dotenv').config();
require('./DB/connection');
const route = require('./routes/index');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log(`server is started in ${port}`);
})