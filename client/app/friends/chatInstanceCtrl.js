angular
  .module('app.chat')
  .controller('ChatInstanceCtrl', ChatInstanceCtrl);
  
ChatInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'Socket'];
  
function ChatInstanceCtrl($scope, $uibModalInstance, Socket) {

  $scope.messages = [];

  $scope.sendMessage = function(message) {
    console.log(message);
    if (message != false) {
      console.log('YOUGOTINSIDE!');
      Socket.emit('message', {message: message});
      $scope.messages.push(message);
    console.log($scope.messages)
    }

    $scope.privateMessage = '';
  };

  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
}
