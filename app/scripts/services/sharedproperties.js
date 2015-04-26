'use strict';

/**
 * @ngdoc service
 * @name cleverGullApp.sharedProperties
 * @description
 * # sharedProperties
 * Service in the cleverGullApp.
 */
angular.module('cleverGullApp')
  .service('sharedProperties', function (server) {

  	var subreddits = ['webdev', 'politics'];
  	return{
  		addSubreddit: function(subreddit, scope){
  			subreddits.push(subreddit);
  			console.log(subreddits);
			scope.$broadcast('addedSubreddit');
  		},
  		subscribedSubreddits: function(){
  			return subreddits;
  		},
    	getData: function(){
    		var returnedData = [];
	        angular.forEach(subreddits, function(value, key){
	            server.getAllData(value).success(function(data){
	                var data = data.data.children;
	                for(var x=0; x < data.length; x++){
	                    returnedData.push(data[x]);
	                }
	            });	
	        });
	        return returnedData;
	    }
  	}

});
