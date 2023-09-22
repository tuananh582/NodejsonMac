const fs= require('fs')
const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.js`))
const student= require('./../controllers/studentCl')
const dataId=data.id*1
exports.Checkid= (req,res,next)=>{
    if(req.params.id*1===dataId){
        
    }
}