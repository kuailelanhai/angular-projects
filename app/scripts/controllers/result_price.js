/**
 * Created by guorui on 14-7-26.
 */
'use strict';
angular.module('partyBidApp')
    .controller('Result_priceCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return = "返回";
        $scope.go_return = function () {
            $location.path('/bid_activity')
        }
        $scope.show_message = function () {
            var active = JSON.parse(localStorage.getItem("messages"));
            $scope.activity_bid = localStorage.working_bid;
            console.log($scope.activity_bid)
            console.log('----------')
            for (var i in active) {
                for (var j in active[i].bid_data) {
                    console.log('----------')
                    if (active[i].bid_data[j].bid_name == localStorage.working_bid) {
                        console.log('+++++++++++')
                        $scope.people_number1 = active[i].bid_data[j].bid_list.length;
                        $scope.list4 = active[i].bid_data[j].bid_list;
                        localStorage.setItem('messages', JSON.stringify(active))
                    }
                }
            }
        }
        $scope.show_message()
        $scope.show_bid_message = function()
        {
            var action = JSON.parse(localStorage.getItem(("messages")))
            for (var i in action) {
                for (var j in action[i].bid_data) {
                    for (var k in action[i].bid_data[j].bid_list) {
                        if (action[i].bid_data[j].bid_name == localStorage.working_bid) {
                            if (action[i].bid_data[j].bid_list[0].iprice != action[i].bid_data[j].bid_list[k].iprice) {
                                $scope.bider = action[i].bid_data[j].bid_list[0].bid
                                $scope.telephone = action[i].bid_data[j].bid_list[0].iphone
                                $scope.bider_price = action[i].bid_data[j].bid_list[0].iprice
                                $scope.show_bid = true
                                console.log('++++++++++++++++=')
                            }
                            else {
//                                var num = 1
//                                var num = action[i].bid_data[j].bid_list.length + 1
                                var num = ++ k
                                console.log(num)
//                                if (action[i].bid_data[j].bid_list[num].iprice != action[i].bid_data[j].bid_list[k].iprice){
//                                    $scope.bider = action[i].bid_data[j].bid_list[num].bid
//                                    $scope.telephone = action[i].bid_data[j].bid_list[num].iphone
//                                    $scope.bider_price = action[i].bid_data[j].bid_list[num].iprice
//                                    $scope.show_bid = true
//                                }
//                                else{
//
//                                }
                            }
                        }
                    }
                }
            }
        }
        $scope.show_bid_message()
        $('#ModalSuccess').modal("show");
//        $timeout(function () {
//            $('#ModalSuccess').modal('hide');
//        }, 3000)



    });