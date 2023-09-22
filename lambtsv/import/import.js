const fs = require("fs");
const student = require('./../models/studentMd')
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/data.json`)
);
const importData= async(req,res)=>{
    try{
         await student.create(data)
         process.exit()
       
    }catch(error){
       console.log('Erro',error)
    }
}
module.exports = importData