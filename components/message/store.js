const list = []
function addMessage(messaje){
    list.push(messaje)
}
function getMessage(){
    return list;
}
module.exports = {
    add: addMessage,
    list: getMessage
}