angular
  .module('app.profileEdit')
  .controller('ProfileFormCtrl', ProfileFormCtrl);

ProfileFormCtrl.$inject = ['$scope', '$uibModalInstance', 'auth', 'Profile'];

function ProfileFormCtrl($scope, $uibModalInstance, auth, Profile) { 
  $scope.newName = '';

  auth.profilePromise.then(function(profile) {
    $scope.profile = profile;
    $scope.user_id = $scope.profile.user_id;
  });

  $scope.ok = function() {
    // splits newName into first and last name
    var name = $scope.newName.split(' ');
    if(name.length === 1){
      $scope.newFirstName = name[0];
    } else {
      $scope.newLastName = name.splice(name.length-1, 1)[0];
      $scope.newFirstName = name.join(' ');
    }
    
    var newUserData = {
      firstname: $scope.newFirstName,
      lastname: $scope.newLastName
    };
    
    Profile.setProfile($scope.user_id, newUserData);
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
}
