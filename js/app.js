var app = angular.module("myApp", ["ngRoute", "ui.bootstrap","infinite-scroll"]);

app.config(function($routeProvider) {
    $routeProvider
    // .when("/", {
    //     templateUrl : "partials/home.htm",
    //     controller : "HomeController"
    // })
    .when("/", {
        templateUrl : "partials/home.htm",
        controller : "HomeController"
    })

});

app.run(function($rootScope) {
  $rootScope.gm={

  }
});
