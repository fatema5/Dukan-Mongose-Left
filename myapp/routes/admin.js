var express = require('express');
var router = express.Router();
//var itemList = require('../items.json');
//const fs = require('fs');
const mongoose = require('mongoose');
const Items = require('./model.js');
const bodyParser = require('body-parser');

// function editFile() {
//   fs.writeFile('items.json', JSON.stringify(itemList, null, '\t'), 'utf8',
//       function(err) {
//         if (err) throw err;
//       });
// };

router.get('/admin', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET manage users page. */
router.get('/user',function(req,res,next){
    res.render('admin/user',{user : 'active'});
  });
  /* GET manage items page. */
  router.get('/item',function(req,res,next){
    Items.find().then(data => {
        res.render('admin/item' ,{item : 'active', items : data });
    }).catch(err => {
        console.log( err.message || "Some error occurred while retrieving notes.");
    });    
  });

  // router.get('/item',function(req,res,next){
  //   item.find().then(item => {
  //     res.render('admin/item' ,{item : 'active',
  //   items: itemList
  // }).catch(err => {
  //     res.status(500).send({
  //         message: err.message || "Some error occurred while retrieving notes."
  //     });
  //   });
//   Items.create = (req, res) => {
//     // Validate request
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "item content can not be empty"
//         });
//     }

//     // Create an item
//     const item = new Items({
//         id: req.body.id || "Untitled Note", 
//         name: req.body.name,
//         sku: req.body.sku,
//         price: req.body.price

//     });

//     // Save item in the database
//     Items.save()
//     .then(data => {
//         res.render('/item')
//         //res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Note."
//         });
//     });
// };
// Items.find = (req, res) => {
//     Items.find()
//     .then(itemList => {
//         //res.send(itemList);
//         res.render('admin/item')
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving items."
//         });
//     });
// };
//router.get('/item/:itemId',function(req,res,next){
  //  res.render('admin/item' ,{item : 'active',
  //  items: itemList
  // });
  //});
  // router.post('/item',function(req,res,next){
  // itemList.push(req.body);
  // editFile();
  // res.redirect('/admin/item');
  // });
router.post('/item',function(req,res,next){
  //   if(!req.body.content) {
  //     return res.status(400).send({
  //         message: "Item content can not be empty"
  //     });
  // }
  // Create a Item
  const item = new Items({
      sku: req.body.sku , 
      name: req.body.name,
      price: req.body.price,
  });
  // Save Item in the database
  item.save()
  .then(data => {
    res.redirect('/admin/item',{items : data});
  }).catch(err => {
      console.log(err || "Some error occurred while creating the item.")
      });
    });

//update
router.get('admin/item/edit/:id',function(req,res,nesxt){
// Find note and update it with the request body
Items.findByIdAndUpdate(req.params.id, {
    sku: req.body.sku,
    name: req.body.name,
    price: req.body.price,
}, {new: true})
.then(items => {
    if(!items) {
        return res.status(404).send({
            message: "Item not found with id " + req.params.id
        });
    }
    res.send(items);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Note not found with id " + req.params.id
        });                
    }
    return res.status(500).send({
        message: "Error updating note with id " + req.params.id
    });
});
});

//deleting
  router.delete('admin/item/delete/:id',function(req,res,next){
    //console.log(req);
    Items.findByIdAndRemove(req.params.id)
    .then(data => {
        // if(!item) {
        //     return res.status(404).send({
        //         message: "Item not found with id " + req.params.id
        //     });
        // }
        res.redirect('/admin/item',{items : data});
        //res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "item not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
  }); 
  // router.delete('/item/delete/:num', function(req,res,next){
  //   itemList = itemList.filter(function(item){
  //     return item.sku !== req.params.num;
  //   });
  //   editFile();
  //   res.redirect('/admin/item');
  // });

  
  /* GET manage order page. */
  router.get('/orders',function(req,res,next){
    res.render('admin/orders',{orders : 'active'});
  });

  module.exports = router;

