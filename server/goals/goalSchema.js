var mongoose = require('mongoose');
var PostSchema = require('../posts/postSchema.js');

var Schema = mongoose.Schema;

var GoalSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  due_date: { type: Date },
  complete: { type: Boolean, default: false },
  posts: [PostSchema]
},
{
  timestamps: true
});

module.exports = GoalSchema;