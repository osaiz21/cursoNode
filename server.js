const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const router = require('./network/routes')

var app = express();
app.use(bodyParser.json());
//app.use(router)
//router(app)
router(app);

//staticos.
app.use('/app',express.static('public'))

app.listen('3000')
console.error( ` la aplicacion esta listen ${3000}`)