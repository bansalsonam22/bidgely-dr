angular.module('drControllers')
.controller('loginCtrl', function($scope, $state, $q) {
  $scope.user = null;
  $scope.isError = false;
  $scope.isSuccess = false;
   $scope.submitForm = function () {
      validateUser();
   },
   validateUser = function () {
     var deferred = $q.defer();
     if ($scope.user.userName === 'admin' && $scope.user.password === 'admin') {
       $scope.messageSuccess = "Success";
       $scope.isError = false;
       $scope.isSuccess = true;
       $state.go('dashboard');
     } else {
       $scope.messageError = "Error";
       $scope.isError = true;
       $scope.isSuccess = false;
     }
   }
});
