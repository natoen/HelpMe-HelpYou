angular
  .module('app.goalEdit')
  .controller('GoalEditInstanceCtrl', GoalEditInstanceCtrl);
  
GoalEditInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'goal'];

function GoalEditInstanceCtrl($scope, $uibModalInstance, goal) {

  $scope.goal = goal;

  $scope.ok = function() {
    $uibModalInstance.close($scope.goal);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
};
