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
    	getData: function(){
    		return $http({
    			url: "https://www.reddit.com/r/webdev.json",
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
