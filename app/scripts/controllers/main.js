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
    	
		server.getPost(trimPostUrl).success(function(data){
            
            $scope.individualPost = data[0];
            $scope.individualPostData = data[0].data.children[0].data;
            console.log("individualPostData");
            console.log($scope.individualPostData);
            $scope.individualPostTitle = data[0].data.children[0].data.title;
            $scope.individualUrl = data[0].data.children[0].data.url;
            $scope.individualPostComments = data[1];

		})
    };
    
  });
