'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
	  $scope.runQuery = function(email) {
		  $http.get(
		  	'https://api.fullcontact.com/v2/person.json?email=' +
		  	email + '&apiKey=9dd5f4a02c257c2c'
		  ).success(function(data) {
		    $scope.data = data;
		    $scope.error = null;
		    $scope.profiles = {};
		    $scope.data.socialProfiles.forEach(function(profile){
		    	$scope.profiles[profile.typeId] = profile.url;
		    })
		  }).error(function(data) {
		  	$scope.error = "No profile found";
		  	$scope.data = {};
		  	$scope.profiles = {};
		  });
	  }
	}]);
