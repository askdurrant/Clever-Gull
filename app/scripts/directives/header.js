'use strict';

/**
 * @ngdoc directive
 * @name cleverGullApp.directive:header
 * @description
 * # header
 */
angular.module('cleverGullApp')
  .directive('cleverHeader', function () {
    return {
      templateUrl: '../../views/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
