var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./app/config/db.conf');

db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and Resync with { force: true }');
});

require('./app/route/user.route')(app);

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server listening http://%s:%s", host, port)
})