const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  uni: {
    type: String,
    required: true
  },
  field: {
    type: String,
    required: true
  },
  gradYear: {
    type: String,
    required: true
  },
})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', schema)