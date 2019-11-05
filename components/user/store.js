const db = require('mongoose')
const Model = require('./model')
db.Promise = global.Promise;
db.connect('mongodb://cupscore:cupscore@127.0.0.1/telegram',{
    useNewUrlParser:true
})


function addUsers(user)
{
    const myUsers = new Model.model(user)
    myUsers.save()
}

async function getUsers(filter){
    
    const Users = await Model.model.find(filter)
    return Users
}

module.exports = {
    addUsers,
    list: getUsers
}