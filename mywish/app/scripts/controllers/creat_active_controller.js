'use strict';
angular.module('mywishApp')
    .controller('CreatActiveCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return="返回";
        $scope.go_return=function(){
            $location.path('/active_listbox')
        }
//        var if_yes
//        $scope.begin=function(){
//            if($scope.take="开始")
//            {
//                if_yes=true;
//                $scope.take="结束"
//            }
//        }
//        $scope.people_number=0;
//        var change=JSON.parse(localStorage.getItem("messages")) || [];
//        $scope.begin=function(){
//            $scope.switch="start"
//            var bm_list=true;
//
//        }
        $scope.use=function()
        {
            var active=JSON.parse(localStorage.getItem("activities"));
            for(var i in active)
            {
                if(active[i].name==localStorage.working_activity){
                    $scope.applys=action[i].apply_list;
                    $scope.people_number=action[i].apply_list.length;
                }
            }
        }
        $scope.use();
        $scope.begin=function()
        {
            $scope.apply_status="1"
            var data_status="true"
            for(var i in active){
                if(active[i].name==working_activity)
                active[i].activity_status=data_status
                localStorage.setItem('messages', JSON.stringify(active))
            }

        }


    });