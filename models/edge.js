const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const edgeSchema = new Schema({
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

module.exports = mongoose.model('edge', edgeSchema);