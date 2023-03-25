const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const notes = new Schema({
  email:{type:String},
  password:{type:String}
});

const login = mongoose.model('Login',notes)
module.exports = login