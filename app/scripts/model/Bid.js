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
<<<<<<< HEAD
    this.bidapp=[];
=======
    this.bid_list=[]
    this.bid_data=[]
    this.bid_status='false'
>>>>>>> c7f233352eda93db246a51462df21bdc739341b1
}
//Bid.prototype.add_bid_info=function(){
//    var activity_list = JSON.parse(localStorage.getItem('messages'));
//    _.findWhere(activity_list,{actname:localStorage.working_activity}).bid_list.push(this);
//    localStorage.setItem('messages',JSON.stringify(activity_list));
//}
Bid.check_bid_status=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    if(_.findWhere(activity_list,{actname:activity_name}).bid_status=='true')
        return 'start';
    return 'end';
}

Bid.is_bid_able=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    if(_.find(activity_list,function(act){return act.actname==activity_name&&(act.apply_list.length==0||act.activity_status=='true'||act.bid_status=='true')}))
        return true;
    return false;
}

Bid.save_bid_start_status=function(){
    var activity_list = JSON.parse(localStorage.getItem('messages'));
    _.findWhere(activity_list,{actname:localStorage.working_activity}).bid_status='true';
    localStorage.setItem('messages',JSON.stringify(activity_list));
}

Bid.save_bid_end_status=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('messages'));
    _.findWhere(activity_list,{actname:activity_name}).bid_status='false';
    localStorage.setItem('messages',JSON.stringify(activity_list));
}
Bid.creat_bid_name=function(){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    var bid_list=_.findWhere(activity_list,{actname:localStorage.working_activity}).bid_data;

    if(bid_list.length==0)
        return '竞价1';
    return '竞价'+(bid_list.length+1);
}
//Bid.get_bid_list=function(activity_name){
//    var activity_list=JSON.parse(localStorage.getItem('messages'));
//    var bid_list=_.findWhere(activity_list,{actname:activity_name}).bid_list;
//    return bid_list.reverse();
//}
Bid.save_bid_style=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    var lastbid= _.last(_.findWhere(activity_list,{actname:activity_name}).bid_list);
    lastbid.bid_status1='true';
    localStorage.setItem('messages',JSON.stringify(activity_list));
}
Bid.save_current_activity=function(activity_name){
    localStorage.setItem('working_activity',activity_name);
}
Bid.get_current_activity=function(){
    return localStorage.getItem('working_activity');
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
    var activity_list=JSON.parse(localStorage.getItem('messages'));
    var bid_list=_.findWhere(activity_list,{actname:activity_name}).bid_list;
    var bid_messages= _.findWhere(bid_list,{bidname:bid_name}).bid_result;
    return Bid.add_apply_name_into_bid_message(activity_list,bid_messages,activity_name);

}
Bid.add_apply_name_into_bid_message=function(activity_list,bid_messages,activity_name){
    var apply_messages=_.findWhere(activity_list,{actname:activity_name}).bid_list;
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
<<<<<<< HEAD
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
    var g = _.findWhere(b,{bidname: current_bid}).bidapp
    g = _.sortBy(g,function(num){
        return num.price
    })
    return g
}
Bid.get_bid_show1 = function(activity_name,bid_name){
    var a = JSON.parse(localStorage.getItem(('activitylist')))
    var current_activity=Bid.get_current_activity();
    var current_bid=Bid.get_current_bid()
    var b = _.findWhere(a,{name:current_activity}).bidlist;
    var g = _.findWhere(b,{bidname: current_bid}).bidapp
//    var h = _.last(g).bider
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
    var active = _.findWhere(action,{name: current_activity}).bid_list
    var activity = _.findWhere(active,{bidname:current_bid}).bidapp
    activity = _.sortBy(activity,function(num){
        return num.price
    })
}
$scope.show_message = function () {
    var active = JSON.parse(localStorage.getItem("messages"));
    $scope.activity_bid = localStorage.working_bid;
    for (var i in active) {
        for (var j in active[i].bid_data) {
            for (var k in active[i].bid_data[j].bid_list) {
                if (active[i].bid_data[j].bid_name == localStorage.working_bid) {
                    $scope.people_number1 = active[i].bid_data[j].bid_list.length;
                    active[i].bid_data[j].bid_list = _.sortBy(active[i].bid_data[j].bid_list, function (num) {
                        return num.iprice;
                    });
//                    console.log(_.sortBy(active[i].bid_data[j].bid_list, function (num) {
//                        return num.iprice;
//                    }))
                    var a = JSON.parse(localStorage.getItem("messages"));
                    localStorage.setItem('messages', JSON.stringify(a))
                    $scope.list4 = active[i].bid_data[j].bid_list;
                    localStorage.setItem('messages', JSON.stringify(active))
                }
            }
        }
    }
}

