const mongoose = require('mongoose')

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB)
.then((con)=>{
console.log('DB connected for users')
// console.log(con.connections)
})
.catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true
    }
});

let User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User
