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
angular.module('partyBidApp')
    .controller('Creat_activeCtrl', function ($scope, $routeParams, $location) {
        $scope.activity_name = $routeParams.activity_name;
        $scope.success=function() {
            Activity.judge_actname_w()
            console.log(Activity.judge_actname_w)
            console.log('==============')
            $scope.list2 = Creat_Activity.get_bm_list();
            $scope.people_number = Creat_Activity.get_bm_list().length
            console.log(Activity.judge_actname_w())
        }
        $scope.success()
        Activity.judge_actname_w()
        $scope.switch = Creat_Activity.check_activity_status($scope.activity_name);
        $scope.start = Creat_Activity.is_apply_able($scope.activity_name);
//        $scope.people_number = Creat_Activity.get_bm_list.length
        $scope.return = "返回";
        $scope.go_return = function () {
            $location.path('/active_listbox')
        }

        $scope.begin = function () {
            Creat_Activity.save_apply_start_status();
            console.log(Creat_Activity.save_apply_start_status())
            if(Creat_Activity.change_result_status()) {
                $scope.switch = 'false';
            }
        }

        $scope.end = function () {
            if (window.confirm('确认要结束本次报名吗？')) {
                Creat_Activity.save_apply_end_status($scope.activity_name);
                $scope.switch = 'true';
                $location.path('/bid_activity');
//                $location.path('/bid_activity' + $scope.activity_name);
            }
        }
//        if(!Activity.judge_activity_start){
//            $scope.start = false
//            console.log('=========')
//        }
//        else{
//            $scope.start = true
//            console.log('--------')
//        }
//        if(Activity.judge_actname_wactivity.bid_status1=="false"){
//            $scope.switch="true"
//            $scope.start=true
//        }



//angular.module('partyBidApp')
//    .controller('Creat_activeCtrl', function ($scope,$location) {
//        $scope.return="返回";
//        $scope.go_return=function(){
//            $location.path('/active_listbox')
//        }
//        $scope.bid="竞价"
//        $scope.go_bid=function(){
//            $location.path('/bid_activity')
//        }
//        if(Activity.show_activity_list){
////            $scope.people_number = Activity.show_activity_list.apply_list.length;
//            $scope.list2 = Activity.show_activties_message.apply_list
//        }
////        $scope.switch="true"
//        console.log('++++++++++')
//        console.log(Activity.judge_actname_w())
//        $scope.begin = function()
//        {
//            $scope.switch="false"
////            console.log(Activity.show_activity_list().activity_status)
////            Activity.show_activity_list().activity_status = "true"
//            console.log(Activity.judge_actname_w())
//            Activity.judge_actname_w()
//        }
//        if(Activity.judge_switch){
//            $scope.switch = "true"
//        }
//        else{
//            $scope.switch = "false"
//        }
//        $scope.end=function(){
//            if(confirm("确认要结束此次报名吗？")){
//                $scope.switch='true'
//                if(Activity.show_activity_list){
//                    Activity.show_activity_list.activity_status = "false"
//                    $location.path('/bid_activity')
//                }
//            }
//            else{}
//        }
//        if(!Activity.judge_activity_start){
//            $scope.start = false
//        }
//        else{
//            $scope.start = true
//        }
//        if(Activity.judge_actname_wactivity.bid_status1=="false"){
//            $scope.switch="true"
//            $scope.start=true
//        }


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






















/**
 * Created by tlt on 14-6-21.
 */
//angular.module('angularApp')
//    .controller('Creat_activeCtrl', function ($scope, $location) {
//        $scope.use = function () {
//            $scope.list2 = Bid.get_apply_list(localStorage.working_activity)
//        }
//        $scope.use();
//        $scope.end = function () {
//            if (confirm("你确定结束吗")) {
//                $scope.switch = "true"
//                Bid.save_activity_status_false(localStorage.working_activity)
//                $scope.start = false
//                $location.path('bid_activity')
//            }
//        }
//        $scope.begin = function () {
//            $scope.switch = "false"
//            Bid.save_activity_status(localStorage.working_activity)
//        }
//        $scope.switch = "true"
//        Bid.judege_check_current_activity_activity_status($scope)
//        Bid.judge_check_bid_status_activity_status($scope)
//    }
//)