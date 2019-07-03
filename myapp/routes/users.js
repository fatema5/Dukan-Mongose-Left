var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.redirect('index');
  //res.render('index');
});
// router.get('/shop', function(req,res,next){
//   res.render('shop')
// });
// router.get('/admin/user',function(req,res,next){
//   res.render('user');
// });
// router.get('/admin/orders',function(req,res,next){
//   res.render('orders');
// });
module.exports = router;
// module.exports = {
//   url: 'mongodb+srv://Anonymous:genuine123@cluster0-zkmmw.mongodb.net/test?retryWrites=true&w=majority'

//   //'mongodb://localhost:27017/dukan'
// }