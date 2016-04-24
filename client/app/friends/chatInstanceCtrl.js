angular
  .module('app.chat')
  .controller('ChatInstanceCtrl', ChatInstanceCtrl);
  
ChatInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'Socket', 'auth', 'Profile', 'current'];
  
function ChatInstanceCtrl($scope, $uibModalInstance, Socket, auth, Profile, current) {
  $scope.messages = [];
  $scope.chatFriend = current;

  $scope.sendMessage = function(message) {
    if (message != false) {
      Socket.emit('message', {username: $scope.profile.nickname, friend: $scope.chatFriend, message: message});
    }
    $scope.privateMessage = '';
  };

  Socket.on('message', function(data) {
    if (($scope.chatFriend === data.friend || $scope.chatFriend === data.username)
      && ($scope.profile.nickname === data.username || $scope.profile.nickname === data.friend)) {
      $scope.messages.push(data);
    };
  });

  auth.profilePromise.then(function(profile) {
    $scope.profile = profile;
  });

  $scope.ok = function() {
    $uibModalInstance.close();
  };

};
