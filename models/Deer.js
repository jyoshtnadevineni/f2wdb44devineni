const mongoose = require("mongoose")
const DeerSchema = mongoose.Schema({
Deer_Name: {
    type: String, 
    required: true
},
Deer_size: {
    type: Number,
    min:5,max:20, 
    required: true
},
Deer_type: {
    type: String, 
    required: true
},
})
module.exports = mongoose.model("Deer",DeerSchema)