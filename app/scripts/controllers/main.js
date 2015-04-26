'use strict';

/**
 * @ngdoc function
 * @name cleverGullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cleverGullApp
 */
angular.module('cleverGullApp')
  .controller('MainCtrl', function ($scope, server) {
  	
    server.getData().success(function(data){
    	$scope.data = data.data;
    	console.log($scope.data);
    });
    
  });
