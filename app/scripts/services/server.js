'use strict';

/**
 * @ngdoc service
 * @name cleverGullApp.server
 * @description
 * # server
 * Service in the cleverGullApp.
 */
angular.module('cleverGullApp')
  .service('server', function () {
  	return{
  		searchSubreddit: function(search){
			return $http({
	            url: "https://www.reddit.com/subreddits/search?q=" + search + ".json"
	            method: "GET"
	        });
  		}
  	}
  });
