const tourControlle = require("./../controllers/tourcontrollers");
exports.checkId = (req, res, next, val) => {
  console.log(`Tour is is : ${val}`);
  if (req.params.id * 1 > tourControlle.tours) {
    return res.status(404).json({
      status: "Fail",
      message: "Invaild ID",
    });
}
  next();
};
// exports.checkBody=(req,res,next)=>{
//     if(!req.body.name||!req.body.price){
//         return res.status(400).json({
//             status:'Fail',
//             message:'Missing name or price'
//         })
//     }
//     next();
// }
