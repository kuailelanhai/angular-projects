/**
 * Created by guorui on 14-7-26.
 */
'use strict';
angular.module('partyBidApp')
    .controller('Price_resultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return = "返回";
        $scope.go_return = function () {
            $location.path('/bid_activity')
        }
//        var active = JSON.parse(localStorage.getItem("messages"))
//        var bid_price = JSON.parse(localStorage.getItem("bid_price"))
//        for (var z in bid_price) {
//            if (bid_price[z].count == 1) {
//                for (var i in bid) {
//                    if (bid[i].name == localStorage.current_activity) {
//                        var bid_message = bid[i].bid_list[0].bid_message
//                        var bid_messages = _.find(bid_message, function (bid) {
//                            return bid.bid_price == bid_price[z].price
//                        })
//                        if (bid_messages) {
//                            $scope.success = "true"
//                            $scope.bid_name = bid_messages.bid_name
//                            $scope.price = bid_messages.bid_price
//                            $scope.phone = bid_messages.bid_phone
//                            localStorage.status = true
//                            $scope.refreshes = function () {
//                                var bid = JSON.parse(localStorage.getItem("activities"))
//                                var bid_price = JSON.parse(localStorage.getItem("bid_price"))
//                                for (var i in bid) {
//                                    if (bid[i].name == localStorage.current_activity) {
//                                        for (var j = 0; j < bid[i].bid_list.length; j++) {
//                                            if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
//                                                var name = localStorage.bid
//                                                var bidding = bid[i].bid_list[j].bid_message;
//                                                $scope.people = bidding.length
//                                                $scope.name = name
//                                                $scope.biddings = bid_price
//                                            }
//                                        }
//                                    }
//                                    break
//                                }
//                            }
        $scope.show_message=function(){
            console.log('=================')
            var active=JSON.parse(localStorage.getItem("messages"));
            $scope.activity_bid=localStorage.working_bid;
            console.log($scope.activity_bid)
            for(var i in active){
                for(var j in active[i].bid_data){
                    for(var k in active[i].bid_data[j].bid_list) {
                    if(active[i].bid_data[j].bid_name==localStorage.working_bid){
                        $scope.people_number1 = active[i].bid_data[j].bid_list.length;
//                        for(var k in active[i].bid_data[j].bid_list) {
                            var bidding = active[i].bid_data[j].bid_list;
                            var name = active[i].bid_data[j].bid_list[k].bid
                            var price = active[i].bid_data[j].bid_list[k].iprice
                            var bid_price = active[i].bid_price
                            console.log(price)
                            var count = _.countBy(bidding, function (bidding) {
                                return bidding.iprice
                            })
                            var num = _.map(count, function (value, key) {
                                return {"price": key, "count": value}
                            })
                            $scope.biddings = num
//                            var my_price = [{'my_name': name,'my_price1': price}]
//                            localStorage.setItem("bid_price", JSON.stringify(num))
//                            for (var l in bid_price) {
//                                if (bid_price[l].count == 1) {
//                                    for (var i in active) {
//                                        if (active[i].actname == localStorage.working_activity) {
//                                            var bid_message = bid[i].bid_list[0].bid_message
//                                            var bid_messages = _.find(bid_message, function (bid) {
//                                                return bid.bid_price == bid_price[l].price
//                                            })
//                                            if (bid_messages) {
//                                                $scope.success = "true"
//                                                $scope.fail = "false"
//                                                $scope.bid_name = bid_messages.bid_name
//                                                $scope.price = bid_messages.bid_price
//                                                $scope.phone = bid_messages.bid_phone
//                                            }
//                                        }
//                                    }
//                                    break
//                                } else {
//                                    $scope.success = "false"
//                                    $scope.fail = "true"
//                                }
//                            }
                            $scope.list3 = active[i].bid_data[j].bid_list;
//                            $scope.show_bid = true
                            localStorage.setItem('messages', JSON.stringify(active))
                            var action = JSON.parse(localStorage.getItem(("messages")))
                            for (var i in action) {
                                for (var j in action[i].bid_data) {
                                    for (var k in action[i].bid_data[j].bid_list) {
                                        if (action[i].bid_data[j].bid_name == localStorage.working_bid) {
                                            if (action[i].bid_data[j].bid_list[0].iprice < action[i].bid_data[j].bid_list[k].iprice) {
                                                $scope.bider = action[i].bid_data[j].bid_list[0].bid
                                                $scope.telephone = action[i].bid_data[j].bid_list[0].iphone
                                                $scope.bider_price = action[i].bid_data[j].bid_list[0].iprice
                                                $scope.show_bid = true
                                            }
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
            }

        }
        $scope.show_message()
//        $scope.show_message = function () {
//            console.log('=================')
//            var active = JSON.parse(localStorage.getItem("messages"));
//            $scope.activity_bid = localStorage.working_bid;
//            console.log($scope.activity_bid)
//            for (var i in active) {
//                for (var j in active[i].bid_data) {
//                    if (active[i].bid_data[j].bid_name == localStorage.working_bid) {
//                        $scope.people_number1 = active[i].bid_result.length;
//                        localStorage.setItem('messages', JSON.stringify(active))
//                    }
//                }
//            }
//        }
//        $scope.show_message()
//        var active = JSON.parse(localStorage.getItem("messages"));
//        for(var i in active) {
//            var bidding = active[i].bid_result
//        }

//                    $scope.biddings = _.sortBy(bidding, function (bidding) {
//                            return bidding.price_message
//                        }
//                    )
//                    var count = _.groupBy(bidding, function (bidding) {
//                        var count = _.countBy(bidding, function (bidding) {
//                            return bidding.price_message
//                        })
//                        console.log(count)
//                        var num = _.map(count, function (key, value) {
//                            return {"price": key, "count": value.length}
//                            var num = _.map(count, function (value, key) {
//                                return {"price": key, "count": value}
//                            })
//                            $scope.biddings = num
//
//                            console.log(num)
//                            console.log("")
//
//                        })
//                    })
//        var bid = JSON.parse(localStorage.getItem("messages"))
//        var bid_price = JSON.parse(localStorage.getItem("bid_price"))
//        for (var z in bid_price) {
//            if (bid_price[z].count == 1) {
//                for (var i in bid) {
//                    if (bid[i].name == localStorage.current_activity) {
//                        var bid_message = bid[i].bid_list[0].bid_message
//                        var bid_messages = _.find(bid_message, function (bid) {
//                            return bid.bid_price == bid_price[z].price
//                        })
//                        if (bid_messages) {
//                            $scope.success = "true"
//                            $scope.bid_name = bid_messages.bid_name
//                            $scope.price = bid_messages.bid_price
//                            $scope.phone = bid_messages.bid_phone
//                            localStorage.status = true
//                            $scope.refreshes = function () {
//                                var bid = JSON.parse(localStorage.getItem("activities"))
//                                var bid_price = JSON.parse(localStorage.getItem("bid_price"))
//                                for (var i in bid) {
//                                    if (bid[i].name == localStorage.current_activity) {
//                                        for (var j = 0; j < bid[i].bid_list.length; j++) {
//                                            if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
//                                                var name = localStorage.bid
//                                                var bidding = bid[i].bid_list[j].bid_message;
//                                                $scope.people = bidding.length
//                                                $scope.name = name
//                                                $scope.biddings = bid_price
//                                            }
//                                        }
//                                    }
//                                    break
//                                }
//                            }
//                            for (var i in bid) {
//                                if (bid[i].name == localStorage.current_activity) {
//                                    for (var j = 0; j < bid[i].bid_list.length; j++) {
//                                        if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
//                                            var name = localStorage.bid
//                                            var bidding = bid[i].bid_list[j].bid_message;
//                                            //     $scope.biddings = bidding
//                                            $scope.people = bidding.length
//                                            $scope.name = name
//                                            var count = _.countBy(bidding, function (bidding) {
//                                                return bidding.bid_price
//                                            })
//                                            var coun = _.map(count, function (value, key) {
//                                                return {"price": key, "count": value}
//                                            })
//                                            $scope.biddings = coun
//                                            localStorage.setItem("bid_price", JSON.stringify(coun))
//                                            //                        }
//                                            for (var z in bid_price) {
//                                                if (bid_price[z].count == 1) {
//                                                    for (var i in bid) {
//                                                        if (bid[i].name == localStorage.current_activity) {
//                                                            var bid_message = bid[i].bid_list[0].bid_message
//                                                            var bid_messages = _.find(bid_message, function (bid) {
//                                                                return bid.bid_price == bid_price[z].price
//                                                            })
//                                                            if (bid_messages) {
//                                                                $scope.success = "true"
//                                                                $scope.fail = "false"
//                                                                $scope.bid_name = bid_messages.bid_name
//                                                                $scope.price = bid_messages.bid_price
//                                                                $scope.phone = bid_messages.bid_phone
//                                                            }
//                                                        }
//                                                    }
//                                                    break
//                                                } else {
//                                                    $scope.success = "false"
//                                                    $scope.fail = "true"
//                                                }
//                                            }


//                                        }
//                                        $scope.refreshes()
//                                        $scope.back = function () {
//                                            localStorage.status == false
//                                            $location.path('bidding_now')
//                                        }
//                                    }
//                                }
//                            }
//                        }
//                    }
//                }
//            }
//        }

                });











/**
 * Created by tlt on 14-7-15.
 */
angular.module('angularApp')
    .controller('Price_resultCtrl', function ($scope, $location) {
        localStorage.status = true
        $scope.refreshes = function () {
            var bid_price = JSON.parse(localStorage.getItem("bid_price"))
            var bidding=Bid.check_current_activity_bid()
            $scope.activity_bid=localStorage.working_bid
            $scope.biddings=bid_price
            $scope.people_number1=bidding.length
            Bid.judge_check_bid_price_bid_count_current_activity_bid_messages_bid_price($scope)
        }
        $scope.refreshes()
        $scope.go_return = function () {
            localStorage.status == false
            $location.path('/bid_list')
        }
    });
