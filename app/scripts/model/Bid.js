/**
 * Created by guorui on 14-7-31.
 */
Bid.start_bid = function() {
    var active = JSON.parse(localStorage.getItem('messages'))
    var a = _.find(active, function (activity) {
        return activity.actname == localStorage.working_activity && activity.bid_data.length == 0
    }).bid_data
    active.bid_status = "true"
    var bid_name = "竞价1"
    if(activity.bid_data.length != 0){
        var number = 1
        var number=a.length+1
        var bid_name = "竞价" + number
    }
}
Bid.switch = function() {
    var active = JSON.parse(localStorage.getItem('messages'))
    var a = _.find(active, function (activity) {
        return activity.actname == localStorage.working_activity
    }).bid_data
    if (_.find(a, function (b) {
        return b.bid_name == localStorage.working_bid
    })) {
        a.bid_status1 = "true"
        $scope.switch = "false"
    }
}
Bid.show_jj = function(){
    var active = JSON.parse(localStorage.getItem('messages'))
    var bid_data = {'bid_name': bid_name,'bid_status1':bid_status2,'bid_color':bid_color1,'bid_list':[]}
    var a =_.find(active, function (activity) {
        return activity.actname == localStorage.working_activity
    })
    a.bid_data.unshift(bid_data)
    localStorage.setItem('messages', JSON.stringify(active))
    var b= JSON.parse(localStorage.getItem("messages"))||[];
    $scope.bids = b.bid_data
}



/**
 * Created by voctor on 14-6-16.
 */
function Bid(bid_name){
    this.bidname=bid_name;
    this.bidstyle='biding';
    this.bidapplylist=[];
    this.bid_list=[]
    this.bid_data=[]
    this.bid_status='false'
}
Bid.prototype.add_bid_info=function(){
    var activity_list = JSON.parse(localStorage.getItem('messages'));
    _.findWhere(activity_list,{name:localStorage.working_activity}).bid_list.push(this);
    localStorage.setItem('messages',JSON.stringify(activity_list));
}
Bid.check_bid_status=function(){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    if(_.findWhere(activity_list,{name:localStorage.working_activity}).bidstatus=='bidend')
        return 'start';
    return 'end';
}

Bid.is_bid_able=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    if(_.find(activity_list,function(act){return act.name==activity_name&&(act.applylist.length==0||act.applystatus=='applystart'||act.bidstatus=='bidstart')}))
        return true;
    return false;
}

Bid.save_bid_start_status=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('messages'));
    _.findWhere(activity_list,{name:activity_name}).bidstatus='bidstart';
    localStorage.setItem('messages',JSON.stringify(activity_list));
}

Bid.save_bid_end_status=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('messages'));
    _.findWhere(activity_list,{name:activity_name}).bidstatus='bidend';
    localStorage.setItem('messages',JSON.stringify(activity_list));
}
Bid.creat_bid_name=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    if(bid_list.length==0)
        return '竞价1';
    return '竞价'+(bid_list.length+1);
}
Bid.get_bid_list=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    return bid_list.reverse();
}
Bid.save_bid_style=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    var lastbid= _.last(_.findWhere(activity_list,{name:activity_name}).bidlist);
    lastbid.bidstyle='bided';
    localStorage.setItem('messages',JSON.stringify(activity_list));
}
Bid.save_current_activity=function(activity_name){
    localStorage.setItem('current_activity',activity_name);
}
Bid.get_current_activity=function(){
    return localStorage.getItem('current_activity');
}
Bid.get_bid_messages=function(activity_name,bid_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
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
    var activity_list=JSON.parse(localStorage.getItem('messages')),
        current_activity=Bid.get_current_activity(),
        bid_list=_.findWhere(activity_list,{name:current_activity}).bidlist,
        bid_info= _.findWhere(bid_list,{bidname:bid_name});
    if(bid_info.bidstyle=='bided')
        return true;
    return false;
}
Bid.is_biding=function(){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    if(_.findWhere(activity_list,{bidstatus:'bidstart'}))
        return true;
    return false;
}

