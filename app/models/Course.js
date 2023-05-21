const { default: mongoose } = require("mongoose")

const CourseSchema = new mongoose.Schema({
    title:{type:String,require:true},
    fee:{type:Number,require:true},
    discount_fee:{type:Number,require:true,default:0.0},
    description:{type:String},
    duration:{type:Number,require:true,default:0}
})

module.exports = mongoose.models.Course || mongoose.model("Course",CourseSchema)