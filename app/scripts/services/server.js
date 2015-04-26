'use strict';

/**
 * @ngdoc service
 * @name cleverGullApp.server
 * @description
 * # server
 * Service in the cleverGullApp.
 */
angular.module('cleverGullApp')
<<<<<<< HEAD
  .service('server', function () {
  	return{
  		searchSubreddit: function(search){
			return $http({
	            url: "https://www.reddit.com/subreddits/search?q=" + search + ".json"
	            method: "GET"
	        });
  		}
  	}
=======
  .service('server', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
    	getData: function(){
    		return $http({
    			url: "https://www.reddit.com/r/webdev.json",
    			method: "GET"
    		});
    	}
    }
>>>>>>> ab00bad68706d57a709c1dbf423ec747fd3ecf16
  });
