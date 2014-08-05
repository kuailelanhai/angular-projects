/**
 * Created by voctor on 14-6-16.
 */
function Bid(bid_name){
    this.bidname=bid_name;
    this.bidstyle='biding';
    this.bidapplylist=[];
    this.bidapp=[];
}
Bid.prototype.add_bid_info=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{name:activity_name}).bidlist.push(this);
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.check_bid_status=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.findWhere(activity_list,{name:activity_name}).bidstatus=='bidend')
        return 'start';
    return 'end';
}

Bid.is_bid_able=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(activity_list,function(act){return act.name==activity_name&&(act.applylist.length==0||act.applystatus=='applystart'||act.bidstatus=='bidstart')}))
        return true;
    return false;
}

Bid.save_bid_start_status=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{name:activity_name}).bidstatus='bidstart';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}

Bid.save_bid_end_status=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{name:activity_name}).bidstatus='bidend';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.creat_bid_name=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    if(bid_list.length==0)
        return '竞价1';
    return '竞价'+(bid_list.length+1);
}
Bid.get_bid_list=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    return bid_list.reverse();
}
Bid.save_bid_style=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var lastbid= _.last(_.findWhere(activity_list,{name:activity_name}).bidlist);
    lastbid.bidstyle='bided';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.save_current_activity=function(activity_name){
    localStorage.setItem('current_activity',activity_name);
}
Bid.get_current_activity=function(){
    return localStorage.getItem('current_activity');
}
Bid.save_current_bid=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    var bid= _.last(bid_list).bidname
    localStorage.setItem('current_bid',bid)
}
Bid.get_current_bid=function(){
    return localStorage.getItem('current_bid');
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
Bid.show_message = function(activity_name,bid_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    var bid_messages = _.findWhere(bid_list,{bidname:bid_name}).bidapplylist
    _.findWhere(activity,{})
    return Bid.add_message_bid(activity_list,bid_messages,activity_name)
}
Bid.add_messages_bid = function(activity_list,bid_messages,activity_name){
    var apply_messages = _.findWhere(activity_list,{name: activity_name}).applylist
    _.each(bid_messages,function(bid_element){_.each(apply_messages,function(apply_element){
        if(bid_element.phone == apply_element.phone){
            bid_element.id = apply_element.applyname
        }
    })})
    return bid_element.id
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
Bid.bid_show_messages = function(){
    var a = JSON.parse(localStorage.getItem('activitylist'));
    var current_activity=Bid.get_current_activity();
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    return b
}
Bid.bid_show_messages1 = function(){
    var a = JSON.parse(localStorage.getItem('activitylist'));
    var current_activity=Bid.get_current_activity();
    var current_bid = Bid.get_current_bid();
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    var c = _.findWhere(b,{bidname:current_bid})
    return c
}
Bid.bid_show_messages2 = function(activity_name,bid_name){
    console.log(bid_name)
    var a = JSON.parse(localStorage.getItem('activitylist'));
    var current_activity=Bid.get_current_activity();
    var current_bid=Bid.get_current_bid()
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    var c = _.findWhere(a,{name:current_activity}).applylist
    var d = _.findWhere(b,{bidname: current_bid}).bidapplylist
    _.each(c,function(e){_.each(d,function(f){
        if(e.phone == f.phone){
            var messages = {phone:e.phone,bider:e.applyname,price: f.price}
            var g = _.findWhere(b,{bidname: current_bid}).bidapp
            g.push(messages)
            console.log('++========')
            console.log(g)
            console.log('--------')
            console.log(a)
            localStorage.setItem('activitylist',JSON.stringify(a))
        }
    })})
}
Bid.bid_show_messages3 = function(){
    var a = JSON.parse(localStorage.getItem('activitylist'));
    var current_activity=Bid.get_current_activity();
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    var e = Bid.get_current_bid()
    var c = _.findWhere(b,{bidname: e}).bidapp
    return c
}
Bid.get_bid_show = function(activity_name,bid_name){
    var a = JSON.parse(localStorage.getItem(('activitylist')))
    var current_activity=Bid.get_current_activity();
    var current_bid=Bid.get_current_bid()
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    console.log(b)
    var g = _.findWhere(b,{bidname: current_bid}).bidapp
    g = _.sortBy(g,function(num){
        return num.price
    })
    console.log(g)
    return g
}
Bid.get_bid_show1 = function(activity_name,bid_name){
    var a = JSON.parse(localStorage.getItem(('activitylist')))
    var current_activity=Bid.get_current_activity();
    var current_bid=Bid.get_current_bid()
    console.log(activity_name)
    console.log(bid_name)
    console.log('------====+++')
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    console.log(a)
    console.log(b)
    var g = _.findWhere(b,{bidname: current_bid}).bidapp
//    var h = _.last(g).bider
    console.log(_.findWhere(b,{bidname: current_bid}))
    var h = _.first(g).bider
    return h
}
Bid.get_bid_show2 = function(activity_name,bid_name){
    var a = JSON.parse(localStorage.getItem(('activitylist')))
    var current_activity=Bid.get_current_activity();
    var current_bid=Bid.get_current_bid()
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    var g = _.findWhere(b,{bidname: current_bid}).bidapp
//    var h = _.last(g).phone
    var h = _.first(g).phone
    return h
}
Bid.get_bid_show3 = function(activity_name,bid_name){
    var a = JSON.parse(localStorage.getItem(('activitylist')))
    var current_activity=Bid.get_current_activity();
    var current_bid=Bid.get_current_bid()
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    var g = _.findWhere(b,{bidname: current_bid}).bidapp
//    var h = _.last(g).price
    var h = _.first(g).price
    return h
}
//Bid.compare_price = function(activity_name,bid_name){
//    var action = JSON.parse(localStorage.getItem('activitylist'))
//    var current_activity=Bid.get_current_activity();
//    var current_bid=Bid.get_current_bid()
//    var active = _.findWhere(action,{name: current_activity}).bid_list
//    var activity = _.findWhere(active,{bidname:current_bid}).bidapp
//    if(activity[0].price < activity[1].price){
//
//    }
//}
Bid.compare_price = function(activity_name,bid_name){
    var action = JSON.parse(localStorage.getItem('activitylist'))
    var current_activity=Bid.get_current_activity();
    var current_bid=Bid.get_current_bid()
    var active = _.findWhere(action,{name: current_activity}).bidlist
    var activity = _.findWhere(active,{bidname:current_bid}).bidapp
    activity = _.sortBy(activity,function(num){
        return num.price
    })
}
Bid.bid_jj_message = function(){
    var active =JSON.parse(localStorage.getItem('activitylist'))
    var current_activity=Bid.get_current_activity();
    console.log(current_activity)
    console.log(active)
    var current_bid=Bid.get_current_bid()
    var action = _.findWhere(active,{name:current_activity}).bidlist
    var activity = _.findWhere(action,{bidname:current_bid}).bidapp
    var count = _.countBy(activity,function(activity){
        return activity.price
    })
    var num = _.map(count,function(value,key){
        return{"price":key,"count":value}
    })
    return num
//    $scope.biddings = num
}
