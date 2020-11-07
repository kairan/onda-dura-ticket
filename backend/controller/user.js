const jwtToken = require('jsonwebtoken');

const UserModel = require('../models/User')
const VideoController = require('./video')
const Email = require('../email');

const createUser = async (name, mail) => {
  const userExits = await UserModel.exists({mail: mail})
  if(userExits) {
    throw new Error('E-mail já cadastrado!')
  } else {
    const user = new UserModel({name, mail, ordersEmailSent: []})
    return await user.save()
  }
}

const updateUser = async (id, user) => {
  const oldUserData = (await UserModel.findById(id))._doc;

  const newUserData = {
    ...oldUserData,
    ...user
  };

  await UserModel.findByIdAndUpdate(id, newUserData);
  return newUserData;
}

const listUsers = async () =>{ 
  return await UserModel.find()
}

const sendEmails = async order => {
  const video = await VideoController.getVideo(order);
  const users = await listUsers();

  const emailSent = users.map(async user => {
    const jwt = jwtToken.sign({ userId: user._id, url:  video.url, order: video.order}, 'OndaDuraJaragua');
    // await Email.sendEmail({
    //   ...Email.emailDataTemplate,
    //   to: user.mail,
    //   text: `http://localhost:8080?jwt=${jwt}`
    // });

    const userNewData = {
      ...user._doc,
      ordersEmailSent: [
        ...user.ordersEmailSent || [],
        {
          order,
          timesent: new Date()
        }
      ]
    };
    console.log('Sended', userNewData);
    return updateUser(user._id, userNewData);
  })
  return Promise.all(emailSent);
}

module.exports = {
  createUser,
  listUsers,
  updateUser,
  sendEmails
}