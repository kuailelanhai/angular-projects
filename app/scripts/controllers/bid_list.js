/**
 * Created by guorui on 14-7-23.
 */
'use strict';
angular.module('partyBidApp')
    .controller('Bid_listCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return="返回"
        $scope.go_return=function(){
            $location.path('/bid_activity')
        }
        $scope.succeed=function() {
            var active=JSON.parse(localStorage.getItem("messages"));
            var a = JSON.parse(localStorage.getItem('messages'))
            console.log(a)
            for (var i in active) {
//                console.log(active[i].bid_data.bid_name)
//                console.log(localStorage.working_bid)
                for (var j in active[i].bid_data) {
//                    for(var k in active[i].bid_data[j].bid_list)
             //       if (active[i].bid_data[j].name == localStorage.working_bid){
                        $scope.activity_bid = localStorage.working_bid
                    if(active[i].bid_data[j].bid_name==localStorage.working_bid){
                    $scope.people_number1 = active[i].bid_data[j].bid_list.length;
                    $scope.list3 = active[i].bid_data[j].bid_list;
                    localStorage.setItem('messages', JSON.stringify(active))
                    console.log(active[i].bid_data[j].bid_list)
                    }
                }
            }
        }
        $scope.succeed()
//        localStorage.bid_status="false"
        var active=JSON.parse(localStorage.getItem("messages"))
        $scope.switch="false"
        $scope.start=function(){
            $scope.switch="false"
//            var bid_data={'bid_status': bid_status}
            var bid_status="true"
//            for(var i in active){
//                if(active[i].bid_name==localStorage.working_bid)
                localStorage.bid_status="true"
                localStorage.setItem('messages', JSON.stringify(active))
//                localStorage.setItem('bid_status',JSON.stringify(bid_status))
//            }
        }
//        for(var j in active) {
//            for (var d in active[j].bid_data) {
//                console.log(active[j].bid_data[d].bid_name)
//                if (active[j].bid_data[d].bid_name == localStorage.working_bid) {
//                    if (localStorage.bid_status == 'true') {
//                        $scope.switch = 'false'
//                    }
//                    else {
//                        $scope.switch = 'false'
//                    }
////                    localStorage.setItem('bid_status',JSON.stringify(localStorage.bid_status))
//                }
////                localStorage.setItem('bid_status',JSON.stringify(localStorage.bid_status))
//            }
////            localStorage.setItem('bid_status',JSON.stringify(localStorage.bid_status))
//        }

        $scope.end=function(){
            if(confirm("确认要结束本轮的竞价吗？"))
            {
//                var a="false"
                var active=JSON.parse(localStorage.getItem("messages"));
                for(var i in active){
//                    if(active[i].bid_name==localStorage.working_bid) {
                        for (var j in active[i].bid_data) {
                            active[i].bid_data[j].bid_status1 = "true"
                            $scope.final = "true"
                            active[i].bid_status="false"
                            active[i].bid_data[j].bid_color = "false"
                            localStorage.setItem('messages', JSON.stringify(active))
//                            $scope.final = "true"
//                            active[i].bid_data[j].bid_color = "false"
                            if(active[i].bid_data[j].bid_list.length == 0)
                            {
                                $location.path('/bid_list')
                            }
                            else {
                                $location.path('/result_price')
                            }
                            return

                        }
//                    }
                    localStorage.setItem('messages', JSON.stringify(active))
                }
                localStorage.setItem('messages', JSON.stringify(active))
            }
            else
            {
                var bid_status="true"
                for(var j in active){
                    if(active[i].bid_name==localStorage.working_bid)
                    active[i].status==bid_status
                    active[i].bid_data[j].bid_color = "true"
                    localStorage.setItem('bid_status',JSON.stringify(bid_status))
                }
            }
        }
//        for(var i in active){
//            for(var j in active[i].bid_data){
//                if(active[i].bid_data[j].bid_status1==true) {
//                    $scope.switch = "false"
//                    $scope.final = true
//                }
//                else
//                {
//                    $scope.switch = "false"
//                    $scope.final = false
//                }
//            }
//        }
        for(var i in active){
            for(var j in active[i].bid_data){
                if(active[i].bid_data[j].bid_name==localStorage.working_bid) {
                    if (active[i].bid_data[j].bid_status1 == "true") {
                        console.log('-------------------r')
                        $scope.switch = "false"
                        $scope.final = true
                        return
                    }
                    else {
                        console.log('========================g')
                        $scope.switch = "false"
                        $scope.final = false
                        return
                    }
                }
            }
        }
//        for(var q in active){
//            for(var w in active[q]){
//                localStorage.bd_status=active[q].bid_data[w].bid_status1
//                localStorage.setItem('bid_status',JSON.stringify(bd_status))
//            }
//        }
//        for(var e in active){
//            for(var f in active[e].bid_data){
//                if(active[e].bid_data[f])
//            }
//        }




        function judge_activity_begin(){
//            for(var b in active){
                if(localStorage.bid_status == 'true'){
                    return true;
//                }
            }
        }
//        for(var a in active){
//            for(var c in active[a].bid_data)
////            {
////                console.log(active[a].bid_data);
////            }
//
//            if(active[a].bid_data[c].bid_name==localStorage.working_bid) {
////                if(judge_activity_start())
//                console.log('guorui')
//                if (judge_activity_begin()){
//                    $scope.final = true
//                    console.log('guorui1')
//                }
//                else {console.log('guorui2')
//                    $scope.final = true
//                }
//            }
//            else{
//                $scope.final=true
//            }
//        }

//        function fresh2() {
//            var list2_refresh = document.getElementById('list1_id')
//            console.log(list1_refresh)
//            if (list2_refresh) {
//                var scope = angular.element(list2_refresh).scope();
//                scope.$apply(function () {
//                    scope.succeed()
//                })
//            }
//        }
//        fresh2()





    });