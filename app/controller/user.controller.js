const db = require('../config/db.conf');
const User = db.user;

exports.create = (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        res.send(user);
    });
};

exports.findAll = (req, res) => {
    User.findAll().then(users => {
        res.send(users);
    });
};

exports.findById = (req, res) => {
    User.findById(req.params.userId).then(user => {
        res.send(user);
    })
};

exports.update = (req, res) => {
    const id = req.params.userId;
    User.update({ name: req.body.email, age: req.body.password },
        { where: { id: req.params.userId } }
    ).then(() => {
        res.status(200).send("updated successfully a user with id = " + id);
    });
};

exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a user with id = ' + id);
    });
};