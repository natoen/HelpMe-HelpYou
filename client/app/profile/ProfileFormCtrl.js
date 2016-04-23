angular
  .module('app.profileEdit')
  .controller('ProfileFormCtrl', ProfileFormCtrl);

ProfileFormCtrl.$inject = ['$scope', '$uibModalInstance', 'items'];

function ProfileFormCtrl($scope, $uibModalInstance, items) {
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function() {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
}