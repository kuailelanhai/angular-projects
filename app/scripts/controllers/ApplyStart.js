/**
 * Created by guorui on 14-8-4.
 */
/**
 * Created by voctor on 14-6-17.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivityStartCtrl', function ($scope, $routeParams,$location) {
        $scope.activity_name = $routeParams.activity_name;
        $scope.applies = Apply.get_apply_list($scope.activity_name);
        $scope.switch = Apply.check_apply_status($scope.activity_name);
        $scope.flag = Apply.is_apply_able($scope.activity_name);
        console.log(Activity.get_activity_local())

        $scope.apply_start = function () {
            Apply.save_apply_start_status($scope.activity_name);
            $scope.switch = 'end';


        }

        $scope.apply_end = function () {
            if (window.confirm('确认要结束本次报名吗？')) {
                Apply.save_apply_end_status($scope.activity_name);
                $scope.switch = 'start';
                $location.path('bidlist/'+$scope.activity_name);
            }
        }
    });