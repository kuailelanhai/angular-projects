'use strict';
angular.module('mywishApp')
    .controller('Creat_active_returnCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.creat_return="返回";
        $scope.go_creat_return=function(){
            $location.path('/active_listbox')
        }
    });
