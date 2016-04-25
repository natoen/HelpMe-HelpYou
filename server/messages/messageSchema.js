var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  username: { type: String },
  friend: { type: String },
  message: { type: String },
  createdAt: { 
    type: Date,
    default: Date.now 
  }
});

module.exports = mongoose.model('Message', messageSchema);