'use strict';
//angular.module('partyBidApp')
//    .controller('Creat_activeCtrl', function ($scope,$location) {
//        $scope.awesomeThings = [
//            'HTML5 Boilerplate',
//            'AngularJS',
//            'Karma'
//        ];
//        $scope.return="返回";
//        $scope.go_return=function(){
//            $location.path('/active_listbox')
//        }
//        $scope.bid="竞价"
//        $scope.go_bid=function(){
//            $location.path('/bid_activity')
//        }
//angular.module('partyBidApp')
//    .controller('Creat_activeCtrl', function ($scope, $routeParams, $location) {
//        $scope.activity_name = $routeParams.activity_name;
//        $scope.list2 = Creat_Activity.get_bm_list($scope.activity_name);
//        $scope.switch = Creat_Activity.check_activity_status($scope.activity_name);
//        $scope.start = Creat_Activity.is_apply_able($scope.activity_name);
//        $scope.people_number = Creat_Activity.get_bm_list.length
//        $scope.return = "返回";
//        $scope.go_return = function () {
//            $location.path('/active_listbox')
//        }
//
//        $scope.begin = function () {
//            Creat_Activity.save_apply_start_status($scope.activity_name);
//            $scope.switch = 'false';
//        }
//
//        $scope.end = function () {
//            if (window.confirm('确认要结束本次报名吗？')) {
//                Creat_Activity.save_apply_end_status($scope.activity_name);
//                $scope.switch = 'true';
//                $location.path('/bid_activity' + $scope.activity_name);
//            }
//        }
//    });

angular.module('partyBidApp')
    .controller('Creat_activeCtrl', function ($scope,$location) {
        if(apply_list){
            $scope.people_number = Activity.show_activity_list.apply_list.length;
            $scope.list2 = Activity.show_activity_list.apply_list
        }
        $scope.switch="false"
        $scope.begin = function()
        {
            $scope.switch="false"
            Activity.show_activity_list.data_status = "true"
        }
        if(Activity.judge_switch){
            $scope.switch = "false"
        }
        else{
            $scope.switch = "true"
        }
        $scope.end=function(){
            if(confirm("确认要结束此次报名吗？")){
                $scope.switch='true'
                if(Activity.show_activity_list){
                    Activity.show_activity_list.activity_status = "false"
                    $location.path('/bid_activity')
                }
            }
            else{}
        }
        if(!judge_activity_start){
            $scope.start = false
        }
        else{
            $scope.start = true
        }
        if(judge_actname_wactivity.bid_status1=="false"){
            $scope.switch="true"
            $scope.start=true
        }

//        var active=JSON.parse(localStorage.getItem("messages"));
//         $scope.success=function() {
//             var active=JSON.parse(localStorage.getItem("messages"));
//            for (var i in active) {
//                if (active[i].actname == localStorage.working_activity) {
////                $scope.applys=active[i].apply_list;
//                    $scope.people_number = active[i].apply_list.length;
//                    $scope.list2 = active[i].apply_list;
//                }
//            }
//         }
//        $scope.success()



//        $scope.switch="false"
//        $scope.begin=function()
//        {
//            $scope.switch="false"
//            var data_status="true"
//            for(var i in active){
//
//                if(active[i].actname==localStorage.working_activity)
//                    active[i].activity_status=data_status
//                localStorage.setItem('messages', JSON.stringify(active))
//            }
//
//        }
//        for (var j in active) {
//            if (active[j].actname == localStorage.working_activity) {
//                if (active[j].activity_status == 'true') {
//                    $scope.switch = "false"
//                } else {
//                    $scope.switch = "true"
//                }
//            }
//        }
////        $scope.begin()
//        function change_status(){
//            for(var b in active){
//                console.log('========================',active[b].activity_status == 'true')
//                if(active[b].activity_status == 'true' && active[b].actname ==localStorage.working_activity){
//                    console.log('========================')
//                    return true;
//                }
//            }
//        }
//        $scope.end=function()
//        {
//            if(confirm("确认要结束此次报名吗？"))
//            {
//                var active=JSON.parse(localStorage.getItem("messages"));
//                $scope.switch='true'
//                var data_status="false"
//                for(var i in active){
//                    if(active[i].actname==localStorage.working_activity) {
//                        active[i].activity_status = data_status
//                        localStorage.setItem('messages', JSON.stringify(active))
//                    }
//                }
//                for(var a in active){
//                    if(active[a].actname==localStorage.working_activity)
//                        $location.path('/bid_activity')
//                }
//            }
//            else
//            {
//
//            }
//        }
//        function judge_activity_start(){
//            for(var b in active){
//                if(active[b].activity_status == 'true'){
//                    return true;
//                }
//            }
//        }
//        for(var a in active){
//            if(active[a].actname==localStorage.working_activity) {
//                console.log("localStorage.working_activity======>",localStorage.working_activity)
//                if (!judge_activity_start()){
//                    $scope.start = false
//                }
//                else {
//                    $scope.start = true
//                }
//
//            }
//        }
//        for(var q in active){
//            for(var w in active[q].bid_data){
//                if(active[q].bid_data[w].bid_status1=="false"){
//                    $scope.switch="true"
//                    $scope.start=true
//                }
//            }
//        }


    });