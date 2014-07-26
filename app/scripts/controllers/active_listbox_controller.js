'use strict';
angular.module('partyBidApp')
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
        var b=JSON.parse(localStorage.getItem("messages"))||[];
        for(var i in b){
            if (b[i].actname == localStorage.working_activity) {
                console.log('-------------------')
            for(var j in b[i].bid_data) {
//                $scope.bids=b[i].bid_data
                $scope.bid = b[i].bid_data[j]
                if (b[i].bid_data[0].bid_status1 == "false") {
//                if (b[i].actname == localStorage.working_activity) {
//                    if (b[i].bid_data[0].bid_status1 == "false") {
                        $scope.bid.bid_color = "true"
                    }
                    else {
                        $scope.bid.bid_color = "false"
                    }
//                $scope.bids=b[i].bid_data
                }
            }
        }


    });