'use strict';
angular.module('mywishApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.register="创建";
        $scope.go_register=function(){

            create()
//
        }

//var message={};
//message={name:which_name,activity:which_activity};
//var messages=JSON.parse(localStorage.getItem('messages')) || [];
//messages.push(message.unshift(message));
//localStorage.setItem("message",JSON.stringify(messages));
 function create (){


    var message={'name':$scope.activity,'activity_status':'false','apply_list':[],'bid_status':'false'};
    var messages=JSON.parse(localStorage.getItem("messages")) || [];
     console.log(message)


    var if_mark
    var recyle;

    for(recyle in messages) {

        if ($scope.activity == messages[recyle].name) {
            $scope.hide=1
            if_mark=true
            break;
        }
    }
     console.log(if_mark)
    if(!if_mark) {

        messages.unshift(message);
        localStorage.setItem("messages",JSON.stringify(messages))
        var messages = JSON.parse(localStorage.getItem('messages'))
        localStorage.current_activity=messages[0].name
//        $location.path('bidding')
        $location.path('/creat_active')
    }

}
$scope.show=localStorage.getItem("messages")

});
