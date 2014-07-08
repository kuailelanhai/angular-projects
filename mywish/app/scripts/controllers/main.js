'use strict';

/**
 * @ngdoc function
 * @name mywishApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywishApp
 */
angular.module('mywishApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
