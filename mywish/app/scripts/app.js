'use strict';
angular
  .module('mywishApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/creat_active',{
            templateUrl:'views/creat_active.html',
            controller:'CreatActiveCtrl'
        }
      )
        .when('/active_listbox',{
            templateUrl:'views/active_listbox.html',
               controller:'Active_listboxCtrl'
        })
        .when('/creat_active_with',{
            templateUrl:'views/creat_active_with.html',
            controller:'Creat_active_withCtrl'
        })
        .when('/creat_active_return',{
            templateUrl:'views/active_listbox.html',
            controller:'Creat_active_returnCtrl'
//        })
//        .when('/creat_active_with',{
//            templateUrl:'views/creat_active_with.html',
//            controller:'Creat_listCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
