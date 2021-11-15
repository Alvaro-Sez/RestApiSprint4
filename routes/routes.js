const 
express = require('express'),
routes = express.Router(),
cors = require('cors'),
uploadImgs = require('../libs/multerConfig')


/* Nivell 1 */

/* exercici 1  */
routes.get('/user',(req,res)=>{
  res
    .status(200)
    .send({
      nom:'Alvaro',
      edat:30,
      url:'http://localhost:3000/user'
    })
})

/* exercici 2  */
routes.post('/upload',uploadImgs.single('image'), (req,res)=>{
  if(req.errorValidation){
    res.status(400).send({message: req.errorValidation})
  }
  res.status(200).send({success: true})
  
})

/* Nivell 2 */

/* exercici 1 */
const cacheMiddleware = (req,res,next)=>{
  res.set('Cache-control', 'no-cache')
  next()
}
const checkAuth = (req,res,next)=>{
  if(req.headers.authorization){
    next()
  } else {
    res.status(401).send({message: 'Unauthorized'})
  }

}

routes.post('/time', cors(), checkAuth, cacheMiddleware, (req,res)=>{
  dateNow = {
    date: new Date().toLocaleString()
  }
  res.status(200).send({dateNow})
})
module.exports = routes