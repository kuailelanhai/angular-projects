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
        var active_life = JSON.parse(localStorage.getItem("messages"))
        for (var i in active_life) {
            if (active_life[i].activity_status == 'true') {
                var message = json_message.messages[0].message.replace(/\s/g, "");
                if (!message.search(/bm/i)) {
                    var my_name = message.substr(2).trim()
                    var my_phone = json_message.messages[0].phone
                    var my_array = {'name': my_name, 'phone': my_phone}
                    console.log(my_array)
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

//            else {
//                native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始，清稍候")
////                console.log("活动尚未开始，清稍候")
//
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