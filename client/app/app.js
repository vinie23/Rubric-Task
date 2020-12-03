import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngArea from 'angular-aria';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import 'angular-material/angular-material.css';
import Components from './components/components';
import AppComponent from './app.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngMaterial,ngArea,ngMessages,ngAnimate,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
