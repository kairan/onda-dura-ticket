
const express = require('express');

const UserController = require('../controller/user');

const UserRouter = express.Router();

UserRouter.post('/', (req, res) => {
  const { site } = req.query;
  const {name, mail} = req.body


  UserController.createUser(name, mail)
    .then(resolveds => res.send({ data: resolveds }))
    .catch(err => {
      console.log(err)
      res.status(400).send({ error: err.toString() })
    });

  return;
});

UserRouter.get('/', (req, res) => {

  UserController.listUsers()
    .then(resolveds => res.send({ data: resolveds }))
    .catch(err => {
      console.log(err)
      res.status(400).send({ error: err.toString() })
    });

  return;
});

UserRouter.put('/:id', (req, res) => {
  const {id} = req.params;

  UserController.updateUser(id, req.body)
    .then(resolveds => res.send({ data: resolveds }))
    .catch(err => {
      console.log(err)
      res.status(400).send({ error: err.toString() })
    });

  return;
});

module.exports = UserRouter