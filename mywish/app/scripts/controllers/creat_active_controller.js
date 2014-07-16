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
        var active=JSON.parse(localStorage.getItem("activities"))
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
            $scope.apply_status="false"
            var data_status="true"
            for(var i in active){
                if(active[i].name==working_activity)
                active[i].activity_status=data_status
                localStorage.setItem('messages', JSON.stringify(active))
            }

        }
        for (var j in action) {
            if (action[j].name == localStorage.working_activity) {
                if (action[j].activity_staus == 'true') {
                    $scope.apply_status = "false"
                } else {
                    $scope.apply_status = "true"
                }
            }
        }
        $scope.end=function()
        {
            if(console.log('确定要结束本次报名吗？'))
            $scope.apply_status='true'
            var data_status="true"
            for(var i in active){
                if(active[i].name==working_activity)
                active[i].activity_status=data_status
                localStorage.setItem('messages', JSON.stringify(active))
            }
        }
    });