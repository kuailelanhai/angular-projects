/**
 * Created by voctor on 14-6-16.
 */
function Bid(bid_name){
    this.bidname=bid_name;
    this.bidstyle='biding';
    this.bidapplylist=[];
}
Bid.prototype.add_bid_info=function(){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{actname:localStorage.working_activity}).bidlist.push(this);
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.check_bid_status=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.findWhere(activity_list,{actname:localStorage.working_activity}).bidstatus=='bidend')
        return 'start';
    return 'end';
}

Bid.is_bid_able=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(activity_list,function(act){return act.actname==localStorage.working_activity&&(act.applylist.length==0||act.applystatus=='applystart'||act.bidstatus=='bidstart')}))
        return true;
    return false;
}

Bid.save_bid_start_status=function(){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{actname:localStorage.working_activity}).bidstatus='bidstart';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}

Bid.save_bid_end_status=function(){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{actname:localStorage.working_activity}).bidstatus='bidend';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.creat_bid_name=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{actname:localStorage.working_activity}).bidlist;
    if(bid_list.length==0)
        return '竞价1';
    return '竞价'+(bid_list.length+1);
}
Bid.get_bid_list=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{actname:localStorage.working_activity}).bidlist;
    return bid_list.reverse();
}
Bid.save_bid_style=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var lastbid= _.last(_.findWhere(activity_list,{actname:localStorage.working_activity}).bidlist);
    lastbid.bidstyle='bided';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.save_current_activity=function(activity_name){
    localStorage.setItem('working_activity',activity_name);
}
Bid.get_current_activity=function(){
    return localStorage.getItem('working_activity');
}
Bid.get_bid_messages=function(activity_name,bid_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    var bid_messages= _.findWhere(bid_list,{bidname:bid_name}).bidapplylist;
        return Bid.add_apply_name_into_bid_message(activity_list,bid_messages,activity_name);

}
Bid.add_apply_name_into_bid_message=function(activity_list,bid_messages,activity_name){
    var apply_messages=_.findWhere(activity_list,{name:activity_name}).applylist;
    _.each(bid_messages,function(bid_element){_.each(apply_messages,function(apply_element){
        if(bid_element.phone==apply_element.phone)
        bid_element.price=apply_element.applyname;
    })});
    return bid_messages;
}
Bid.is_bided=function(bid_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist')),
        current_activity=Bid.get_current_activity(),
        bid_list=_.findWhere(activity_list,{name:current_activity}).bidlist,
        bid_info= _.findWhere(bid_list,{bidname:bid_name});
    if(bid_info.bidstyle=='bided')
        return true;
    return false;
}
Bid.is_biding=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.findWhere(activity_list,{bidstatus:'bidstart'}))
        return true;
    return false;
}