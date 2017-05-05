// Import angular
import 'angular';// from 'angular';

//import uiRouter from 'angular-ui-router';
import 'angular-ui-router';

import routes from './routes'

// modules:
import HomeModule from './components/home/home.module';

angular.module('musify', [
    //'ngRoute',
    'ui.router',
    HomeModule.name,
    ])
    .config(routes);
