/**
 * app.module.js
 * Declaración del módulo principal de la aplicación.
 * Aquí se registran las dependencias (módulos de AngularJS y propios).
 */

var myninjaapp = angular.module('myNinjaApp',[]);
myNinjaApp.controller('NinjaController',  function($scope){
  $scope.message = 'Hello, Ninja!';
});

(function () {
  'use strict';

  angular.module('miApp', [
    'ngRoute',      // enrutamiento (angular-route)
    'ngAnimate',    // animaciones CSS (angular-animate)
    'ngSanitize'    // saneado de HTML (angular-sanitize)
  ]);
})();
