angular
  .module('app.goalEdit')
  .controller('GoalEditInstanceCtrl', GoalEditInstanceCtrl);
  
GoalEditInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];

function GoalEditInstanceCtrl($scope, $uibModalInstance) {

  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
};
