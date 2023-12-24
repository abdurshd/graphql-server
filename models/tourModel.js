const mongoose = require('mongoose')

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB)
.then((con)=>{
console.log('DB connected for the tours')
// console.log(con.connections)
})
.catch((err)=>console.log(err))

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true
    },
    maxGroupSize: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    ratingsAverage: {
        type: Number,
        default: 0
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageCover: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    startDates: {
        type: [String],
        required: true
    }
});

let Tour = mongoose.models.Tour || mongoose.model('Tour', tourSchema);

module.exports = Tour

