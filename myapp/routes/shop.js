var express = require('express');
var router = express.Router();
//var itemList = require('../items.json');
const Items = require('./model.js');

/* GET shop page. */
router.get('/',function(req,res,next){
  Items.find().then(data => {
    res.render('shop', {shop:'active', items : data });
}).catch(err => {
    console.log( err.message || "Some error occurred while retrieving notes.");
});
  });

  // const item = new Items(
  //       {
  //           name: "Pen",
  //           sku: 90078601,
  //           qty: 10,
  //           price: 250,
  //           status: "Shipped"
  //         }
  //   );
  //   item.save().then(()=>{
  //     console.log('Save ho gaya');
  //   });
    module.exports = router;
