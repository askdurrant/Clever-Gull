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
    	getData: function(dataUrl){
    		return $http({
    			url: dataUrl,
    			method: "GET"
    		});
    	}
    }
  });
