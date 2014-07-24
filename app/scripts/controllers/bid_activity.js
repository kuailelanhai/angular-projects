/**
 * Created by guorui on 14-7-23.
 */
'use strict';
angular.module('partyBidApp')
    .controller('Bid_activityCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.by="返回";
        $scope.go_by=function(){
            $location.path('/active_listbox')
        }
        $scope.jj=function(bid_name){
            $location.path('/bid_list')
            localStorage.working_bid = bid_name;
        }


//        $scope.start_bid=localStorage.getItem(("bid_status"))
        $scope.start=function() {
//        localStorage.bid_status='true'
        var active = JSON.parse(localStorage.getItem("messages"))
        for (var i in active) {
            if (active[i].actname == localStorage.working_activity) {
                if (active[i].bid_data.length == 0) {
                    var bid_name = "竞价1"
                    console.log(bid_name)
                }
                else {
                    var number=1
                    var number=active[i].bid_data.length+1
                    var bid_name = "竞价" + number
                    console.log(bid_name)
                }
                var bid_data = {'bid_name': bid_name}
                console.log(bid_data)
                active[i].bid_data.unshift(bid_data)
                localStorage.setItem('messages', JSON.stringify(active))
                console.log(active)
//                for(var j=0;j<=active[i].bid_status.length;j++)
//                    active[i].bid_data.unshift(bid_data[j])
               var a= JSON.parse(localStorage.getItem("messages"))||[];
                console.log(a[0].bid_data)
                $scope.bids=a[0].bid_data
//                for(j in bid_status)
//                $scope.bids=active[i].bid_status[j].bid_name

            }
        }
    }
            });