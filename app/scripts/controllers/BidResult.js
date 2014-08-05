/**
 * Created by guorui on 14-8-1.
 */
//function bid_result_page_load() {
//    var current_activity = Bid.get_current_activity();
//    $('#goback').attr('href', '/#/bidlist/' + current_activity);
//}
angular.module('partyBidApp')
    .controller('BidResultCtrl',function ($scope,$routeParams,$location,$timeout) {
        $scope.activity_name=$routeParams.activity_name;
        Bid.save_current_bid($scope.activity_name)
        $scope.bid_name=Bid.get_current_bid()
        show_bid = false
        console.log(Bid.bid_show_messages1())
        $scope.bids = Bid.get_bid_show($scope.activity_name,$scope.bid_name)
        if($scope.bids == 0){
        console.log(Bid.bid_show_messages2($scope.activity_name,$scope.bid_name))}
        $scope.bid_length = Bid.bid_show_messages3().length
        console.log(Bid.bid_show_messages())
        $scope.bids = Bid.get_bid_show($scope.activity_name,$scope.bid_name)
        $scope.bider = Bid.get_bid_show1($scope.activity_name,$scope.bid_name)
        $scope.phone = Bid.get_bid_show2($scope.activity_name,$scope.bid_name)
        $scope.price = Bid.get_bid_show3($scope.activity_name,$scope.bid_name)
        console.log(Bid.get_bid_show($scope.activity_name,$scope.bid_name))
        $timeout(function () {
            $('#ModalSuccess').modal("show");
            $timeout(function () {
                $('#ModalSuccess').modal('hide');
            }, 3000)
        })
    })

