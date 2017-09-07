const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.listen(3000, ()=>{
  console.log('Runnig')
})

app.get('/', (req,res)=>{
  res.send('GET requested')
})
app.post('/', (req,res)=>{
  console.log(req.body)
  console.log(req.body.name)
  res.send('POST requested')
})

