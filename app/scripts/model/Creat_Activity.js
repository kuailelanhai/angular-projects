/**
 * Created by guorui on 14-7-30.
 */
function Creat_Activity(){

}
Creat_Activity.get_bm_list=function(active_name){
    var activity = JSON.parse(localStorage.getItem('messages'))
    var a = _.findWhere(activity,{name:active_name}).apply_list
    return a
}
Creat_Activity.get_bm1_list=function(active_name){
    var activity = JSON.parse(localStorage.getItem('messages'))
    var a = _.findWhere(activity,{name:active_name}).bid_data
    return a
}
Creat_Activity.check_activity_status =function(active_name){
    var activity = JSON.parse(localStorage.getItem('messages'))
    if(_.findWhere(activity,{name:active_name}).activity_status=='false')
        return 'true'
    return 'false'
}
Creat_Activity.is_apply_able=function(active_name){
    var activity=JSON.parse(localStorage.getItem('messages'));
    var a = _.findWhere(activity,{name:active_name}).bid_data
    if(_.find(activity,function(active){return (active.activity_status=='true'&&active.actname!=active_name)||a.bid_status1=='true'}))
        return true;
    return false;
}

Creat_Activity.save_apply_start_status=function(active_name){
    var activity=JSON.parse(localStorage.getItem('messages'));
    _.findWhere(activity,{name:active_name}).activity_status='true';
    localStorage.setItem('messages',JSON.stringify(activity));
}

Creat_Activity.save_apply_end_status=function(active_name){
    var activity=JSON.parse(localStorage.getItem('messages'));
    _.findWhere(activity,{name:active_name}).activity_status='false';
    localStorage.setItem('messages',JSON.stringify(activity));
}


//Creat_Activity.show_bm_list = function(){
//    $scope.list1 = JSON.parse(localStorage.getItem("messages"))||[];
//    console.log($scope.list1);
//}
Creat_Activity.for_actname_biddata = function(){

}