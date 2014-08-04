//'use strict';
//angular.module('partyBidApp')
//    .controller('Active_listboxCtrl', function ($scope, $location) {
//        $scope.awesomeThings = [
//            'HTML5 Boilerplate',
//            'AngularJS',
//            'Karma'
//        ];
//        $scope.creat = "创建活动";
//        $scope.go_creat = function () {
//            $location.path('/main')
//
//        }
//        $scope.bm = function (actname) {
//            $location.path('/creat_active')
//            localStorage.working_activity = actname;
//        }
//
//
//        function a() {
//            $scope.list1 = JSON.parse(localStorage.getItem("messages"))||[];
//            console.log($scope.list1);
//        }
//        a();
//        var b=JSON.parse(localStorage.getItem("messages"))||[];
//        for(var i in b){
//            if (b[i].actname == localStorage.working_activity) {
//                console.log('-------------------')
//            for(var j in b[i].bid_data) {
////                $scope.bids=b[i].bid_data
//                $scope.bid = b[i].bid_data[j]
//                if (b[i].bid_data[0].bid_status1 == "false") {
////                if (b[i].actname == localStorage.working_activity) {
////                    if (b[i].bid_data[0].bid_status1 == "false") {
//                        $scope.bid.bid_color = "true"
//                    }
//                    else {
//                        $scope.bid.bid_color = "false"
//                    }
//                }
//            }
//        }
//
//
//    });
'use strict';
angular.module('partyBidApp')
    .controller('Active_listboxCtrl', function ($scope,$location) {
        $scope.bid = Activity.judge_actname_wactivity
        if(Activity.judge_actname_wactivity.bid_status11 == "false"){
            $scope.bid.bid_color = "true"
        }
        else{
            $scope.bid.bid_color = "false"
        }
        $scope.creat = "创建活动";
        $scope.go_creat = function () {
            $location.path('/main')

        }
        $scope.bm = function (actname) {
            $location.path('/creat_active')
            localStorage.working_activity = actname;
        }
        function a() {
            $scope.list1 = JSON.parse(localStorage.getItem("messages"))||[];
            console.log($scope.list1);
        }
        a();
    })

















/**
 * Created by tlt on 14-6-21.
 */
//angular.module('angularApp')
//    .controller('Active_listboxCtrl', function ($scope, $location) {
//        $scope.bm = function (actname) {
//            $location.path('/creat_active')
//            Activity.save_click_activity(activity)
//        }
//        $scope.list1 = Activity.get_activities()
//        if (!Activity.check_activity_list_exist()) {
//            $location.path('/main')
//        }
//    }
//)















