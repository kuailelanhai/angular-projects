/**
 * Created by guorui on 14-7-26.
 */
'use strict';
angular.module('partyBidApp')
    .controller('Result_priceCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return="返回";
        $scope.go_return=function(){
            $location.path('/bid_activity')
        }
        $scope.show_message=function(){
            var active=JSON.parse(localStorage.getItem("messages"));
            $scope.activity_bid=localStorage.working_bid;
            console.log($scope.activity_bid)
            for(var i in active){
                for(var j in active[i].bid_data){
                    if(active[i].bid_data[j].bid_name==localStorage.working_bid){
                        $scope.people_number1 = active[i].bid_result.length;
                        $scope.list4 = active[i].bid_result;
                        localStorage.setItem('messages', JSON.stringify(active))
                        console.log(active[i].bid_result)
                    }
                }
            }

        }









    });