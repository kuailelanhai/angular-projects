'use strict';
angular.module('partyBidApp')
    .controller('Creat_listCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.recreat="创建";
        $scope.go_register=function(){
            $location.path('/active_listbox')
            var list=localStorage.getItem("message");
            console.log(list)
        }
    });
