const express = require('express')
const bodyParser = require('body-parser')


const MeCab = require('mecab-async')
const mecab = new MeCab()
MeCab.command = "mecab -d /usr/local/lib/mecab/dic/mecab-ipadic-neologd/"



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
  //console.log(req.body.name)
  //res.send('POST requested')
  mecab.parse(req.body.text, (err, result)=>{
    if(err){
      console.log(err)
    }
    console.log(req.body)
    console.log(result)
    res.send(result)
  })
})

