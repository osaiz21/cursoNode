const store = require('./store')
function addMessage (user, message) {
    return new Promise((resolve,reject) => {
        if(!user || !message){
            reject('Error Presentado.')
        }
        
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        
        store.add(fullMessage)
        resolve(fullMessage)
    })
}
function getMessages(filter){
    
    return new Promise((resolve,reject) => {
        resolve(store.list(filter))
    })
}
function updateMessage(id, message){
    return new Promise(async  (resolve,reject)=>{
        if (!id || !message){
            reject('invalid data');
            return false;
        }

        const result = await store.updateText(id,message);
        return resolve(result)
    })
}

function deleteMessage(id){
    
    return new Promise((resolve,reject) => {
        if (!id) {
            reject('error inesperado')
            return false;
        }
        store.deleteMessage(id)
            .then(response => {
                resolve(id)
            }).catch(error =>{
                reject('error inesperado')
            })
        
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}