import HomeController from './home.controller';

require('./home.scss');

const HomeModule = angular.module('HomeModule', [])
    .controller('HomeController', HomeController);

export default HomeModule;
