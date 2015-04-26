'use strict';

describe('Directive: searchSubreddit', function () {

  // load the directive's module
  beforeEach(module('cleverGullApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-subreddit></search-subreddit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchSubreddit directive');
  }));
});
