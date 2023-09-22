const fs = require('fs')
const student= require('./../models/studentMd')
exports.data= JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`))
exports.createStudent= async(req,res)=>{
    try{
        const newStudent = await student.create(req.body)
       
        // const newCreateStudent=Object.assign({ID:String(newID)},req.body)
        // fs.writeFile(`{${__dirname}/../data/data.json}`, JSON.stringify(newCreateStudent)  )

            res.status(201).json({
                status: "Success",
                data: {
                    newStudent
                },
              });
      
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err,
          });
    }
}
exports.readStudent= async (req,res)=>{
    try{
        const readStudent= await student.find();
        res.status(201).json({
            status: "Success",
            data: {
                readStudent
            },
          });
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err,
          });
    }
}
exports.updateStudent = async (req,res)=>{
    try{
        const updateStudent = await student.findByIdAndUpdate(req.params.id,req.body,{
           new:true,
           runValidators:true 
        });
        res.status(201).json({
            status: "Success",
            data: {
                updateStudent
            },
          });
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err,
          });
    }
}
exports.delete=async(req,res)=>{
    try{
        const deleteStudent = await student.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "Success",
            data:null
          });
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err,
          });
    
    }
}