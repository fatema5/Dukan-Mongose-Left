var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose.connect('mongodb+srv://Anonymous:genuine123@cluster0-zkmmw.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
const itemlist = new Schema({
    id: Number,
    name: String,
    sku: Number,
    qty: Number,
    price: Number,
    status : String
    //content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Items', itemlist);
