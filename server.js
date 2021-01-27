const express = require('express');
const app = express();
var bodyParser=require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.json())
const users = [
  {name:'Kilani', id:'222222222'},
  {name:'Yara', id:'333333333'},
  {name:'Ihab', id:'444444'}
]
var imges=[];
//route
app.get('/get-users',(req, res)=>{
  res.send(imges)
})


app.post('/addImg',(req,res)=>{

   // console.log(req.body)
    imges.push(req.body)
    res.send({ok:true})
})


app.post('/addRate',(req,res)=>{
   console.log("heeeeereeeeee")
  // console.log(req.body.imagename)
  // console.log(req.body.count)
  // imges.push(req.body)
  imges.forEach(imge => {
    if(imge.imagename==req.body.imagename){
      let x=parseInt(req.body.count)
      imge.count+=x;
     // console.log(count)
      console.log(imge.count)
    }
  });
   res.send({ok:true})
})

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('listening', port)
})