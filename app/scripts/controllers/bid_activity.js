/**
 * Created by guorui on 14-7-23.
 */
//'use strict';
//angular.module('partyBidApp')
//    .controller('Bid_activityCtrl', function ($scope,$location) {
//        $scope.awesomeThings = [
//            'HTML5 Boilerplate',
//            'AngularJS',
//            'Karma'
//        ];
//        $scope.by="返回";
//        $scope.go_by=function(){
//            $location.path('/active_listbox')
//        }
//        $scope.jj=function(bid_name){
//            $location.path('/bid_list')
//            localStorage.working_bid = bid_name;
//        }


        /**
         * Created by voctor on 14-6-17.
         */
//        'use strict';
//        angular.module('partyBidApp')
//            .controller('Bid_activityCtrl',function ($scope,$routeParams,$location) {
//                $scope.by="返回";
//                $scope.go_by=function(){
//                    $location.path('/active_listbox')
//                }
//                $scope.jj=function(bid_name){
//                    $location.path('/bid_list')
//                    localStorage.working_bid = bid_name;
//                }
//                Bid.save_bid_status_bid_message()
//                Bid.judge_check_bid_status($scope)
//                $scope.bids = Bid.check_current_activity_bid_list()
//                Bid.judge_check_activity_status_length($scope)
//                $scope.jj = function (bid_name) {
//                    $location.path('/bid_list')
//                    localStorage.working_bid = bid_name
//                }
//                $scope.activity_name=$routeParams.activity_name;
////                Bid.save_current_activity($scope.activity_name);
////                $scope.begin=Bid.is_bid_able($scope.activity_name);
////                $scope.bids=Bid.get_bid_list($scope.activity_name);
//                $scope.activities=Activity.get_activity_list();
//
//                $scope.start=function () {
//                    Bid.save_bid_start_status($scope.activity_name);
//                    var bid_name=Bid.save_bid_status_bid_message()
//                    var bid_info=new Bid(bid_name);
//                    bid_info.add_bid_info($scope.activity_name);
//                    $location.path('/bid_list');
////                    $location.path('/bid_list'+bid_name);
//                    Bid.save_bid_status_bid_message()
//                }
//
//            });


////        $scope.start_bid=localStorage.getItem(("bid_status"))
//        var bid_status2="false"
//        var bid_color1="false"
//        $scope.start=function() {
////        localStorage.bid_status='true'
//        var active = JSON.parse(localStorage.getItem("messages"))
//        for (var i in active) {
//
//            if (active[i].actname == localStorage.working_activity) {
//                active[i].bid_status="true"
//                if (active[i].bid_data.length == 0) {
//                    var bid_name = "竞价1"
//                    console.log(bid_name)
//                }
//                else {
//                    var number=1
//                    var number=active[i].bid_data.length+1
//                    var bid_name = "竞价" + number
//                    console.log(bid_name)
//                }
////                for(var k in acitve[i].bid_data)
////                {
////                    bid_status2="true"
////                }
//                for(var k in active[i].bid_data){
//                    if(active[i].bid_data[0].bid_name==localStorage.working_bid) {
//                        active[i].bid_data[k].bid_status1="true"
//                        $scope.switch="false"
//
//                    }
//                }
//                var bid_data = {'bid_name': bid_name,'bid_status1':bid_status2,'bid_color':bid_color1,'bid_list':[]}
//                console.log("bid_data")
//                active[i].bid_data.unshift(bid_data)
//                localStorage.setItem('messages', JSON.stringify(active))
//               var a= JSON.parse(localStorage.getItem("messages"))||[];
//                for(var j in a) {
////                    if(a[j].actname==localStorage.working_activity){
//                    console.log(a[j].bid_data)
//                    $scope.bids = a[j].bid_data
////                for(j in bid_status)
//                $scope.bids=active[i].bid_status[j].bid_name
//                }
//            }
//        }
//            for(var c in active){
//                for(var d in active[c].bid_data) {
//                    localStorage.working_bid=active[c].bid_data[0].bid_name
//                        $location.path('/bid_list')
//                }
//            }
////            for(var l in active){
////                if(active[l].actname==localStorage.working_activity) {
////                    active[l].activity_status = "true"
////                }
////            }
//            for(var o in active){
//                for(var p in active[o].bid_data){
//                    if(active[o].bid_data[p].bid_status1=="false") {
//                        console.log('-------------------111111113')
//                        active[o].bid_data[p].bid_color = "true"
//                        localStorage.setItem('messages', JSON.stringify(active))
//                        return
//                    }
//                    else{
//                        active[o].bid_data[p].bid_color = "false"
//                        localStorage.setItem('messages', JSON.stringify(active))
//                        return
//                        console.log('=======================2222222222222222')
//                    }
//                }
//            }
//    }
////        var action=JSON.parse(localStorage.getItem("messages"))
////        for(var i in action)
////        if($scope.start()){
////            if(action[i])
////        }
//        var b=JSON.parse(localStorage.getItem("messages"))||[];
//        for(var i in b){
//            for(var j in b[i].bid_data){
//                if(b[i].bid_data[j].bid_name == localStorage.working_bid) {
//                    if (b[i].bid_data[j].bid_status1 == "false") {
//                        $scope.begin = true
//                        b[i].bid_data[j].bid_color = "true"
//                        console.log('++++++++')
//                    }
//                    else {
//                        $scope.begin = false
//                        b[i].bid_data[j].bid_color = "false"
//                    }
//                }
//            }
//        }
//        var o=JSON.parse(localStorage.getItem("messages"))||[];
//        for(var i in o){
//            for(var j in o[i].bid_data){
//                if(o[i].bid_data[j].bid_status1=="false"){
//                    $scope.switch=false
//                }
//            }
//        }
//        var a= JSON.parse(localStorage.getItem("messages"))||[];
//        for(var j in a) {
//            for(var u in a[j].bid_data) {
//                console.log(a[j].bid_data)
//                if (localStorage.working_activity == a[j].actname) {
//                    $scope.bids = a[j].bid_data
//                    a[j].bid_data[u].bid_status1="false"
//
//                }
//            }
//        }
//
//
//
//
//
//
//
//            });

