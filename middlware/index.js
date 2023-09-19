const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const adminData = require('./routes/admin')
const shopROutes = require('./routes/shop')
const path = require('path')

app.set('view engine','pug')
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/', (req, res, next) => {
  next();
});

app.use('/admin',adminData.routes)
app.use(shopROutes)

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not found</h1>')
    res.status(401).sendFile(path.join(__dirname,'views','404.html'))
})

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello From Express ! </h1>');
// });
const server = http.createServer(app);

server.listen(3000);
