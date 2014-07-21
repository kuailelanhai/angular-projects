//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_access;
$(document).ready(function(){
    native_access=new NativeAccess();
})

var native_accessor = {
    send_sms: function (phone, message) {
        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
//        console.log(phone, message);
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
                console.log('++++++++++++++++++++++++++++++')
                var message = json_message.messages[0].message.replace(/\s/g, "");
                if (!message.search(/bm/i)) {
                    var my_name = message.substr(2).trim()
//                    console.log(json_message.messages[0].phone,'++++++++++++++++++++++++++++++')
                    var my_phone = json_message.messages[0].phone
                    console.log(my_phone, '++++++++++++++ooooooooo++++++++++++++++')
//                    console.log(my_phone)
//                    console.log(my_name)
                    var my_array = {'name': my_name, 'phone': my_phone}
                    console.log(my_array)
//                   active_life[i].apply_list.unshift(my_array)
//                    localStorage.setItem("messages", JSON.stringify(active_life))
                    for (var j = 0; j <= active_life[i].apply_list.length; j++) {
                        console.log("========---------------=======")
////                         console.log("---------------"+active_life[i].apply_list[i].name)
                        if (active_life[i].apply_list.length == 0) {
                            active_life[i].apply_list.unshift(my_array)
                            localStorage.setItem("messages", JSON.stringify(active_life))
//                            console.log("报名成功")
                            native_accessor.send_sms(json_message.messages[0].phone, "报名成功")
                        }
                        else {
                            console.log(active_life[i].apply_list[j].phone)
                            console.log(json_message.messages[0].phone)
                            if (json_message.messages[0].phone == active_life[i].apply_list[j].phone) {
//                            this.send_sms(my_phone,"报名成功,报名重复")
                            native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名")
//                                console.log("报名成功，报名重复")
//                            console.log(my_phone,active_life[i].apply_list[j].phone,i,j,'1111111111111111111')
                                return;
                            }
                            else {console.log("1")
//                            this.send_sms(my_phone,"报名成功")

                            native_accessor.send_sms(json_message.messages[0].phone, "报名成功")
//                                console.log("报名成功")
                                active_life[i].apply_list.unshift(my_array)

                                localStorage.setItem("messages", JSON.stringify(active_life))
                                return;
                            }
                        }
                    }

//                    active_life.apply_list.push(my_array)
//                    localStorage.setItem('messages', JSON.stringify(active_life))
//                    native_accessor.send_sms(json_message.messages[0].phone, "恭喜您已报名成功")
//                    function fresh() {
//                        var list_refresh = document.getElementById('list_id')
//                        if (list_refresh) {
//                            var high = angular.element(list_refresh).scope();
//                            high.$phone(function () {
//                                high.use();
//                            })
//                        }
//
//                    }
//                    fresh()
                }
            }
            else
                native_accessor.send_sms(json_message.messages[0].phone, "活动尚未开始，清稍候")
//                console.log("活动尚未开始，清稍候")

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