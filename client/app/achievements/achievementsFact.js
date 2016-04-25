angular
  .module('app.achievements', [])
  .factory('Achievements', Achievements);

// Dependency injection. Done this way for minification purposes.
Achievements.$inject = ['$http'];

function Achievements($http) {

  var obj = {content:null};

  $http.get('app/achievements/achievements.json').success(function(data) {
      // you can do some processing here
      obj.content = data;
  });

  var checkGoals = function(user_id, goalStats) {
    for (var i = 0; i < obj.content.length; i++) {
      var achievement = obj.content[i];
      if (goalStats[achievement.reqs.param] >= achievement.reqs.number) {
        postAward(user_id, achievement);
      }
    }
  };

  var postAward = function (user_id, achievement) {
    return $http({
      method: 'POST',
      url: '/api/achievements/' + user_id,
      data: achievement
    })
    .then(function(res) {
      return res.data;
    });
  };

  return {
    checkGoals: checkGoals,
    postAward: postAward,
  };
}