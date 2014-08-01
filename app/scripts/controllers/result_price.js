///**
// * Created by guorui on 14-7-26.
// */
//'use strict';
//angular.module('partyBidApp')
//    .controller('Result_priceCtrl', function ($scope, $location,$timeout) {
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
//            console.log($scope.activity_bid)
//            for (var i in active) {
//                for (var j in active[i].bid_data) {
//                    console.log(j)
//                    console.log('----------')
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
//                                console.log('++++++++++++++++=')
//                            }
//                            else {
////                                var k = 0
//////                                var num = action[i].bid_data[j].bid_list.length + 1
////                                var num = ++ k
////                                console.log('++++++++++++++')
////                                console.log(num)
////                                if (action[i].bid_data[j].bid_list[k].iprice < action[i].bid_data[j].bid_list[num].iprice){
////                                    $scope.bider = action[i].bid_data[j].bid_list[k].bid
////                                    $scope.telephone = action[i].bid_data[j].bid_list[k].iphone
////                                    $scope.bider_price = action[i].bid_data[j].bid_list[k].iprice
////                                    $scope.show_bid = true
////                                }
////                                else{
////
////                                }
//                            }
//                        }
//                    }
//                }
//            }
//        }
//        $scope.show_bid_message()
////        $('#ModalSuccess').modal("show");
////        $(function () {
////            $('#ModalSuccess').modal('hide');
////        },399000)
//
//        $timeout(function () {
//                        $('#ModalSuccess').modal("show");
//                        $timeout(function () {
//                                $('#ModalSuccess').modal('hide');
//                            }, 3000)
//                    })
//
//
//
//    });
//
//
//
//
//







angular.module('angularApp')
    .controller('Result_priceCtrl', function ($scope, $location, $timeout) {
        Bid.save_bid_price()
        var bid_price = JSON.parse(localStorage.getItem("bid_price"))
        if (Bid.check_bid_price_bid_count() && localStorage.status == "false") {
            Bid.timeout($timeout)
        }
        Bid.current_display_bid_messages($scope);
        Bid.judge_check_bid_price_bid_count($scope)
        $scope.list4 = Bid.display_sortby()
        $scope.people_number1 = Bid.check_current_activity_bid().length
        $scope.activity_bid = localStorage.working_bid
        $scope.go_return = function () {
            localStorage.status = false
            $location.path('/bid_list')
        }
    });























//
//var bid_price = JSON.parse(localStorage.getItem("bid_price"))
//    +        for (var z in bid_price) {
//    +            if (bid_price[z].count == 1) {
//        +                for (var i in bid) {
//            +                    if (bid[i].name == localStorage.current_activity) {
//                +                        var bid_message = bid[i].bid_list[0].bid_message
//                    +                        var bid_messages = _.find(bid_message, function (bid) {
//                    +                            return bid.bid_price == bid_price[z].price
//                        +                        })
//                    +                        if (bid_messages) {
//                    +                            $scope.success = "true"
//                        +                            $scope.bid_name = bid_messages.bid_name
//                        +                            $scope.price = bid_messages.bid_price
//                        +                            $scope.phone = bid_messages.bid_phone
//                        +                        }
//                +                    }
//            +                }
//        +                break
//        +            }
//    +        }
//for (var i in bid) {
//    if (bid[i].name == localStorage.current_activity) {
//        for (var j = 0; j < bid[i].bid_list.length; j++) {
//            @@ -26,19 +46,6 @@ angular.module('angularApp')
//        })
//        $scope.biddings = coun
//        localStorage.setItem("bid_price",JSON.stringify(coun))
//        -
//        -                        console.log(coun)
//        -                        console.log("")
//        -                        console.log(bidding[0].bid_price)
//        -//                       for(var z in bidding) {
//        -                        console.log(bidding)
//        -
//        -//                        for (var z in bidding) {
//            -//                            var count = _.filter(bidding, function (apply) {
//                -//                                return apply.bid_price == bidding[z].bid_price;
//                    -//                            })
//                        -//                            console.log(count)
//                            -//                            //        }
//        //                        }
//    }
//}