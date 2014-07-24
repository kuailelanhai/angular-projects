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
        localStorage.bid_status="false"
        var active=JSON.parse(localStorage.getItem("messages"))
        $scope.switch="true"
        $scope.start=function(){
            console.log('========')
            $scope.switch="false"
//            var bid_data={'bid_status': bid_status}
            var bid_status="true"
            for(var i in active){
                if(active[i].bid_name==localStorage.working_bid)
                localStorage.bid_status=bid.status
                localStorage.setItem('bid_status',JSON.stringify(bid_status))
            }
        }
        for(var j in active)
        {
            if(active[j].bid_name==localStorage.working_bid)
            {
                if(active[j].status=='true')
                {
                    $scope.switch='false'
                }
                else
                $scope.switch='true'
            }
        }
        $scope.end=function(){
            if(confirm("确认要结束本轮的竞价吗？"))
            {
                var bid_status="false"
                for(var i in active){
                    if(active[i].bid_name==localStorage.working_bid)
                        active[i].status==bid.status
                    localStorage.setItem('bid_status',JSON.stringify(bid_status))
                }
            }
            else
            {
                var bid_status="true"
                for(var j in active){
                    if(active[i].bid_name==localStorage.working_bid)
                    active[i].status==bid_status
                    localStorage.setItem('bid_status',JSON.stringify(bid_status))
                }
            }
        }






















    });