const express =require('express')
const path =require('path')
const fareUtilis =require('./frontend/fareUtilis')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'frontend')))
app.post('/calcfare',(req,res)=>{
    let km =parseFloat(req.body.km)
    let min=parseInt(req.body.min)
    let fare=fareUtilis.calcfare(km,min)
    res.send({fare:fare})
})
app.get('/rate',(req,res)=>{
    res.send(fareUtilis.rate)

})
exports=module.exports=app