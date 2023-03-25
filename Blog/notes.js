const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const notesBlog = new Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  time:{type:Date,default:Date.now()},
//   email:{type:String}
});

const note = mongoose.model('Note',notesBlog)
module.exports = note