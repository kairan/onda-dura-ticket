
const express = require('express');

const VideoController = require('../controller/video');

const VideoRouter = express.Router();

VideoRouter.post('/', (req, res) => {
  const { site } = req.query;
  const {name, url, order} = req.body


  VideoController.createVideo(name, url, order)
    .then(resolveds => res.send({ data: resolveds }))
    .catch(err => {
      console.log(err)
      res.status(400).send({ error: err.toString() })
    });

  return;
});

VideoRouter.get('/', (req, res) => {

  VideoController.listVideos()
    .then(resolveds => res.send({ data: resolveds }))
    .catch(err => {
      console.log(err)
      res.status(400).send({ error: err.toString() })
    });

  return;
});

module.exports = VideoRouter