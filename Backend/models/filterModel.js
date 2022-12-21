const {Schema, model, Types} = require('../connection');

// defining the structure of Model
const myschema = new Schema({
    name : String,
    image : String,
    values : Array,
    createdBy : {type : Types.ObjectId,ref : 'users'}
})

// defining the name of model
module.exports = model('filters', myschema);