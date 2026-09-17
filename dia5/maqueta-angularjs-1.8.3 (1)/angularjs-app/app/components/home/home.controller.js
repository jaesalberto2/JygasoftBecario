/**
 * home.controller.js
 * Vista de inicio: two-way binding y resumen de datos.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['APP_CONFIG', 'TareasService'];

  function HomeController(APP_CONFIG, TareasService) {
    var vm = this;

    vm.config  = APP_CONFIG;
    vm.nombre  = '';
    vm.resumen = { total: 0, completadas: 0, pendientes: 0 };

    vm.saludo = function () {
      return vm.nombre ? '¡Hola, ' + vm.nombre + '!' : '¡Hola, mundo!';
    };

    vm.caracteristicas = [
      { titulo: 'Módulos',      detalle: 'angular.module con dependencias explícitas' },
      { titulo: 'Rutas',        detalle: 'ngRoute con templateUrl, controllerAs y resolve' },
      { titulo: 'Servicios',    detalle: 'factory con $http y $q (promesas)' },
      { titulo: 'Directivas',   detalle: 'directiva de atributo con scope aislado' },
      { titulo: 'Filtros',      detalle: 'filtro personalizado reutilizable' },
      { titulo: '100% local',   detalle: 'las librerías viven en /vendor, sin CDN' }
    ];

    activar();

    function activar() {
      TareasService.listar().then(function () {
        vm.resumen = TareasService.resumen();
      });
    }
  }
})();
