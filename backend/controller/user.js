const jwtToken = require('jsonwebtoken');

const UserModel = require('../models/User')
const VideoController = require('./video')
const Email = require('../email');
const { templateToWatch, templateToNonWatchers, templateToTest } = require('../email/template');

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

const getUserById = async (id) =>{ 
  return await UserModel.findById(id)
}

const listUsers = async () =>{ 
  return await UserModel.find()
}

const listUsersDidNotWatchOrder = async (order) => { 
  const body = {}
  body[`watchedVideo${order}`] = undefined
  return await UserModel.find(body)
}

const sendTest = async () =>{
  const users = await listUsers();
  users.map(async user => {
    await Email.sendEmail({
      ...Email.emailDataTemplateTest,
      to: user.mail,
      text: templateToTest(user.name, `https://docs.google.com/forms/d/e/1FAIpQLScvna8GMSUgC_xTF2rCxbNgg92JxsX4UcULL-Ih_SsEcDMx3w/viewform`)
    });

    return user;
  })
}

const sendEmails = async order => {
  const video = await VideoController.getVideo(order);
  const users = await listUsers();

  const emailSent = users.map(async user => {
    const jwt = jwtToken.sign({ userId: user._id, url:  video.url, order: video.order}, 'OndaDuraJaragua');
    await Email.sendEmail({
      ...Email.emailDataTemplate,
      to: user.mail,
      text: templateToWatch(`http://familiarizando.ondadurajaraguadosul.com.br:8080?jwt=${jwt}`)
    });

    return user;
  })
  return Promise.all(emailSent);
}

const sendEmailsToNonWatchers = async (order) => {
  const video = await VideoController.getVideo(order);
  const users = await listUsersDidNotWatchOrder(order);

  const emailSent = users.map(async user => {
    const jwt = jwtToken.sign({ userId: user._id, url:  video.url, order: video.order}, 'OndaDuraJaragua');
    const emailContent = templateToNonWatchers(user.name, `http://familiarizando.ondadurajaraguadosul.com.br:8080?jwt=${jwt}`);
    await Email.sendEmail({
      ...Email.emailDataTemplate,
      to: user.mail,
      text: emailContent
    });
    return user;
  });

  return Promise.all(emailSent);
}

module.exports = {
  createUser,
  listUsers,
  updateUser,
  sendEmails,
  getUserById,
  sendEmailsToNonWatchers,
  sendTest
}