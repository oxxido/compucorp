import HomeController from './home.controller';
import TestController from './test/test.controller';

require('./home.scss');

//require('angular-spotify');

const HomeModule = angular.module('HomeModule', [])
    .controller('HomeController', HomeController)
    .controller('TestController', TestController)
    //.service('Spotify', Spotify)
    ;

export default HomeModule;
