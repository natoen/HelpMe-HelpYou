var User = require('../users/userModel.js');
var list = require('../achievements/achievementList.js');

module.exports = {

  check: function(user) {
    for (var i = 0; i < list.achievements.length; i ++) {
      var achievement = list.achievements[i];
      if (user[achievement.target] >= achievement.quantity) {
        var newAchievement = {
          name: achievement.name,
          icon: achievement.icon,
          description: achievement.description,
        };
        var found = false;
        for (var j = 0; j < user.achievements.length; j++) {
          if (user.achievements[j].name === newAchievement.name) {
            found = true;
          }
        }
        if (!found) {
          user.achievements.push(newAchievement); 
        }
      }
    }

  },
};