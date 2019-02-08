angular.module('drControllers')
.controller('sliderCtrl', function($scope) {
  $scope.slider = {
    value: 50,
    options: {
      floor: 0,
      ceil: 100,
      minLimit: 1,
      maxLimit: 100,
      onEnd: function() {
        console.log($scope.slider.value);
      }
    }
  };

});
