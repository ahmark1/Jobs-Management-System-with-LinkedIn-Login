const mongoose = require('mongoose')

const jobSchema = mongoose.Schema(
  {
    jobname: {
      type: String,
      required: [true, 'Please add a username'],
      unique: true, // `user` must be unique
    },
    description: {
      type: String,
      required: [true, 'Please add a Password'],
    },
}
)

module.exports = mongoose.model('Job', jobSchema);