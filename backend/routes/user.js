
const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controller/user');


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
});

UserRouter.get('/:id', (req, res) =>{
  const {id} = req.params;
  UserController.getUserById(id)
  .then(resolveds => {
    res.send({ data: resolveds })
  })
  .catch(err => {
    console.log(err)
    res.status(400).send({ error: err.toString() })
  });
})

UserRouter.post('/sendemail', (req, res) => {
  const {order} = req.body;
  UserController.sendEmails(order)
  .then(resolveds => res.send({ data: resolveds }))
  .catch(err => {
    console.log(err)
    res.status(400).send({ error: err.toString() })
  });
});

UserRouter.post('/sendemail-nonwatchers', (req, res) => {
  const {order} = req.body;
  UserController.sendEmailsToNonWatchers(order)
  .then(resolveds => res.send({ data: resolveds }))
  .catch(err => {
    console.log(err)
    res.status(400).send({ error: err.toString() })
  });
});

UserRouter.put('/:id', (req, res) => {
  const {id} = req.params;

  UserController.updateUser(id, req.body)
    .then(resolveds => res.send({ data: resolveds }))
    .catch(err => {
      console.log(err)
      res.status(400).send({ error: err.toString() })
    });
});


UserRouter.put('/:id/video-watched', (req, res) => {
  const {id} = req.params;
  const {order} = req.body;
  let promise;
  if(order === 1 ) {
    promise = UserController.updateUser(id, {watchedVideo1: true});
  }else if(order === 2){
    promise = UserController.updateUser(id, {watchedVideo2: true});
  }else if(order === 3){
    promise = UserController.updateUser(id, {watchedVideo3: true});
  }else {
    promise = UserController.updateUser(id, {watchedVideo4: true});
  }

  promise
    .then(resolveds => res.send({ data: resolveds }))
    .catch(err => {
      console.log(err)
      res.status(400).send({ error: err.toString() })
    });

  return;
});
module.exports = UserRouter