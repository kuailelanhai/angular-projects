'use strict';
angular.module('mywishApp')
    .controller('Active_listboxCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.creat="创建活动";
        $scope.go_creat=function(){
            console.log("?????")
            $location.path('/creat_active_with')
        }

    });

var messages=JSON.parse(localStorage.getItem('messages')) || [];
