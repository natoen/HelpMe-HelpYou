var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AchievementSchema = new Schema({
  title: { type: String, required: true },
},
{
  timestamps: true
});

module.exports = AchievementSchema;