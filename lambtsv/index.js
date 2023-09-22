const express = require("express");
const app = express();
const connectDb= require('./config/database')
const router = require('./routes/studentRoute')
const importData = require('./import/import')
app.use(express.json());

connectDb()

importData()


app.use('/api/v1/students',router)
const PORT =3000;
app.listen(PORT,()=>{
    console.log("Sever is running")
})