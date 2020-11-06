
const UserModel = require('../models/User')

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

module.exports = {
  createUser,
  listUsers,
  updateUser
}