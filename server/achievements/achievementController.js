var User = require('../users/userModel.js');

module.exports = {
  getAchievements: function(req, res) {
    var user_id = req.params.user_id;

    User.findOne({ auth_id: user_id })
      .then(function(user) {
        var achievements = user.achievements;
        res.status(200).json(achievements);
      });
  },

  addAchievement: function(req, res) {
    var user_id = req.params.user_id;
    var achievement = req.body;

    User.findOne({ auth_id: user_id })
      .then(function(user) {
        user.achievements.push(achievement);
        user.save();
        res.status(201).json(user.achievements);
      });
  },
};