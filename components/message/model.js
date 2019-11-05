const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: { 
        type: Schema.ObjectId,
        ref:'users'
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    debug: Boolean
})

const model = mongoose.model('Message', mySchema);

module.exports = {
    model
};


