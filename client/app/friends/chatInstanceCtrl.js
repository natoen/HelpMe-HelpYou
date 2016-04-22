angular
  .module('app.chat')
  .controller('ChatInstanceCtrl', ChatInstanceCtrl);
  
  ChatInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];
  
  function ChatInstanceCtrl($scope, $uibModalInstance) {

  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
};
