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
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
    	getData: function(){
    		return $http({
    			url: "https://www.reddit.com/r/webdev.json",
    			method: "GET"
    		});
    	}
    }
  });
