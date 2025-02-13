const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    itemName:{
        type: String
    },
    price:{
        type: Number
    },
    quantity:{
        type: Number
    }
})

const Menu = mongoose.model("Menu",menuSchema);
module.exports = Menu;