/**
 * @ngdoc function
 * @name cleverGullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cleverGullApp
 */
angular.module('cleverGullApp')

  .controller('MainCtrl', function ($scope, server, $sce, sharedProperties, $rootScope, $timeout, $q) {

    //Get list of subscribed subreddits - NEED TO CHANGE TO SERVER CALL
    $scope.getSubscribed = function(){
        $scope.subscribed = sharedProperties.subscribedSubreddits();
    };

    $scope.getPosts = function(){
        $scope.data = sharedProperties.getData();

    }

    $scope.getPosts();

    $scope.$on('addedSubreddit', function(){
        $scope.getPosts();
    });

    $scope.getIndividualPost = function(postUrl){
    	var trimPostUrl = postUrl.substring(0, postUrl.length - 1);
    	var deferred = $q.defer();
		server.getPost(trimPostUrl).then(function(data){
            $scope.postInfo = data.data[0].data.children[0].data;
            $scope.postComments = data.data[1].data.children;
            console.log($scope.postComments)

			deferred.resolve(data);
            
		})
    };

    $scope.sortSideBar = function(sortBy, index){
        $scope.sortIndex = index;
        
        if(sortBy === "top"){
    	   $scope.sorter = "-data.ups";
        }
        else if(sortBy === "bottom"){
    	   $scope.sorter = "data.ups";       
        }
        else if (sortBy ==="alphabetical"){
    	   $scope.sorter = "-data.title";                   
        }
        else if (sortBy ==="reverse"){
    	   $scope.sorter = "data.title";                   
        }
    };
    
  });