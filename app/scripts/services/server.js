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
    		});
    	},
    	getPost: function(url){
			return $http({
	            url: "http://www.reddit.com/" + url + ".json",
	            method: "GET"
	        });			
    	},
  		searchSubreddit: function(search){
			return $http({
	            url: "http://www.reddit.com/subreddits/search.json?q=" + search ,
	            method: "GET"
	        });
  		}
  	}
  });
