const mongoose = require('mongoose')
const Schema = mongoose.Schema

 const StartUp = new Schema(
     {
         name: { type: String, required: true },
         country: { type: String, required: true },
    },
    { timestamps: true }
 )
 
module.exports = mongoose.model('startUps', StartUp)