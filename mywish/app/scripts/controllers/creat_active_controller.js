'use strict';
angular.module('mywishApp')
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
        for(var i in active)
        {
            console.log('1')
            if(active[i].actname==localStorage.working_activity){
                console.log('122')
//                $scope.applys=active[i].apply_list;
                $scope.people_number=active[i].apply_list.length;
                $scope.list2=active[i].apply_list;
                console.log($scope.list2)
            }
        }

        $scope.switch="true"
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
                $scope.switch='true'
                var data_status="false"
                for(var i in active){
                    if(active[i].actname==localStorage.working_activity)
                        active[i].activity_status=data_status
                    localStorage.setItem('messages', JSON.stringify(active))
                }
                $location.path('/active_listbox')
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
        console.log(judge_activity_start(),'-------------------------------------')
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
//                if(active[a].activity_status!="true"){
//                    $scope.switch='true'
//                    $scope.start=false}
//            else
//                $scope.start=true


//        $scope.end()
//        function check()
//        {
//            var needs=JSON.parse(localStorage.getItem("messages"))
//            var if_same;
//            var file
//            for(file in needs)
//            {
//                if($scope.creativity=needs[file].act_name)
//                if_same=true;
//                break
//            }
//            if(!if_same)
//            {
//                needs.unshift($scope.my_array)
//                localStorage.setItem("messages",JSON.stringify(needs))
//                var messages=JSON.parse(localStorage.getItem("messages"))
//            }
//        }
//        check()







//        function b()
//        {
//            $scope.list2=active[i].apply_list;
//            console.log("$scope.list2")
//        }
//        b()
    });