angular
  .module('app.chat')
  .controller('ChatInstanceCtrl', ChatInstanceCtrl);
  
ChatInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'Socket', 'auth', 'Profile'];
  
function ChatInstanceCtrl($scope, $uibModalInstance, Socket, auth, Profile) {
  $scope.messages = [];

  $scope.sendMessage = function(message) {
    if (message != false) {
      Socket.emit('message', {username: $scope.profile.nickname, message: message});
    }
    $scope.privateMessage = '';
  };

  Socket.on('message', function(data) {
    $scope.messages.push(data);
    console.log($scope.messages)
  });

  auth.profilePromise.then(function(profile) {
    $scope.profile = profile;
  });

  $scope.ok = function() {
    $uibModalInstance.close();
  };

};
