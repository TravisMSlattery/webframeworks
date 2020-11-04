const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true
    },
    year: {
        type: Number,
        required: true
    },
    // Completed or not
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Movie', MovieSchema)