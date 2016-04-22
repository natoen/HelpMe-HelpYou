angular
  .module('app.chat', [])
  .controller('ChatController', ChatController);

ChatController.$inject = ['$scope', 'Socket', '$uibModal', '$log'];

function ChatController($scope, Socket, $uibModal, $log) {
  Socket.connect();

  $scope.$on('$locationChangeStart', function(event) {
    Socket.disconnect(true);
  });

  $scope.animationsEnabled = true;

  $scope.open = function(size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'chat.html',
      controller: 'ChatInstanceCtrl',
      size: size
    });
  };

  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
};
