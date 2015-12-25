angular.module('starter', ['ionic', 'ionic.wheel'])

.controller('MainCtrl', function($scope, $timeout) {

  var circles;

  $timeout(function() {
    circles = document.querySelectorAll('ion-wheel-item');
  });

  $scope.circlesHidden = true;

  $scope.showCircles= function() {
    var $circles = angular.element(circles);
    if ($scope.circlesHidden) {
      $circles.addClass('active');
    } else {
      $circles.removeClass('active');
    }
    $scope.toggleCirclesHidden();
  };

  $scope.toggleCirclesHidden = function() {
    return $scope.circlesHidden = !$scope.circlesHidden;
  };

});
