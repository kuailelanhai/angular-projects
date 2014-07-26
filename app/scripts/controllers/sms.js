//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_access;
$(document).ready(function(){
    native_access=new NativeAccess();
})

var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {
//        var message = json_message.messages[0].message.replace(/\s/g, "");
        var active_life = JSON.parse(localStorage.getItem("messages"))
        for (var i in active_life) {
            if (active_life[i].activity_status == 'true') {
                var message = json_message.messages[0].message.replace(/\s/g, "");
                if (!message.search(/bm/i)) {
                    var my_name = message.substr(2).trim()
                    var my_phone = json_message.messages[0].phone
                    var my_array = {'name': my_name, 'phone': my_phone}
                    console.log(my_array)
                    console.log('++++++++++++++++++++++++++++++++++=')
                    for (var j = 0; j <= active_life[i].apply_list.length; j++) {
                        if (active_life[i].apply_list.length == 0) {
                            active_life[i].apply_list.unshift(my_array)
                            localStorage.setItem("messages", JSON.stringify(active_life))
//                            console.log("报名成功")
                            native_accessor.send_sms(json_message.messages[0].phone, "报名成功")
                            fresh()
                        }
                        else {

                            if (json_message.messages[0].phone == active_life[i].apply_list[j].phone) {
                                native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名")
//                                console.log("报名成功，报名重复")
//                            console.log(my_phone,active_life[i].apply_list[j].phone,i,j,'1111111111111111111')
                                break;
                            }
                            else {
                                native_accessor.send_sms(json_message.messages[0].phone, "报名成功")
//                                console.log("报名成功")
                                console.log("==================2")
                                active_life[i].apply_list.unshift(my_array)
                                localStorage.setItem("messages", JSON.stringify(active_life))
                                fresh()
                                break;
                            }

                        }
                    }

                    function fresh() {

                        var list_refresh = document.getElementById('list_id')
                        console.log(list_refresh)
                        if (list_refresh) {
                            var scope = angular.element(list_refresh).scope();
                            scope.$apply(function () {
                                scope.success()
                            })
                        }
                    }
                    fresh()
                }
            }
            if(active_life[i].actname==localStorage.working_activity) {
                for (var i in active_life) {
                        if (active_life[i].activity_status == 'false') {
                            var message = json_message.messages[0].message.replace(/\s/g, "");
                            if (!message.search(/bm/i)) {
                                native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始，清稍候")
                            }
                            else{}
                        }
                    }
            }
//            if(bid_life[i].bid_name==localStorage.working_bid) {
//                for (var i in bid_life) {
//                    if (localStorage.bid_status == 'false') {
//                        var message = json_message.messages[0].message.replace(/\s/g, "");
//                        if (!message.search(/jj/i)) {
//                            native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始，清稍候")
//                        }
//                        else{}
//                    }
//                }
//            }

//            else {
//                native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始，清稍候")
////                console.log("活动尚未开始，清稍候")
//
//            }

        }
        console.log(localStorage.bid_status=="true")
        var bid_life=JSON.parse(localStorage.getItem("messages"))
        for(var i in bid_life){
//            for(var t in bid_life[i].bid_data){
//            if(active_life[i].bid_data[t].bid_status1=="false")
//            {console.log('+++++++++++++++++++++++++++++++++')
                console.log(localStorage.bid_status=="true")
                var message = json_message.messages[0].message.replace(/\s/g, "");
                console.log('123')
                if (!message.search(/jj/i)) {
                    console.log('123========')
                    var my_bid = message.substr(2).trim()
                    var my_iphone = json_message.messages[0].phone
//                    var bid_list
                    for(var j in bid_life[i].apply_list) {
                        var mine_name = bid_life[i].apply_list[j].name
                        var my_table = {'bid': mine_name, 'iphone': my_iphone}
                        console.log(my_table)
                        for (var a = 0; a <= bid_life[i].bid_data.length; a++) {
                            console.log('------------------------------------------')
                            for(var b = 0;b<=bid_life[i].bid_data[a].bid_list.length;b++){
                            console.log('-----------------------------')
                            if (bid_life[i].bid_data[a].bid_list.length == 0) {
                                bid_life[i].bid_data[a].bid_list.unshift(my_table)
                                localStorage.setItem("messages", JSON.stringify(bid_life))
                                native_accessor.send_sms(json_message.messages[0].phone, "竞价成功")
                                fresh1()
                            }
//                                console.log('-----------------------------=')
                            else {
                                if (my_iphone == bid_life[i].apply_list[j].phone) {
//                                    bid_life[i].bid_list.unshift(my_table)
//                                    localStorage.setItem("messages", JSON.stringify(bid_life))
//                            console.log("报名成功")
                                    if (my_iphone == bid_life[i].bid_data[a].bid_list[b].iphone) {
                                        native_accessor.send_sms(json_message.messages[0].phone, "您已竞价，请勿重复竞价")
                                    }
                                    else {
                                        bid_life[i].bid_data.bid_list.unshift(my_table)
                                        localStorage.setItem("messages", JSON.stringify(bid_life))
                                        native_accessor.send_sms(json_message.messages[0].phone, "竞价成功")
                                    }
                                    fresh1()
                                }
                                else {
                                    native_accessor.send_sms(json_message.messages[0].phone, "对不起，您没有报名此次活动")
                                }
                            }
//                                if(my_iphone != bid_life[i].apply_list[j].phone){
//                                    native_accessor.send_sms(json_message.messages[0].phone, "竞价失败")
//                                }
//                            }
//                            else {
//                                if (json_message.messages[0].phone == bid_life[i].bid_list[j].iphone) {
//                                    native_accessor.send_sms(json_message.messages[0].phone, "您已竞价成功，请勿重复竞价")
////                                console.log("报名成功，报名重复")
////                            console.log(my_phone,active_life[i].apply_list[j].phone,i,j,'1111111111111111111')
//                                    break;
//                                }
//                                else {
//                                    native_accessor.send_sms(json_message.messages[0].phone, "竞价成功")
////                                console.log("竞价成功")
//                                    console.log("==================2")
//                                    bid_life[i].bid_list.unshift(my_table)
//                                    localStorage.setItem("messages", JSON.stringify(bid_life))
//                                    fresh1()
//                                    break;
//                                }
//
                            }
                        }
                        function fresh1() {
                            var list1_refresh = document.getElementById('list1_id')
                            console.log(list1_refresh)
                            if (list1_refresh) {
                                var scope = angular.element(list1_refresh).scope();
                                scope.$apply(function () {
                                    scope.succeed()
                                })
                            }
                        }

                        fresh1()
//                    $scope.succeed=function() {
//                        var active=JSON.parse(localStorage.getItem("messages"));
//                        console.log(active)
//                        for (var i in active) {
//                            if (active[i].bid_name == localStorage.working_bid) {
////                $scope.applys=active[i].apply_list;
//                                $scope.people_number1 = active[i].bid_list.length;
//                                $scope.list3 = active[i].bid_list;
//                            }
//                        }
                    }


//                    }

                }
//            }
//            if(bid_life[i].bid_name==localStorage.working_bid) {
//                for (var i in bid_life) {
//                    if (localStorage.bid_status == 'false') {
//                        var message = json_message.messages[0].message.replace(/\s/g, "");
//                        if (!message.search(/jj/i)) {
//                            native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始，清稍候")
//                        }
//                        else{}
//                    }
//                }
//            }
        }
    }




}


function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}