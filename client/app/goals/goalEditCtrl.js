angular
  .module('app.goalEdit', [])
  .controller('GoalEditController', GoalEditController);

GoalEditController.$inject = ['$scope', '$uibModal', '$log'];

function GoalEditController($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;

  $scope.open = function() {
    console.log('open me plz');
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'edit.html',
      controller: 'GoalEditInstanceCtrl',
      // resolve: {
      //   items: function() {
      //     return $scope.items;
      //   }
      // }
    });
  };

  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
};
