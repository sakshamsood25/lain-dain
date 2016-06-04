angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabs.browseTabDefaultPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/browseTabDefaultPage.html',
        controller: 'browseTabDefaultPageCtrl'
      }
    }
  })

  .state('tabs.meTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/meTabDefaultPage.html',
        controller: 'meTabDefaultPageCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/page1',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('tabs.moviePage', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/moviePage.html',
        controller: 'moviePageCtrl'
      }
    }
  })

  .state('tabs.sellTabDefaultPage', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/sellTabDefaultPage.html',
        controller: 'sellTabDefaultPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});