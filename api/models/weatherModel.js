const mongoose = require('mongoose')

const weatherSchema = mongoose.Schema(
  {
    city: {
        type: String,
        unique: true,
        required: true,
    },
    details: {
        type: Object,
        required: true,
    },
  }
)

module.exports = mongoose.model('Weather', weatherSchema);