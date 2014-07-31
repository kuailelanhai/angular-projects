/**
 * Created by guorui on 14-7-30.
 */
function Activity(name){
    this.name = name
    this.bidstatus = 'bidend';
}
Activity.prototype.creat_active = function(show1){
    if(!show1){
        var activities = JSON.parse(localStorage.getItem("messages"))
        activities.unshift(this)
        localStorage.setItem("messages",JSON.stringify("activities"))
    }
}
Activity.prototype.check_repeat = function (activities) {
    return _.contains(activities,this.name);
}
Activity.get_activity = function () {
    var activities = JSON.parse(localStorage.getItem('messages'));
    var activity = [];
    _.each(activities,function(active){activity.unshift(active.name)});
    return activity;
}
Activity.get_activity_list = function () {
    var activities = JSON.parse(localStorage.getItem('messages'));
    activities.reverse();
    return activities;
}

Activity.check_exist_activity_list = function () {
    var activities=JSON.parse(localStorage.getItem('messages'));
    if (activities.length==0)
        return true;
    return false;
}
Activity.activity_judge=function(){
    var activities=JSON.parse(localStorage.getItem('messages'));
    if(_.findWhere(activities,{bidstatus:'bidstart'}))
        return true;
    return false;
}


//creat_active_controller

Activity.judge_actname_wactivity = function(){
    var activities = JSON.parse(localStorage.getItem('messages'));
    var actname_working = _.find(activities,function(activity){return activity.actname == localStorage.working_activity}).bid_data
    return actname_working
    localStorage.setItem('messages',JSON.stringify(actname_working));
}
Activity.judge_actname_w = function(){
    var activities = JSON.parse(localStorage.getItem('messages'));
    var actname_working = _.find(activities,function(activity){return activity.actname == localStorage.working_activity})
//    actname_working.activity_status = "true"
//    return actname_working.activity_status
    localStorage.setItem('messages',JSON.stringify(actname_working));
}
//Activity.show_activties_message= function(){
//    var activities = JSON.parse(localStorage.getItem('messages'));
//    var actname_working = _.find(activities,function(activity){return activity.actname == localStorage.working_activity})
//    localStorage.setItem('messages',JSON.stringify(actname_working));
//}
//Activity.show_activity_list = function(){
//    var activities = JSON.parse(localStorage.getItem('messages'));
//    var apply_list = _.find(activities,function(activity){return activity.actname == localStorage.working_activity})
//    return apply_list
//    localStorage.setItem('messages',JSON.stringify(apply_list));
//}
Activity.judge_switch = function(){
    _.find(Activity.show_activity_list,function(apply_list){return Activity.show_activity_list.activity_status == 'true'})
    return true
}
Activity.judge_activity_start = function(){
    _.find(Activity.show_activity_list, function (a){return a.activity_status == 'true'})
    return true
}



