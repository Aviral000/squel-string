const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Document', documentSchema);