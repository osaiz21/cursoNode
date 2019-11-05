const store = require('./store')
function addUsers (user) {
    return new Promise((resolve,reject) => {
        if(!user){
            reject('Error Presentado.')
        }
        console.log(7,user)
        store.addUsers(user)
        resolve(user)
    })
}

function getUsers(filter){
    
    return new Promise((resolve,reject) => {
        resolve(store.list(filter))
    })
}

module.exports = {
    addUsers,
    getUsers
}