var express = require('express');
var router = express.Router();
//var item = require('../items.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' ,{home : 'active'});
});
// /* GET shop page. */
// router.get('/shop',function(req,res,next){
//   res.render('shop',{shop : 'active',
//    items : item
//   //[{
//   //   id: 21,
//   //   name: 'Laptop',
//   //   sku: 'Some SKU',
//   //   qty: 2,
//   //   price: 250,
//   //   status: 'Shipped',
//   //  },
// //   {
// //     id: 22,
// //   name: 'Mobile',
// //   sku: '123',
// //   qty: 2,
// //   price: 250,
// //   status: 'Shipped'
// // }]
// });
// });
/* GET manage users page. */
// router.get('/admin/user',function(req,res,next){
//   res.render('user',{user : 'active'});
// });
// /* GET manage items page. */
// router.get('/admin/item',function(req,res,next){
//   res.render('item' ,{item : 'active',
//   items : item
// });
// });
// /* GET manage order page. */
// router.get('/admin/orders',function(req,res,next){
//   res.render('orders',{orders : 'active'});
// });

module.exports = router;
