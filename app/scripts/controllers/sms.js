//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_access;
$(document).ready(function () {
    native_access = new NativeAccess();
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
                        console.log(j)
                        console.log('____________________________')
                        if (active_life[i].apply_list.length == 0) {
                            console.log('1')
                            active_life[i].apply_list.unshift(my_array)
                            localStorage.setItem("messages", JSON.stringify(active_life))
//                            console.log("报名成功")
                            native_accessor.send_sms(json_message.messages[0].phone, "报名成功")
                            fresh()
                        }
                        else {

                            if (json_message.messages[0].phone == active_life[i].apply_list[j].phone) {
                                console.log('+++++++++++++a')

                                native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名")
//                                console.log("报名成功，报名重复")
//                            console.log(my_phone,active_life[i].apply_list[j].phone,i,j,'1111111111111111111')
                                return;
                            }
                            else {
                                console.log(1)
                                native_accessor.send_sms(json_message.messages[0].phone, "报名成功")
//                                console.log("报名成功")
                                console.log("==================2")
                                console.log("2")
                                active_life[i].apply_list.unshift(my_array)
                                localStorage.setItem("messages", JSON.stringify(active_life))
                                fresh()
                                return;
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
            if (active_life[i].actname == localStorage.working_activity) {
                for (var i in active_life) {
                    if (active_life[i].activity_status == 'false') {
                        var message = json_message.messages[0].message.replace(/\s/g, "");
                        if (!message.search(/bm/i)) {
                            native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始，清稍候")
                        }
                        else {
                        }
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
        console.log(localStorage.bid_status == "true")
        var bid_life = JSON.parse(localStorage.getItem("messages"))
//        var messages1 = JSON.parse(localStorage.getItem("messages")) || [];
//        for (var i in bid_life) {
//
//            for (var j in bid_life[i].bid_data) {
//
//                var bid_active1 = bid_life[i].bid_data[j].bid_name
//                var my_bid_result = {'bid_name': bid_active1, 'my_message': []}
////                my_bid.unshift(my_bid_result)
////                for(var k in my_bid)
//                localStorage.setItem("my_bid1", JSON.stringify(my_bid_result))
//                var bid11 = JSON.parse(localStorage.getItem("my_bid1"))
//                for(var k in bid11){
////                    bid11[k].my_message.unshift(my_message)
//                    localStorage.setItem("/my_bid1", JSON.stringify(bid11))
//                }
//                localStorage.setItem("my_bid1", JSON.stringify(bid11))
//            }
//        }
        var bid11 = JSON.parse(localStorage.getItem("my_bid1"))
        for (var i in bid11) {
            console.log('++++++++++++++=_')
//            bid11[i].my_message.unshift(my_message)
            localStorage.setItem("my_bid1", JSON.stringify(bid11))
        }

        for (var i in bid_life) {

            var message = json_message.messages[0].message.replace(/\s/g, "");
            if (!message.search(/jj/i)) {
                var my_bid = message.substr(2).trim()
                var my_iphone = json_message.messages[0].phone
                for (var j in bid_life[i].apply_list) {
                    var mine_name = bid_life[i].apply_list[j].name
                    var my_table = {'bid': mine_name, 'iphone': my_iphone,'iprice':my_bid}
//                    var my_message = {'name_message': mine_name, 'phone_message': my_iphone, 'price_message': my_bid}
                    var bid_var = bid_life[i].apply_list

                    for (var a = 0; a <= bid_life[i].bid_data.length; a++) {


                        var bid_b = _.find(bid_life, function (b) {
                            return  bid_life[i].bid_data[a].bid_list.length == 0
                        })

                        if (bid_b) {
                            bid_life
//                            bid_life[i].bid_result.unshift(my_message)
//                            localStorage.setItem("messages", JSON.stringify(bid_life))
//                            function rank(x,y)
//                            {
//                                return x - y;
//                            }
//                            var array = new Array(my_table.iprice)
//                            array.sort(rank)
                            bid_life[i].bid_data[a].bid_list.unshift(my_table)
                            localStorage.setItem("messages", JSON.stringify(bid_life))
                            var a = JSON.parse(localStorage.getItem('messages'))
                            fresh1()
                            native_accessor.send_sms(json_message.messages[0].phone, "竞价成功")
                            return
//
                        }
                        else {
                            var a = _.find(bid_life, function (b) {
                                return b.actname == localStorage.working_activity
                            }).apply_list
                            var b = _.find(bid_life, function (b) {
                                return b.actname == localStorage.working_activity
                            }).bid_data[0].bid_list
                            if (_.find(a, function (a) {
                                return a.phone == json_message.messages[0].phone
                            })) {
                                if (_.find(b, function (b) {
                                    return b.iphone == json_message.messages[0].phone
                                })) {
                                    native_accessor.send_sms(json_message.messages[0].phone, "您已竞价，请勿重复竞价")
                                    return
                                }
                                else {
//                                    bid_life[i].bid_result.unshift(my_message)
//                                    localStorage.setItem("messages", JSON.stringify(bid_life))
                                    bid_life[i].bid_data[0].bid_list.unshift(my_table)
                                    localStorage.setItem("messages", JSON.stringify(bid_life))
                                    fresh1()
                                    native_accessor.send_sms(json_message.messages[0].phone, "竞价成功")
                                    return
                                }

                            }
                            else {
                                native_accessor.send_sms(json_message.messages[0].phone, "对不起，您没有报名此次活动")
                                return
                            }
                        }
                    }
                }
                function fresh1() {
                    console.log(55)
                    var list2_refresh = document.getElementById('list2_id')
                    console.log(list2_refresh)
                    if (list2_refresh) {
                        var scope = angular.element(list2_refresh).scope();
                        scope.$apply(function () {
                            scope.succeed()
                        })
                    }
                }

                fresh1()
            }
        }
//        function bid_change() {
//            for (var a = 0; a <= bid_var.length; a++){
//                var bid_var1 = bid_var[a].bid_data
//                bid_change1()
//            }
//        }
//        function bid_change1(){
//            for(var b = 0; b <= bid_var1.length; b++){
//                bid_life[i].bid_result.unshift(my_message)
//                localStorage.setItem("messages", JSON.stringify(bid_life))
//
//                bid_var1[b].bid_list.unshift(my_table)
//                localStorage.setItem("messages", JSON.stringify(bid_life))
//                var a = JSON.parse(localStorage.getItem('messages'))
//                console.log(a)
//                fresh1()
//                native_accessor.send_sms(json_message.messages[0].phone, "竞价成功")
//                return
//            }
//        }
    }



//        var bid_live = JSON.parse(localStorage.getItem("messages"))
//        for (var i in bid_live) {
////            var my_message = {'name_message': name_style, 'phone_message': phone_style, 'price_message': price_style}
//            for (var j in bid_live[i]) {
//                var name_style = bid_live[i].apply_list[j].name
//                var phone_style = bid_live[i].apply_list[j].phone
//                for (var k in bid_live[i].bid_data) {
//                    for (var l in bid_live[i].bid_data[k]) {
//                        for (var q in bid_live[i].bid_data[k].bid_list) {
//                            var price_style = bid_live[i].bid_data[k].bid_list.iphone
//                            if (bid_live[i].bid_data[a].bid_list.length == 0) {
//                                var my_message = {'name_message': name_style, 'phone_message': phone_style, 'price_message': price_style}
//                                bid_live[i].bid_result.unshift(my_message)
//                                localStorage.setItem("messages", JSON.stringify(bid_live))
//                            }
//                            else {
//                                if (bid_live[i].bid_data[a].bid_list.iphone == bid_live[i].apply_list[j].phone) {
//                                    var my_message = {'name_message': name_style, 'phone_message': phone_style, 'price_message': price_style}
//                                    bid_live[i].bid_result.unshift(my_message)
//                                    localStorage.setItem("messages", JSON.stringify(bid_live))
//                                }
//                            }
//                        }
//                    }
//                }
//            }
////            var my_message = {'name_message': name_style, 'phone_message': phone_style, 'price_message': price_style}
//        }


}


function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}