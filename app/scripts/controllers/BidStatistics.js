/**
 * Created by guorui on 14-8-1.
 */
angular.module('partyBidApp')
    .controller('BidStatisticsCtrl',function ($scope,$routeParams,$location) {
        $scope.bid_name=$routeParams.bid_name;
        $scope.activity_name = '11111'
        $scope.bider = 123
        console.log($scope.bider)
        console.log('123')
        console.log(Bid.get_current_activity())
        $scope.bids_length = Bid.bid_show_messages3().length
        $scope.bid = Bid.get_current_bid()
        $scope.bider = Bid.get_bid_show1($scope.activity_name,$scope.bid_name)
        $scope.phone = Bid.get_bid_show2($scope.activity_name,$scope.bid_name)
        $scope.price = Bid.get_bid_show3($scope.activity_name,$scope.bid_name)
    })