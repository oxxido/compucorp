// Import angular
import 'angular';// from 'angular';

//import uiRouter from 'angular-ui-router';
import 'angular-ui-router';

import routes from './routes';

import 'angular-spotify';

// import main css
require('../stylesheets/main.scss');

// modules:
import HomeModule from './components/home/home.module';

import Components from './components/components.module';

angular.module('musify', [
    //'ngRoute',
    'ui.router',
    'spotify',
    HomeModule.name,
    Components.name
    ])
    .config(routes);