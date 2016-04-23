angular
  .module('app.goalEdit', [])
  .controller('GoalEditController', GoalEditController);

GoalEditController.$inject = ['$scope', '$uibModal', '$log', 'Goals', 'Profile'];

function GoalEditController($scope, $uibModal, $log, Goals, Profile) {

  $scope.animationsEnabled = true;

  $scope.open = function(goal, userId) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'edit.html',
      controller: 'GoalEditInstanceCtrl',
      resolve: {
        goal: function() {
          return goal;
        }
      }
    });

    //do something when the modal closes!
    modalInstance.result.then(function(goal) {
      Goals.updateGoal(userId, goal)
      .then(function(data) {
        $scope.$parent.getGoals();
        var post = {
          post: 'I updated my goal!',
          goal_id: goal._id
        };
        Profile.addPost(userId, post);
      });
    }, function() {
      //modal dismissed
    });
  };


  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
};
