var User = require('../users/userModel.js');
var list = require('../achievements/achievementList.js');

module.exports = {
  getAchievements: function(req, res) {
    var user_id = req.params.user_id;

    User.findOne({ auth_id: user_id })
      .then(function(user) {
        var achievements = user.achievements;
        res.status(200).json(achievements);
      });
  },

  // addAchievement: function(req, res) {
  //   var user_id = req.params.user_id;

  //   User.findOne({ auth_id: user_id })
  //     .then(function(user) {
  //       for(var i = 0; i < user.achievements.length; i++) {
  //         if (user.achievements[i].name !== achievement.name) {
  //           user.achievements.push(achievement);
  //           user.save();
  //         }
  //       }
  //       res.status(201).json(user.achievements);
  //     });
  // },

  check: function(user) {
    for (var i = 0; i < list.achievements.length; i ++) {
      var achievement = list.achievements[i];
      console.log(achievement.target, user[achievement.target], achievement.quantity)
      if (user[achievement.target] >= achievement.quantity) {
        if (!user.achievements.length) {
          user.achievements.push(achievement);
        } else {
          for (var i = 0; i < user.achievements.length; i++) {
            if (user.achievements[i].name !== achievement.name) {
              var newAcchievement = {
                name: achievement.name,
                icon: achievement.icon,
                description: achievement.description,
              };
              user.achievements.push(newAchievement);
              console.log('current achievements ', user.achievements);
            }
          }
        }
      }
    }

  },
};