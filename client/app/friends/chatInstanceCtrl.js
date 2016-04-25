angular
  .module('app.chat')
  .controller('ChatInstanceCtrl', ChatInstanceCtrl);
  
ChatInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'Socket', 'auth', 'Profile', 'current'];
  
function ChatInstanceCtrl($scope, $uibModalInstance, Socket, auth, Profile, current) {
  $scope.messages = [];
  $scope.chatFriend = current;
  $scope.msgNotLoaded = true;

  $scope.sendMessage = function(message) {
    if (message != false) {
      Socket.emit('message', {username: $scope.profile.nickname, friend: $scope.chatFriend, message: message});
    }
    $scope.privateMessage = '';
  };

  Socket.on('message', function(data) {
    if (($scope.chatFriend === data.friend || $scope.chatFriend === data.username) &&
        ($scope.profile.nickname === data.username || $scope.profile.nickname === data.friend)) {
      $scope.messages.push(data);
    }
  });

  Socket.on('loadMessage', function(data) {
    if ($scope.msgNotLoaded) {
      $scope.messages.push(data);
    }
  });

  Socket.on('msgNotLoaded', function(data) {
    $scope.msgNotLoaded = data;
  });

  auth.profilePromise.then(function(profile) {
    $scope.profile = profile;
    Socket.emit('loadMessages', { username: $scope.profile.nickname, friend: $scope.chatFriend});
  });

  $scope.ok = function() {
    $uibModalInstance.close();
  };

}
