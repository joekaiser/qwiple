angular.module('qwiple', ['ui.router', 'ngSanitize', 'angularMoment'])


.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('create', {
                url: '/',
                templateUrl: '/views/new/new.html',
                controller: 'newViewController'
            })
            // .state('app', {
            //     url: '/app',
            //     abstract: true,
            //     templateUrl: '/views/app/app.html',
            //     data: {
            //         authorizedRole: USER_ROLES.all
            //     }
            // })
            // .state('app.house', {
            //     url: '',
            //     templateUrl: '/views/home/home.html',
            //     controller: 'homeController',
            //     data: {
            //         authorizedRole: USER_ROLES.all
            //     }
            // })
            // .state('app.garden', {
            //     url: '/garden',
            //     template: 'garden',
            //     data: {
            //         authorizedRole: USER_ROLES.all
            //     }
            // })
            // .state('app.store', {
            //     url: '/store',
            //     template: 'store',
            //     data: {
            //         authorizedRole: USER_ROLES.all
            //     }
            // })
            // .state('app.playground', {
            //     url: '/playground',
            //     template: 'playground',
            //     data: {
            //         authorizedRole: USER_ROLES.all
            //     }
            // })
            // .state('app.school', {
            //     url: '/school',
            //     template: 'school',
            //     data: {
            //         authorizedRole: USER_ROLES.all
            //     }
            // })
        ;

    }
])

.run(['$log', '$rootScope', '$transitions', '$http',
    function($log, $rootScope, $transitions, $http) {

        $http.defaults.headers.common['Accept'] = 'application/json, text/plain, * / *';
        $http.defaults.headers.post['Content-Type'] = 'application/json';
    }
])

.controller('ApplicationController', ['$log', '$rootScope', '$scope', '$state',
    function($log, $rootScope, $scope, $state) {

        // $scope.reloadUserPets = function() {
        //     PetService.getUserPets(Session.data().id)
        //         .then(function(res) {
        //             $scope.pets = res.data;
        //         })
        //         .catch(function(err) {
        //             $log.error(err);
        //         });
        // };

        // $scope.activePet = function() {
        //     return _.find($scope.pets, function(p) {
        //         return p._id == Session.data().active_pet;
        //     });
        // }

        // $scope.currentUser = function() {
        //     return Session.data();
        // }
        // $scope.isAuthorized = AuthService.isAuthorized;

        // $scope.logout = function() {
        //     AuthService.logout();
        //     // $scope.currentUser = null;
        //     $state.transitionTo('main');
        // };

        // $rootScope.$on(AUTH_EVENTS.loginSuccess, function() {
        //     $scope.reloadUserPets();
        // });

        // $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() {
        //     $log.warn('not authenticated');
        //     $scope.logout();
        // });

        // $rootScope.$on(AUTH_EVENTS.notAuthorized, function() {
        //     //show error message
        //     $log.warn('not authorized for previous service call');
        // });

    }
]);
angular.module('qwiple').controller('newViewController', ['$log', '$rootScope', '$scope',
    function($log, $rootScope, $scope) {


        // var getEggs = function() {
        //     PetService.getUserEggs(Session.data().id)
        //         .then(function(res) {
        //             $scope.eggs = res.data.length === 0 ? null : res.data;

        //         })
        //         .catch(function(err) {
        //             $log.error(err);
        //         });
        // };





        (function constructor() {
            //code
        })();

    }
]);
//# sourceMappingURL=site-scripts.js.map
