var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AchievementSchema = new Schema({
  title: { type: String, required: true },
  icon: { type: String },
  description: { type: String },
},
{
  timestamps: true
});

module.exports = AchievementSchema;