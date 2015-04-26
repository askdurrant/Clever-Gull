'use strict';

/**
 * @ngdoc service
 * @name cleverGullApp.sharedProperties
 * @description
 * # sharedProperties
 * Service in the cleverGullApp.
 */
angular.module('cleverGullApp')
  .service('sharedProperties', function () {
  	var subreddits = ['webdev', 'politics'];
  	return{
  		addSubreddit: function(subreddit){
  			subreddits.push(subreddit);
  			console.log(subreddits);
  		},
  		subscribedSubreddits: function(){
  			return subreddits;
  		}
  	}

});
