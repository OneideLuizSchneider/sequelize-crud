module.exports = function (app) {

    const users = require('../controller/user.controller');

    app.post('/api/user', users.create);
    app.get('/api/user', users.findAll);
    app.get('/api/user/:userId', users.findById);
    app.put('/api/user/:userId', users.update);
    app.delete('/api/user/:userId', users.delete);
}