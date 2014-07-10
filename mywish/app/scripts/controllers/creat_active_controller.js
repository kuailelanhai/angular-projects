'use strict';
angular.module('mywishApp')
    .controller('CreatActiveCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return="返回";
        $scope.go_return=function(){
            alert("sss")
            $location.path('/active_listbox')
        }
    });