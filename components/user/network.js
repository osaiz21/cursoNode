const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/',(req,res)=>{
    controller.addUsers(req.body)
    .then(outputUsers => {
        response.success(req,res,200,`Se creo e usuario ${outputUsers.name}`)
    }).catch(error => {
        response.error(req,res,400,error)
    })
    
})

router.get('/',(req,res) => {
    let filter = req.query || {}
    
    controller.getUsers(filter).then( getMessage => {
         //console.log(response).
         response.success(req,res,200,getMessage)
     }).catch(error => {
         response.error(req,res,400,'error inesperado')
     })
})


module.exports = router;