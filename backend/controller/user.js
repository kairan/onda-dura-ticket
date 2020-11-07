const jwtToken = require('jsonwebtoken');

const UserModel = require('../models/User')
const VideoController = require('./video')

const createUser = async (name, mail) => {
  const userExits = await UserModel.exists({mail: mail})
  if(userExits){
    throw new Error('E-mail já cadastrado!')
  }else{
    const user = new UserModel({name, mail})
    return await user.save()
  }
}

const updateUser = async (id, user) => {
  await UserModel.findByIdAndUpdate(id, user)
  return await UserModel.findById(id)
}

const listUsers = async () =>{ 
  return await UserModel.find()
}

const sendEmails = async order => {
  const video = await VideoController.getVideo(order)

  const users = await listUsers()

  users.forEach(user => {
    const jwt = jwtToken.sign({ userId: user._id, url:  video.url, order: video.order}, 'OndaDuraJaragua');
    console.log(jwt)
    // send MailGun ${frontendUrl}?jwt=${jwt}
  })
  return true
}

module.exports = {
  createUser,
  listUsers,
  updateUser,
  sendEmails
}