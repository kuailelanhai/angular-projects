'use strict';
angular.module('mywishApp')
    .controller('Creat_active_returnCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.creat_return="返回";
        $scope.go_creat_return=function(){
            $location.path('/active_listbox')
        }
//
//        $scope.end=function(){
//            $scope.apply_status="2"
//                        }
//                    $scope.one=function(){
//                        $scope.apply_status="1"
//                            bid_status='false'
//                            for(var i in bid){
//                            bid[i].bid_status=bid_status
//
//                                localStorage.setItem("activities",JSON.stringify(bid))
//                            }}
//
//                    }
//$scope.begain=function(){
//    $scope.apply_status="1"
//
//            bid_status='true'
//        for(var i in bid){
//            bid[i].bid_status=bid_status
//                localStorage.setItem("activities",JSON.stringify(bid))
//
//            }
//}
    });
