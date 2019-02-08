angular.module('drControllers')
.controller('homeCtrl', ['$scope', '$state',
  function($scope, $state) {
     $scope.datepickerOptions ={
       format: 'yyyy-mm-dd',
       language: 'en',
       autoclose: true,
       weekStart: 0
     }
     $scope.date = '2000-03-12';
      console.log("scope.date", $scope.date );
    }
]);
