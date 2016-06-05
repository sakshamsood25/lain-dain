angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])


.service('SellService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'listings/';
 
  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }
  	getListings = function () {
    return $http.get(getUrl());
  };
    addListing = function(listing) {
    return $http.post(getUrl(), listing);
  }
    return {
    getListings: getListings,
    addListing: addListing
  }
})

.service('MovieService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'listings/';
 
  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }
  	getListings = function () {
    return $http.get(getUrl());
  };
    addListing = function(listing) {
    return $http.post(getUrl(), listing);
  }
    return {
    getListings: getListings,
    addListing: addListing
  }
});