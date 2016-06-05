angular.module('app.controllers', [])
  
.controller('browseTabDefaultPageCtrl', function($scope) {

})
   
.controller('meTabDefaultPageCtrl', function($scope) {

})
      
.controller('moviePageCtrl', function($scope, MovieService) {
$scope.listings = [];
$scope.input = {};

$scope.getAllListings = function() {
    MovieService.getListings()
    .then(function (result) {
      $scope.listings = result.data.data;
      console.log($scope.listings);
    });
  }

$scope.addListing = function() {
    MovieService.addListing($scope.input)
    .then(function(result) {
      $scope.input = {};
      // Reload our listings, not super cool
      getAllListings();
    });
  }

})
   
.controller('sellTabDefaultPageCtrl', function($scope, SellService) {
$scope.listings = [];
$scope.input = {};

function getAllListings() {
    SellService.getListings()
    .then(function (result) {
      $scope.listings = result.data.data;
    });
  }

$scope.addListing = function() {
    SellService.addListing($scope.input)
    .then(function(result) {
      $scope.input = {};
      // Reload our listings, not super cool
      getAllListings();
    });
  }

})

 