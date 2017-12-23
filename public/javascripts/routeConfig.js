var myApp = angular.module('allJobs', ['ngRoute']);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: '../views/home.html',
      // controller: 'mainPage'
    })
    .when('/register', {
      templateUrl: '../views/register.html',
      controller: 'register'
    })
    .when('/myJobs', {
      templateUrl: '../views/myJobs.html',
      controller: 'myJobs'
    })
    
    .when('/addPosition', {
      templateUrl: '../views/addPosition.html',
      controller: 'addPosition'
    });


});