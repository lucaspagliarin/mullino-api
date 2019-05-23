const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bordaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    addValue: {
        type: Number,
        required: true,
        default: 0.0
    }
})

module.exports = mongoose.model('Borda', bordaSchema);