/**
 * Created by voctor on 14-6-16.
 */
function Apply(){

}

Apply.check_apply_status=function(activity_name){
    var activity_list = Activity.get_activity_local()
    if(_.findWhere(activity_list,{name:activity_name}).applystatus=='applyend')
        return 'start';
    return 'end';
}

Apply.get_apply_list=function(activity_name){
    var activity_list = Activity.get_activity_local()
    return _.findWhere(activity_list,{name:activity_name}).applylist;
}

Apply.is_apply_able=function(activity_name){
    var activity_list = Activity.get_activity_local()
    if(_.find(activity_list,function(activity){return (activity.applystatus=='applystart'&&activity.name!=activity_name)||activity.bidstatus=='bidstart'}))
        return true;
    return false;
}

Apply.save_apply_start_status=function(activity_name){
    var activity_list = Activity.get_activity_local()
    _.findWhere(activity_list,{name:activity_name}).applystatus='applystart';
    Activity.storage_activity_local()
}

Apply.save_apply_end_status=function(activity_name){
    var activity_list = Activity.get_activity_local()
    _.findWhere(activity_list,{name:activity_name}).applystatus='applyend';
    Activity.storage_activity_local()
}