// //How middleware works
// app.use(function(req,res,next){
//     //console.log(Date.now());
//     req.name = 'Sagar T';
//     next();
// })
// //Index Route
// app.get('/',(req, res) =>{
//     console.log(req.name);
//     res.send(req.name);
// })
WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.