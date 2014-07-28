'use strict';
angular.module('partyBidApp')
    .controller('MainCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.to = "返回"
        $scope.go_to = function () {
            $location.path('/active_listbox')
        }
        $scope.register = "创建";
        $scope.go_register = function () {

            creat()

//            $location.path('/creat_active')

        }


//var message={};
//message={name:which_name,activity:which_activity};
//var messages=JSON.parse(localStorage.getItem('messages')) || [];
//messages.push(message.unshift(message));
//localStorage.setItem("message",JSON.stringify(messages));
        function creat() {
            var message = {'actname': $scope.activity, 'activity_status': 'false', 'apply_list': [],'bid_data': [],bid_status:'false',status:'false','bid_list':[],'bid_result':[],'bid_price':[]};
            var messages = JSON.parse(localStorage.getItem("messages")) || [];

            var if_same
            var file;
            for (file in messages) {

                if ($scope.activity == messages[file].actname) {
                    $scope.show1 = true
                    if_same = true
                    break;
                }
            }
            //      console.log(if_same)
            if (!if_same) {
                messages.unshift(message);
                localStorage.setItem("messages", JSON.stringify(messages))
                var messages = JSON.parse(localStorage.getItem('messages'))
//        localStorage.current_activity=messages[0].name
//        $location.path('bidding')
                var action=JSON.parse(localStorage.getItem('messages'))
//                for(var i in action) {
                    localStorage.working_activity=$scope.activity
                        $location.path('/creat_active')
//                }
            }
        }

        $scope.show=localStorage.getItem("messages")


    });