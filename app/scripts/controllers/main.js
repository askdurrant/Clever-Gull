'use strict';

/**
 * @ngdoc function
 * @name cleverGullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cleverGullApp
 */
angular.module('cleverGullApp')
  .controller('MainCtrl', function ($scope, server, $sce, sharedProperties, $rootScope, $timeout) {

    //Get list of subscribed subreddits - NEED TO CHANGE TO SERVER CALL
    $scope.getSubscribed = function(){
        $scope.subscribed = sharedProperties.subscribedSubreddits();
    };

    $scope.getPosts = function(){
        $scope.data = sharedProperties.getData();
    }

    $scope.getPosts();

    $scope.$on('addedSubreddit', function(){
        console.log('here')
        $scope.getPosts();
    });

    // $scope.getData = function(){
    //     angular.forEach($scope.subscribed, function(value, key){
    //         server.getAllData(value).success(function(data){
    //             var returnedData = data.data.children;
    //             for(var x=0; x < data.data.children.length; x++){
    //                 $scope.data.push(data.data.children[x]);
    //             }
    //         });
    //     });
    // };
    // $scope.getData();

    $rootScope.refreshLinks = function(){
        $scope.getSubscribed();
        $scope.getData();
    }

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
