const db = require('mongoose')
const Model = require('./model')
db.Promise = global.Promise;
db.connect('mongodb://cupscore:cupscore@127.0.0.1/telegram',{
    useNewUrlParser:true
})


function addMessage(messaje){
    const myMessage = new Model.model(messaje)
    myMessage.save()
}
async function getMessage(filter){
    console.log(filter)
    return new Promise((resolve,reject) =>{
        Model.model.find(filter)
        .populate('user')
        .exec((error , populate) => {
            if(error){
                reject(error)
            }
            resolve(populate)
        })
    })
}
async function updateText(id, message){
    const foundMessage = await Model.model.findOne({
        _id: id
    });
    
    foundMessage.message = message;
    const newMessage =  await foundMessage.save();
   
   return newMessage;
}
function deleteMessage(id)
{
    return Model.model.deleteOne({
        _id: id.id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText,
    deleteMessage
}