/**
 * app.config.js
 * Configuración de rutas con ngRoute.
 * Se usa el modo hashbang (#!/ruta) para que funcione sin configuración de servidor.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .config(configurar);

  configurar.$inject = ['$routeProvider', '$locationProvider'];

  function configurar($routeProvider, $locationProvider) {

    // #!/home  (si prefiere URLs limpias: $locationProvider.html5Mode(true) y agregue <base href="/">)
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/tareas', {
        templateUrl: 'app/components/tareas/tareas.html',
        controller: 'TareasController',
        controllerAs: 'vm',
        resolve: {
          // Ejemplo de precarga de datos antes de mostrar la vista
          tareasIniciales: ['TareasService', function (TareasService) {
            return TareasService.listar();
          }]
        }
      })
      .when('/acerca', {
        templateUrl: 'app/components/acerca/acerca.html',
        controller: 'AcercaController',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/home' });
  }
})();
