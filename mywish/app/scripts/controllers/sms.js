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

    process_received_message: function (json_message) {
        console.log(json_message)
        var exercise={'act_name':$scope.activity,'activity.status':false};
        var exercises=JSON.parse(localStorage.getItem("messages")) || [];
        for(var i in exercises)
        {
           if(exercises[i].activity.status=true)
               var message = json_message.messages[0].message.replace(/\s/g, "");
           if(message.search(/bm|ｂｍ/i)==0)
           {
               var my_name=message.substr[2].trim()
               var my_phone=message.substr[0].trim()
               var my_array={'myname':}

           }
        }

}


}


    function notify_message_received(message_json)
{
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
