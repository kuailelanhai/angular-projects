'use strict';
angular.module('partyBidApp')
    .controller('Creat_activeCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return="返回";
        $scope.go_return=function(){
            $location.path('/active_listbox')
        }
        $scope.bid="竞价"
        $scope.go_bid=function(){
            $location.path('/bid_activity')
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
//        var active=JSON.parse(localStorage.getItem("messages"))

        var active=JSON.parse(localStorage.getItem("messages"));

         $scope.success=function() {
             var active=JSON.parse(localStorage.getItem("messages"));
             console.log(active)
            for (var i in active) {
                if (active[i].actname == localStorage.working_activity) {
//                $scope.applys=active[i].apply_list;
                    $scope.people_number = active[i].apply_list.length;
                    $scope.list2 = active[i].apply_list;
                }
            }
         }
        $scope.success()

        $scope.switch="false"
        $scope.begin=function()
        {
            $scope.switch="false"
            var data_status="true"
            for(var i in active){

                if(active[i].actname==localStorage.working_activity)
                    active[i].activity_status=data_status
                localStorage.setItem('messages', JSON.stringify(active))
            }

        }
        for (var j in active) {
            if (active[j].actname == localStorage.working_activity) {
                if (active[j].activity_status == 'true') {
                    $scope.switch = "false"
                } else {
                    $scope.switch = "true"
                }
            }
        }
//        $scope.begin()
        function change_status(){
            for(var b in active){
                console.log('========================',active[b].activity_status == 'true')
                if(active[b].activity_status == 'true' && active[b].actname ==localStorage.working_activity){
                    console.log('========================')
                    return true;
                }
            }
        }
        $scope.end=function()
        {
            if(confirm("确认要结束此次报名吗？"))
            {
                var active=JSON.parse(localStorage.getItem("messages"));
                $scope.switch='true'
                var data_status="false"
                for(var i in active){
                    if(active[i].actname==localStorage.working_activity) {
                        active[i].activity_status = data_status
                        localStorage.setItem('messages', JSON.stringify(active))
                    }
                }
                for(var a in active){
                    if(active[a].actname==localStorage.working_activity)
                        $location.path('/bid_activity')
                }
            }
            else
            {

            }

//
//            <input type="button" name="btn" value="跳转" onclick="javascript:location.href='index.php'">
//            <input type="button" name="btn" value="返回" onclick="javascript:history.back(-1)">
//            var data_status="false"
//            for(var i in active){
//                if(active[i].actname==localStorage.working_activity)
//                    active[i].activity_status=data_status
//                localStorage.setItem('messages', JSON.stringify(active))
//            }
        }
        function judge_activity_start(){
            for(var b in active){
                console.log('========================',active[b].activity_status == 'true')
                if(active[b].activity_status == 'true'){
                    console.log('========================')
                    return true;
                }
            }
        }
        for(var a in active){
            if(active[a].actname==localStorage.working_activity) {
                console.log("localStorage.working_activity======>",localStorage.working_activity)
//                if(judge_activity_start())
                if (!judge_activity_start()){
                    console.log("active[a].activity_status",active[a].activity_status)
                    console.log("start===============>")
                    $scope.start = false
                }
                else {
//                    for(var b in active){
//                        if(active[b].activity_status!="true")
                    console.log("active[a].activity_status",active[a].activity_status)
                    console.log("=================show   disabled")
                    $scope.start = true}

            }
        }
        for(var q in active){
            for(var w in active[q].bid_data){
                if(active[q].bid_data[w].bid_status1=="false"){
                    $scope.switch="true"
                    $scope.start=true
                }
            }
        }
//                if(active[a].activity_status!="true"){
//                    $scope.switch='true'
//                    $scope.start=false}
//            else
//                $scope.start=true

    });