'use strict';
angular.module('mywishApp')
    .controller('Active_listboxCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        alert("sss")
        $scope.creat="创建活动";
        $scope.go_creat=function(){
            console.log("?????")
            $location.path('/creat_active_with')
        }
//        $scope.main = function () {
//            $location.path('main')
//        };
//        $scope.messages = JSON.parse(localStorage.getItem('messages'))
//        if (!localStorage.getItem("messages")) {
//
//            $location.path('main')
//        }
//        var apply = JSON.parse(localStorage.getItem('messages'))

           alert("sss")
        function a(){
            $scope.list1=JSON.parse(localStorage.getItem("messages"));
            console.log($scope.list1);
//            console.log($scope.list)
        }
            a();






    });


