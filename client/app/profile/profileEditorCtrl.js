angular
  .module('app.profileEdit', [])
  .controller('ProfileEditorCtrl', ProfileEditorCtrl); 

  ProfileEditorCtrl.$inject = ['$scope', '$uibModal', '$log'];

  function ProfileEditorCtrl($scope, $uibModal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'formEdit.html',
        controller: 'ProfileFormCtrl',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function() {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  }