const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/',(req,res) => {
    controller.getMessages().then( getMessage => {
        //console.log(response).
        response.success(req,res,200,getMessage)
    }).catch(error => {
        response.error(req,res,400,'error inesperado')
    })
})

router.post('/',(req,res)=>{
    //res.send('ingreso')
    
    //console.error(req.body.user,req.body.message)
    controller.addMessage(req.body.user, req.body.message).then(fullMessage => {
        response.success(req,res,200,fullMessage)
    }).catch(error => {
        response.error(req,res,400,error)
    })
    //res.send('method Post')
})

module.exports = router;