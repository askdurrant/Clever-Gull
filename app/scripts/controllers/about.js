'use strict';

/**
 * @ngdoc function
 * @name cleverGullApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cleverGullApp
 */
angular.module('cleverGullApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
