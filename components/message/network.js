const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/',(req,res) => {
   let filter = req.query || {}
   
   controller.getMessages(filter).then( getMessage => {
        //console.log(response).
        response.success(req,res,200,getMessage)
    }).catch(error => {
        response.error(req,res,400,'error inesperado')
    })
})

router.post('/',(req,res)=>{
    //res.send('ingreso')
    controller.addMessage(req.body.user, req.body.message).then(fullMessage => {
        response.success(req,res,200,fullMessage)
    }).catch(error => {
        response.error(req,res,400,error)
    })
    
})
router.patch('/:id',(req,res) =>{
    //console.log(req.params.id)
    controller.updateMessage(req.params.id,req.body.message)
    .then(data =>{
        response.success(req,res,200,data) 
    })
    .catch(error => {   
        response.error(req,res,500,error)
    })
})

router.delete('/:id',(req, res) => {
     
     controller.deleteMessage(req.params)
     .then(data=>{
        response.success(req,res,200,`se Elimino id: ${data.id} `)
     })
     .catch(error =>{
        response.error(req,res,500,'Error inesperado')
     })
})

module.exports = router;