var module = angular.mock.module;
var uiRouter = require("../src/ng1");

describe('templateFactory', function () {

  beforeEach(module('ui.router.util'));

  it('exists', inject(function ($templateFactory) {
    expect($templateFactory).toBeDefined();
  }));

  it('should request templates as text/html', inject(function($templateFactory, $httpBackend) {
    $httpBackend.expectGET('views/view.html', function(headers) {
      return headers.Accept === 'text/html';
    }).respond(200);
    $templateFactory.fromUrl('views/view.html');
    $httpBackend.flush();
  }));
});
