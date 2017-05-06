// Import angular
import 'angular';// from 'angular';

//import uiRouter from 'angular-ui-router';
import 'angular-ui-router';

import routes from './routes'

// import main css
require('../stylesheets/main.scss');

// modules:
import HomeModule from './components/home/home.module';

angular.module('musify', [
    //'ngRoute',
    'ui.router',
    HomeModule.name,
    ])
    .config(routes);
