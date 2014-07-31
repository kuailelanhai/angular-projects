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
Activity.judge_actname_wactivity = function(){
    var activities = JSON.parse(localStorage.getItem('messages'));
    if(_.find(activities,function(activity){return activity.actname == localStorage.working_activity}))
    return ture
    var a = _.where()
    return a
}
