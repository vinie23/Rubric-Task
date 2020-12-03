import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import HttpService from '../../common/service/httpservice';
import Datefilter from '../../common/filters/date.filter';
let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})
.service('HttpService', HttpService)
.component('home', homeComponent)
.filter('datefilter',Datefilter)
  
.name;

export default homeModule;
