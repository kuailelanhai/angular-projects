/**
 * Created by guorui on 14-8-1.
 */
angular.module('partyBidApp')
    .controller('BidStatisticsCtrl',function ($scope,$routeParams,$location) {
//        $scope.bid_name=$routeParams.bid_name;
        $scope.bid_name=Bid.get_current_bid()
        $scope.activity_name=Bid.get_current_activity()
        console.log($scope.bider)
        console.log('123')
        console.log(Bid.get_current_activity())
        Bid.bid_jj_message()
        $scope.bids_length = Bid.bid_show_messages_bidapp().length
        $scope.biddings = Bid.bid_jj_message()
        $scope.bid = Bid.get_current_bid()
        $scope.bider = Bid.get_bid_show_bider($scope.activity_name,$scope.bid_name)
        $scope.phone = Bid.get_bid_show_phone($scope.activity_name,$scope.bid_name)
        $scope.price = Bid.get_bid_show_price($scope.activity_name,$scope.bid_name)
    })