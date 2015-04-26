'use strict';

/**
 * @ngdoc function
 * @name cleverGullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cleverGullApp
 */
angular.module('cleverGullApp')
  .controller('MainCtrl', function ($scope, server, $sce, sharedProperties) {

    //Get list of subscribed subreddits - NEED TO CHANGE
    $scope.getSubscribed = sharedProperties.subscribedSubreddits();
    
    server.getData("https://www.reddit.com/r/webdev.json").success(function(data){
    	$scope.data = data.data;
    	console.log($scope.data);
    });

    $scope.getIndividualPost = function(postUrl){
    	var trimPostUrl = postUrl.substring(0, postUrl.length - 1);
    	
		server.getPost(trimPostUrl).success(function(data){
            console.log(data);
		})
    };
    
  });
