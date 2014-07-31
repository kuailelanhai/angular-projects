'use strict';
angular.module('partyBidApp')
    .controller('MainCtrl',function ($scope,$location) {
        $scope.show=Activity.check_exist_activity_list();
//        console.log(Activity.activity_judge());
//        $scope.activity=Activity.activity_judge();
        $scope.go_register=function() {
            var activity=new Activity($scope.activity);
            $scope.show1=activity.check_repeat(Activity.get_activity());
            activity.creat_active($scope.activity);
            if($scope.activity)
                $location.path('/creat_active'+$scope.activity);
            console.log('1111')
        }
    });