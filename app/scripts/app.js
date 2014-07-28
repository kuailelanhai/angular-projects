'use strict';

angular
    .module('partyBidApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'

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
                controller:'Creat_activeCtrl'
            }
        )
            .when('/active_listbox',{
                templateUrl:'views/active_listbox.html',
                controller:'Active_listboxCtrl'
            })
            .when('/bid_activity',{
                templateUrl:'views/bid_activity.html',
                controller:'Bid_activityCtrl'
            }
        )
            .when('/bid_list',{
                templateUrl:'views/bid_list.html',
                controller:'Bid_listCtrl'
            }
        )
            .when('/price_result',{
                templateUrl:'views/price_result.html',
                controller:'Price_resultCtrl'
            }
        )
            .when('/result_price',{
                templateUrl:'views/result_price.html',
                controller:'Result_priceCtrl'
            }
        )
//        .when('/creat_active_with',{
//            templateUrl:'views/creat_active_with.html',
//            controller:'Creat_active_withCtrl'
//        })
//        .when('/creat_active_return',{
//            templateUrl:'views/active_listbox.html',
//            controller:'Creat_active_returnCtrl'
//        })
//        .when('/creat_active_with',{
//            templateUrl:'views/creat_active_with.html',
//            controller:'Creat_listCtrl'
//        })
            .otherwise({
                redirectTo: '/'
            });
    });