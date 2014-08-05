
'use strict';

angular.module('partyBidApp')
    .controller('BidApplyCtrl',function ($scope,$routeParams,$location) {
        $scope.bid_name=$routeParams.bid_name;
        $scope.flag=Bid.is_bided($scope.bid_name);
        $scope.activity_name=Bid.get_current_activity();
        $scope.bids=Bid.get_bid_messages($scope.activity_name,$scope.bid_name);
        $scope.bid_end=function(){
            if(window.confirm('确定要结束本次竞价吗？')){
//                console.log(Bid.judge_bid())
//                if(Bid.judge_bid()){
////                    $location.path(bidapply/'+bid_name')
//                    console.log('1000')
//                }
//                else {
                    Bid.save_bid_end_status($scope.activity_name);
                    Bid.save_bid_style($scope.activity_name);
                    $scope.flag = true;
//                Bid.bid_show_messages2($scope.activity_name,$scope.bid_name)
                    $location.path('bidresult/' + $scope.activity_name);
//                }
            }

        }
    });