const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Please add a username'],
      unique: true, // `user` must be unique
    },
    pass: {
      type: String,
      required: [true, 'Please add a Password'],
    },
    cities:[String],
  }, { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);