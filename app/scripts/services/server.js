'use strict';

/**
 * @ngdoc service
 * @name cleverGullApp.server
 * @description
 * # server
 * Service in the cleverGullApp.
 */
angular.module('cleverGullApp')
  .service('server', function ($http) {
    return{
    	getAllData: function(subreddit){
    		return $http({
    			url: 'http://www.reddit.com/r/' + subreddit + '.json',
    			method: "GET"
    		}).success(function(data){
				return data;
			}).error(function(error, status){
				console.log(error, status);
			});
    	},
    	getPost: function(url){
			return $http({
	            url: "http://www.reddit.com" + url + ".json",
	            method: "GET"
	        }).success(function(data){
				return data;
			}).error(function(error, status){
				console.log(error, status);
			});			
    	},
  		searchSubreddit: function(search){
			return $http({
	            url: "http://www.reddit.com/subreddits/search.json?q=" + search ,
	            method: "GET"
	        }).success(function(data){
				return data;
			}).error(function(error, status){
				console.log(error, status);
			});
  		}
  	}
  });
