'use strict';

/**
 * @ngdoc directive
 * @name cleverGullApp.directive:searchSubreddit
 * @description
 * # searchSubreddit
 */
angular.module('cleverGullApp')
  .directive('searchSubreddit', function ($compile, server, sharedProperties) {
    return {
      templateUrl: '../../views/search-subreddit.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs, $watch) {

  	  		scope.$watch('searchSubreddit', function(query){
  	  			var searchQuery = query;

  	  			if(searchQuery == undefined){
  	  				return false
  	  			}
  	  			else if(query.length > 1){
	  	  			server.searchSubreddit(searchQuery).success(function(data){
	  	  				scope.searchSR = data.data.children;
	  	  			}).error(function(error){
	  	  				console.log(error)
	  	  			});
  	  			}
  	  			else{
  	  				scope.searchSR = "";
  	  			}
  			});

  			scope.addSubreddit = function(subreddit){
  				sharedProperties.addSubreddit(subreddit);
  			};	
      	}
    };
});