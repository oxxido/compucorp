import homeTemplate from './components/home/home.html';

uiRouterConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

function uiRouterConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
            url: '/',
            controller: 'HomeController as homeCtrl',
            templateUrl: homeTemplate,
        })
}


export default uiRouterConfig;
