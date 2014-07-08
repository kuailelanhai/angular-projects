'use strict';

/**
 * @ngdoc function
 * @name mywishApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mywishApp
 */
angular.module('mywishApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
