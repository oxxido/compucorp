import HomeController from './home.controller';
import TestController from './test/test.controller';

require('./home.scss');

const HomeModule = angular.module('HomeModule', [])
    .controller('HomeController', HomeController)
    .controller('TestController', TestController)
    ;

export default HomeModule;
