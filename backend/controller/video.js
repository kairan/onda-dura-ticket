
const VideoModel = require('../models/Video')

const createVideo = async (name, url, order) => {
  const video = new VideoModel({name, url, order})
  return await video.save()
}

const listVideos = async () =>{ 
  return await VideoModel.find()
}
const getVideo = async (order) =>{ 
  return await VideoModel.findOne({order})
}
module.exports = {
  createVideo,
  listVideos,
  getVideo
}