'use strict';

/**
 * @ngdoc function
 * @name cleverGullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cleverGullApp
 */
angular.module('cleverGullApp')
  .controller('MainCtrl', function ($scope, server, $sce) {
  	
    server.getData("https://www.reddit.com/r/webdev.json").success(function(data){
    	$scope.data = data.data;
    	console.log($scope.data);
    });

    $scope.getIndividualPost = function(postUrl){
    	
    	var trimPostUrl = postUrl.substring(0, postUrl.length - 1);
    	
    	var newPostUrl = "https://reddit.com" + trimPostUrl + ".json";
    	
    	console.log(newPostUrl);
		server.getData(newPostUrl).success(function(data){
			$scope.individualPost = data.data;
			console.log($scope.individualPost.data);
		})
    };
    
  });
