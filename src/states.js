bidgelyDRApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider) {

    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $stateProvider
      .state('login', {
          url: "/login",
          templateUrl: "src/templates/login.html",
          controller: "loginCtrl"
      })
      .state('dashboard', {
         url: "/home",
         templateUrl: "src/templates/home.html",
         controller: "homeCtrl"
      });
      $urlRouterProvider.otherwise("/login");
    }
]);
