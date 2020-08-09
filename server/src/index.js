const express = require('express')
const mongoose = require('./db/mongoose')
const passport = require("passport");

const passportRoute = require("./route/passport");
const passportConfig = require("./auth/passport-config.js");
const postRoute = require("./route/post")

const app = express()
const port = process.env.port | 9000

app.use(express.json())

passportConfig(app,mongoose);
passportRoute(app,mongoose);
postRoute(app, mongoose);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);  
})