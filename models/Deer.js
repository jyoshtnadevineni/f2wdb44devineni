const mongoose = require("mongoose")
const DeerSchema = mongoose.Schema({
Deer_Name: String,
Deer_size: Number,
Deer_type: String
})
module.exports = mongoose.model("Deer",DeerSchema)