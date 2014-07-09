'use strict';
angular.module('mywishApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.register="登录";
        $scope.go_register=function(){
            $location.path('/creat_active')
        }
    });
