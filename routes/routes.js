const 
express = require('express'),
routes = express.Router(),
uploadImgs = require('../libs/multerConfig')

routes.get('/user',(req,res)=>{
  res
    .status(200)
    .send({
      nom:'Alvaro',
      edat:30,
      url:'http://localhost:3000/user'
    })
})

routes.post('/upload',uploadImgs.single('image'), (req,res)=>{
  if(req.errorValidation){
    res.status(400).send({message: req.errorValidation})
  }
  res.status(200).send({success: true})
  
})

module.exports = routes