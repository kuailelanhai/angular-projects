/**
 * Created by guorui on 14-8-1.
 */
function bid_result_page_load() {
    var current_activity = Bid.get_current_activity();
    $('#goback').attr('href', '#/bidlist/' + current_activity);
}
angular.module('partyBidApp')
    .controller('BidResultCtrl',function ($scope,$routeParams,$location,$timeout) {
        $scope.activity_name=$routeParams.activity_name;
        Bid.save_current_bid($scope.activity_name)
        console.log($scope.activity_name)
        $scope.bid_name=Bid.get_current_bid()
        console.log($scope.bid_name)
//        $scope.activity_name=Bid.get_current_activity();
        show_bid = false
        console.log(Bid.bid_show_messages1())
        $scope.bids = Bid.get_bid_show($scope.activity_name,$scope.bid_name)
        if($scope.bids == 0){
        console.log(Bid.bid_show_messages2($scope.activity_name,$scope.bid_name))}
//        $scope.bid_name=Bid.bid_show_messages2($scope.activity_name,$scope.bid_name)
        $scope.bid_length = Bid.bid_show_messages3().length
        console.log(Bid.bid_show_messages())
        $scope.bids = Bid.get_bid_show($scope.activity_name,$scope.bid_name)
        $scope.bider = Bid.get_bid_show1($scope.activity_name,$scope.bid_name)
        $scope.phone = Bid.get_bid_show2($scope.activity_name,$scope.bid_name)
        $scope.price = Bid.get_bid_show3($scope.activity_name,$scope.bid_name)
//        if($scope.bids == null){
//        var bid_name=Bid.creat_bid_name($scope.activity_name);
        console.log(Bid.get_bid_show($scope.activity_name,$scope.bid_name))
        $timeout(function () {
            $('#ModalSuccess').modal("show");
            $timeout(function () {
                $('#ModalSuccess').modal('hide');
            }, 3000)
        })
    })



///**
// * Created by guorui on 14-7-26.
// */
//'use strict';
//angular.module('partyBidApp')
//    .controller('BidResultCtrl', function ($scope, $location,$timeout) {
//        $scope.awesomeThings = [
//            'HTML5 Boilerplate',
//            'AngularJS',
//            'Karma'
//        ];
//        $scope.return = "返回";
//        $scope.go_return = function () {
//            $location.path('/bid_activity')
//        }
//        $scope.show_message = function () {
//            var active = JSON.parse(localStorage.getItem("messages"));
//            $scope.activity_bid = localStorage.working_bid;
//            for (var i in active) {
//                for (var j in active[i].bid_data) {
//                    for (var k in active[i].bid_data[j].bid_list) {
//                        if (active[i].bid_data[j].bid_name == localStorage.working_bid) {
//                            $scope.people_number1 = active[i].bid_data[j].bid_list.length;
//                            console.log(active[i].bid_data[j].bid_list)
//                            active[i].bid_data[j].bid_list = _.sortBy(active[i].bid_data[j].bid_list, function (num) {
//                                return num.iprice;
//                            });
//                            console.log(_.sortBy(active[i].bid_data[j].bid_list, function (num) {
//                                return num.iprice;
//                            }))
//                            var a = JSON.parse(localStorage.getItem("messages"));
//                            localStorage.setItem('messages', JSON.stringify(a))
//                            $scope.list4 = active[i].bid_data[j].bid_list;
//                            localStorage.setItem('messages', JSON.stringify(active))
//                        }
//                    }
//                }
//            }
//        }
//        $scope.show_message()
//        $scope.show_bid_message = function()
//        {
//            var action = JSON.parse(localStorage.getItem(("messages")))
//            for (var i in action) {
//                for (var j in action[i].bid_data) {
//                    for (var k in action[i].bid_data[j].bid_list) {
//                        if (action[i].bid_data[j].bid_name == localStorage.working_bid) {
//                            if (action[i].bid_data[j].bid_list[0].iprice < action[i].bid_data[j].bid_list[k].iprice) {
//                                $scope.bider = action[i].bid_data[j].bid_list[0].bid
//                                $scope.telephone = action[i].bid_data[j].bid_list[0].iphone
//                                $scope.bider_price = action[i].bid_data[j].bid_list[0].iprice
//                                $scope.show_bid = true
//                            }
//                            else {
//                            }
//                        }
//                    }
//                }
//            }
//        }
//        $scope.show_bid_message()
//        $timeout(function () {
//            $('#ModalSuccess').modal("show");
//            $timeout(function () {
//                $('#ModalSuccess').modal('hide');
//            }, 3000)
//        })
//
//
//
//    });

