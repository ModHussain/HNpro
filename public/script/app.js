	var app = angular.module('myApp', ["ngRoute"]);
	app.controller("myCtrl",function($scope){
	});
	app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "views/business.html",
            controller: "NewsCtrl"
        }) 
        .when("/entertain", {
            templateUrl : "views/entertain.html",
            controller: "NewsCtrl"
        })
         .when("/tech", {
            templateUrl : "views/tech.html",
            controller: "NewsCtrl"
        }) 
        
        .when("/health", {
            templateUrl : "views/health.html",
            controller: "NewsCtrl"
        }) 
        
        .when("/science", {
            templateUrl : "views/science.html",
            controller: "NewsCtrl"
        }) 
        
        .when("/sport", {
            templateUrl : "views/sports.html",
            controller: "NewsCtrl"
        }) 
    });
    