=======







//Bid.save_bid_status_bid_message=function(){
//    var action = JSON.parse(localStorage.getItem("messages"));
//    _.findWhere(action,{actname:localStorage.working_activity}).bid_status="true"
//    localStorage.setItem('messages', JSON.stringify(action))
//    var bid = JSON.parse(localStorage.getItem("messages"));
//    var bidding=  _.find(bid, function (bid) {
//        return bid.name == localStorage.working_activity
//    })
//    localStorage.bid = "竞价" + (bidding.bid_list.length + 1)
//    var bid_name = "竞价" + (bidding.bid_list.length + 1)
//    var bid_list = {'bid_name': bid_name, 'bid_color': 'true', 'bid_message': []}
//    bidding.bid_list.unshift(bid_list)
//    localStorage.setItem('messages', JSON.stringify(bid))
//}












function Bid(bid_name) {
    this.bid_name = bid_name;
    this.bid_phone = 'bid_phone';
    this.bid_price = 'bid_price';

}
Bid.activity_current_activity = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    return(  _.find(action, function (act) {
        return act.actname == localStorage.working_activity
    }))
}
Bid.get_apply_list = function (apply) {
    var action = JSON.parse(localStorage.getItem("messages"))
    return _.findWhere(action, {actname: apply}).apply_list
}
Bid.check_crruent_activity = function () {
    var action = JSON.parse(localStorage.getItem("activities"))

    return _.findWhere(action, {name: localStorage.working_activity}).bid_list
}
Bid.check_current_activity_bid = function () {
    var act = Bid.check_crruent_activity()
    if (act.length == 0) {
        return []
    } else {
        return _.findWhere(act, {bid: localStorage.working_bid}).bid_message
    }
}
Bid.get_current_activity = function (action) {
    localStorage.setItem('messages', JSON.stringify(action))
}
Bid.save_activity_status = function (status) {
    var action = JSON.parse(localStorage.getItem("messages"));
    _.findWhere(action, {actname: status}).activity_status = "true"
    localStorage.setItem('messages', JSON.stringify(action))
}
Bid.save_activity_status_false = function (status) {
    var action = JSON.parse(localStorage.getItem("messages"));
    _.findWhere(action, {actname: status}).activity_status = "false"
    localStorage.setItem('messages', JSON.stringify(action))
}
Bid.save_bid_status_bid_message=function(){
    var action = JSON.parse(localStorage.getItem("messages"));
    _.findWhere(action,{actname:localStorage.working_activity}).bid_status="true"
    localStorage.setItem('messages', JSON.stringify(action))
    var bid = JSON.parse(localStorage.getItem("messages"));
    var bidding=  _.find(bid, function (bid) {
        return bid.actname == localStorage.working_activity
    })
    var bid_data = {'bid_name': bid_name,'bid_status1':bid_status2,'bid_color':bid_color1,'bid_list':[]}
    localStorage.wroking_bid = "竞价" + (bidding.bid_data.length + 1)
    var bid_name = "竞价" + (bidding.bid_data.length + 1)
    var bid_data = {'bid_name': bid_name,'bid_status1':bid_status2,'bid_color':bid_color1,'bid_list':[]}
    bidding.bid_data.unshift(bid_data)
    localStorage.setItem('messages', JSON.stringify(bid))
        return bid_name
}
Bid.check_current_activity_activity_status = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    return(  _.find(action, function (act) {
        return act.actname == localStorage.working_activity && act.activity_status == 'true'
    }))
}
Bid.check_activity_status = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    return (_.find(action, function (action) {
        return action.activity_status == 'true'
    }))
}
Bid.check_current_activity_bid_list = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    var a =  _.findWhere(action, {actname: localStorage.working_activity}).bid_list
}
Bid.check_current_activity = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    return(_.find(action, function (bidding) {
        return bidding.actname == localStorage.working_activity
    }))
}
Bid.check_activity_status_length = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    var bidding = Bid.check_current_activity()
    return(  _.find(action, function (bid) {
        return bid.activity_status == 'true' || bidding.length == 0
    }))
}
Bid.check_current_bid = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    return(_.find(action, function (action) {
        return action.bid_list[0].bid == localStorage.working_bid
    }))
}
//Bid.refresh = function () {
//    var refresh_page = document.getElementById('id')
//    if (refresh_page) {
//        var scope = angular.element(refresh_page).scope();
//        scope.$apply(function () {
//            scope.refreshes();
//        })
//    }
//}
Bid.save_bid_status = function () {
    var action = JSON.parse(localStorage.getItem("activities"));
    _.findWhere(action, {actname: localStorage.working_activity}).bid_status = "false"
    localStorage.setItem('messages', JSON.stringify(action))

}
Bid.check_bid_price_bid_count = function () {
    var bid_price = JSON.parse(localStorage.getItem("bid_price"))
    return (_.find(bid_price, function (bid) {
        return bid.count == 1
    }))
}
Bid.check_bid_messages_bid_price = function () {
    var bidding = Bid.check_current_activity()
    var bids = Bid.check_bid_price_bid_count()
    var bid_message = bidding.bid_list[0].bid_message
    return (_.find(bid_message, function (bid) {
        return bid.bid_price == bids.price
    }))
}
Bid.save_bid_price = function () {
    var bidding = Bid.check_current_activity_bid()
    var count = _.countBy(bidding, function (bidding) {
        return bidding.bid_price
    })
    var coun = _.map(count, function (value, key) {
        return {"price": key, "count": value}
    })
    localStorage.setItem("bid_price", JSON.stringify(coun))
}
Bid.display_sortby = function () {
    var bidding = Bid.check_current_activity_bid()
    return(_.sortBy(bidding, function (bidding) {
        return bidding.bid_price
    }))
}
Bid.check_current_activity_save_bid_color = function () {
    Bid.refresh()
    Bid.save_bid_status()
    localStorage.status=false
    var bidding = JSON.parse(localStorage.getItem("activities"))
    var bid = _.findWhere(bidding, {name: localStorage.current_activity}).bid_list
    _.findWhere(bid, {bid_name: localStorage.bid}).bid_color = "false"
    localStorage.setItem("activities", JSON.stringify(bidding))
}
Bid.check_bid_start = function ($scope) {
    if (Bid.check_current_activity() && Bid.check_bid_status() && Bid.check_current_bid()) {
        $scope.bid_start = false
    }
}
Bid.current_display_bid_messages = function ($scope) {
    if (Bid.check_bid_price_bid_count() && Bid.activity_current_activity() && Bid.check_bid_messages_bid_price()) {
        $scope.success = "true"
        $scope.fail = "false"
        $scope.bid_name = Bid.check_bid_messages_bid_price().bid_name
        $scope.price = Bid.check_bid_messages_bid_price().bid_price
        $scope.phone = Bid.check_bid_messages_bid_price().bid_phone
    }
}
Bid.judge_check_bid_price_bid_count = function ($scope) {
    if (!Bid.check_bid_price_bid_count()) {
        $scope.success = "false"
        $scope.fail = "true"
    }
}
Bid.judege_check_current_activity_activity_status = function ($scope) {
    if (Bid.check_current_activity_activity_status()) {
        $scope.apply_status = "1"
    }
}
Bid.judge_check_bid_status_activity_status = function ($scope) {
    if (Bid.check_bid_status()) {
        $scope.disabled = true
    }
    if (Bid.check_bid_status() && Bid.check_activity_status()) {
        $scope.disabled = true
    }
    if (Bid.check_bid_status() && !Bid.check_activity_status()) {
        $scope.disabled = false
    }
}
Bid.check_bid_status = function () {
    var action = JSON.parse(localStorage.getItem("messages"))
    return(_.find(action, function (action) {
        return action.bid_status == 'true'
    }))
}
Bid.judge_check_bid_status = function ($scope) {
    if (Bid.check_bid_status()) {
        $scope.bid_start = true
    }
}
Bid.judge_check_activity_status_length = function ($scope) {
    if (Bid.check_activity_status_length()) {
        $scope.bid_start = true
    }
}
Bid.judge_check_bid_price_bid_count_current_activity_bid_messages_bid_price = function ($scope) {
    if (Bid.check_bid_price_bid_count() && Bid.check_current_activity() && Bid.check_bid_messages_bid_price()) {
        var bid_messages = Bid.check_bid_messages_bid_price()
        $scope.success = "true"
        $scope.fail = "false"
        $scope.bid_name = bid_messages.bid_name
        $scope.price = bid_messages.bid_price
        $scope.phone = bid_messages.bid_phone
    } else {
        $scope.success = "false"
        $scope.fail = "true"
    }
}
Bid.timeout=function($timeout){
    $('#ModalSuccess').modal("show");
    $timeout(function () {
        $('#ModalSuccess').modal('hide');
    }, 3000)
}
>>>>>>> c7f233352eda93db246a51462df21bdc739341b1
