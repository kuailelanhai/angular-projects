//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
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

    process_received_message: function (json_message)
    {
        var active_life = JSON.parse(localStorage.getItem("messages"))
        for (var i in active_life)
        {
            if (active_life[i].activity_status = true)
            {
                var message = json_message.messages[0].message.replace(/\s/g, "");
                if (!message.search(/bm/i))
                {
//                    console.log('==============================')
                    var my_name = message.substr(2).trim()
                    var my_phone = json_message.messages[0].phone
//                    console.log(my_phone)
//                    console.log(my_name)
                    var my_array = {'name': my_name, 'phone': my_phone}
                    console.log(my_array)
                    active_life[i].apply_list.push(my_array)
//                    localStorage.setItem("messages", JSON.stringify(active_life))
                    for (var j = 0; j < active_life[i].apply_list.length; j++) {
//                        console.log("==============="+my_name)
//                         console.log("---------------"+active_life[i].apply_list[i].name)
                        if (my_phone == active_life[i].apply_list[i].phone) {
                            console.log("报名成功，报名重复")
                        }
                        if(my_phone != active_life[i].apply_list[i].phone){
                            console.log("报名成功")
                        }
                        localStorage.setItem("messages", JSON.stringify(active_life))
                    }
//                    active_life.apply_list.push(my_array)
                    localStorage.setItem('messages', JSON.stringify(active_life))
//                    native_accessor.send_sms(json_message.messages[0].phone, "恭喜您已报名成功")
                    function fresh() {
                        var list_refresh = document.getElementById('list_id')
                        if (list_refresh) {
                            var high = angular.element(list_refresh).scope();
                            high.$phone(function () {
                                high.use();
                            })
                        }

                    }
                    fresh()
                }
            }

//                console.log("123")
//                console.log("my_array")
//                console.log(my_phone)
//                console.log(my_array)
//                active_life[i].apply_list.push(my_array)
//                localStorage.setItem("messages", JSON.stringify(active_life))
//                console.log('恭喜你报名成功')
            }
        }
//        function b()
//        {
//            $scope.list2=JSON.parse(localStorage.getItem="messages")
//            console.log("$scope.list2")
//        }
//        b()

    }






function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
