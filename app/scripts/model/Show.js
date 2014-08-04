/**
* Created by guorui on 14-8-1.
*/
//function Show(){
//
//}
//Show.prototype.show_message = function(activity_name,bid_name){
//    var active = JSON.parse(localStorage.getItem('activitylist'))
//    var action=_.findWhere(active,{name:activity_name}).bidlist;
//    var activity = _.findWhere(action,{bidname: bid_name}).bidapplylist
//    _.findWhere(activity,{})
//    return add_message_bid(activity,activity_name,active)
//}
//Show.working_bid_save = function(bid_name){
//    localStorage.setItem('working_bid',bid_name)
//}
//Show.add_messages_bid = function(activity_name,bid_name){
//    var activities = _.findWhere(active,{name: activity_name}).applylist
//    _.each(activity,function(bid_element){_.each(activities,function(apply_element){
//        if(bid_element.phone == apply_element.phone){
//            bid_element.id = apply_element.applyname
//        }
//    })})
//        return bid_element.id
//    }
//


//$scope.go_return = function () {
//    $location.path('/bid_activity')
//}
//$scope.show_message = function () {
//    var active = JSON.parse(localStorage.getItem("messages"));
//    $scope.activity_bid = localStorage.working_bid;
//    for (var i in active) {
//        for (var j in active[i].bid_data) {
//            for (var k in active[i].bid_data[j].bid_list) {
//                if (active[i].bid_data[j].bid_name == localStorage.working_bid) {
//                    $scope.people_number1 = active[i].bid_data[j].bid_list.length;
//                    active[i].bid_data[j].bid_list = _.sortBy(active[i].bid_data[j].bid_list, function (num) {
//                        return num.iprice;
//                    });
//                    console.log(_.sortBy(active[i].bid_data[j].bid_list, function (num) {
//                        return num.iprice;
//                    }))
//                    var a = JSON.parse(localStorage.getItem("messages"));
//                    localStorage.setItem('messages', JSON.stringify(a))
//                    $scope.list4 = active[i].bid_data[j].bid_list;
//                    localStorage.setItem('messages', JSON.stringify(active))
//                }
//            }
//        }
//    }
//}
//$scope.show_message()
//$scope.show_bid_message = function()
//{
//    var action = JSON.parse(localStorage.getItem(("messages")))
//    for (var i in action) {
//        for (var j in action[i].bid_data) {
//            for (var k in action[i].bid_data[j].bid_list) {
//                if (action[i].bid_data[j].bid_name == localStorage.working_bid) {
//                    if (action[i].bid_data[j].bid_list[0].iprice < action[i].bid_data[j].bid_list[k].iprice) {
//                        $scope.bider = action[i].bid_data[j].bid_list[0].bid
//                        $scope.telephone = action[i].bid_data[j].bid_list[0].iphone
//                        $scope.bider_price = action[i].bid_data[j].bid_list[0].iprice
//                        $scope.show_bid = true
//                    }
//                    else {
//                    }
//                }
//            }
//        }
//    }
//}
//$scope.show_bid_message()
//$timeout(function () {
//    $('#ModalSuccess').modal("show");
//    $timeout(function () {
//        $('#ModalSuccess').modal('hide');
//    }, 3000)
//})