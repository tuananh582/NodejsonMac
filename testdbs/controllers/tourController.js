const Tour= require('./../modules/tourModule')
exports.getAlltour=(req,res)=>{
        res.status(200).json({
            status:'Success'
        })
}
exports.createTour= async (req,res)=>{
        try{
            const newTour = await Tour.create(req.body)
            res.status(201).json({
                status:'SuccessFully',
                data:newTour,
            })
            console.log('Oke')
        }catch(err){
            res.status(400).json({
                status:'Failed'
            })
        }  
}