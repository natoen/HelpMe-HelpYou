angular
  .module('app.profileEdit')
  .controller('ProfileFormCtrl', ProfileFormCtrl);

ProfileFormCtrl.$inject = ['$scope', '$uibModalInstance', 'items', 'Profile'];

function ProfileFormCtrl($scope, $uibModalInstance, items, Profile) {
  $scope.newName = '';
  $scope.newFirstName = '';
  $scope.newLastName = '';

  $scope.ok = function() {
    // splits newName into first and last name
    var name = $scope.newName.split(' ');
    $scope.newLastName = name.splice(name.length-1, 1)[0];
    $scope.newFirstName = name.join(' ');
    Profile.setProfile();
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
}