'use strict';
angular.module('partyBidApp')
    .controller('Bid_activityCtrl',function ($scope,$routeParams,$location) {
        $scope.by="返回";
        $scope.go_by=function(){
            $location.path('/active_listbox')
        }
        $scope.jj=function(bid_name){
            $location.path('/bid_list')
            localStorage.working_bid = bid_name;
        }
        Bid.judge_check_bid_status($scope)
        $scope.bids = Bid.check_current_activity_bid_list()
        Bid.judge_check_activity_status_length($scope)
        $scope.jj = function (bid_name) {
            $location.path('/bid_list')
            localStorage.working_bid = bid_name
        }
        $scope.activity_name=$routeParams.activity_name;
//                Bid.save_current_activity($scope.activity_name);
//                $scope.begin=Bid.is_bid_able($scope.activity_name);
//                $scope.bids=Bid.get_bid_list($scope.activity_name);
        $scope.activities=Activity.get_activity_list();

        $scope.start=function () {
            Bid.save_bid_start_status($scope.activity_name);
            var bid_name=Bid.save_bid_status_bid_message
//            var bid_info=new Bid(bid_name);
//            bid_info.add_bid_info($scope.activity_name);
            console.log(Bid.save_bid_status_bid_message)
            console.log('+++++')
            var a = JSON.parse(localStorage.getItem("messages"));
            $location.path('/bid_list');
            $scope.bids = bid_name
//                    $location.path('/bid_list'+bid_name);
            Bid.save_bid_status_bid_message()
        }

    });


//angular.module('angularApp')
//    .controller('Bid_activityCtrl', function ($scope, $location) {
//        $scope.awesomeThings = [
//            'HTML5 Boilerplate',
//            'AngularJS',
//            'Karma'
//        ];
//        Bid.judge_check_bid_status($scope)
//        $scope.bids = Bid.check_current_activity_bid_list()
//        Bid.judge_check_activity_status_length($scope)
//        $scope.jj = function (bid_name) {
//            $location.path('/bid_list')
//            localStorage.working_bid = bid_name
//        }
//        $scope.by="返回";
//        $scope.go_by=function(){
//            $location.path('/active_listbox')
//        }
//        $scope.start = function () {
//            var bid_name=Bid.save_bid_status_bid_message()
//            console.log(Bid.save_bid_status_bid_message())
//            console.log('++++++')
//            $scope.bids=Bid.save_bid_status_bid_message()
////            $location.path('/bid_list')
//            $location.path('/bid_list');
//            Bid.save_bid_status_bid_message()
//        }
//    });
//





















