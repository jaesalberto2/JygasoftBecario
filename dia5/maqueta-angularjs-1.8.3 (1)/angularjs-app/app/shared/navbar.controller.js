/**
 * navbar.controller.js
 * Controlador de la barra de navegación.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$location', 'APP_CONFIG'];

  function NavbarController($location, APP_CONFIG) {
    var vm = this;

    vm.titulo  = APP_CONFIG.nombre;
    vm.version = APP_CONFIG.angularVersion;

    vm.enlaces = [
      { etiqueta: 'Inicio',  ruta: '/home' },
      { etiqueta: 'Tareas',  ruta: '/tareas' },
      { etiqueta: 'Acerca',  ruta: '/acerca' }
    ];

    vm.esActiva = function (ruta) {
      return $location.path() === ruta;
    };
  }
})();
