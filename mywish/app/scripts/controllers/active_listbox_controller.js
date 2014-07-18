'use strict';
angular.module('mywishApp')
    .controller('Active_listboxCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.creat = "创建活动";
        $scope.go_creat = function () {
            $location.path('/main')

        }
        $scope.bm = function (actname) {
            $location.path('/creat_active')
            localStorage.working_activity = actname;
            //       console.log(localStorage.current_activity)
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
        function a() {
            $scope.list1 = JSON.parse(localStorage.getItem("messages"))||[];
            console.log($scope.list1);
        }
        a();


    });


