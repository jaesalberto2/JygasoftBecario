/**
 * config.value.js
 * Constantes de configuración de la aplicación.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .constant('APP_CONFIG', {
      nombre: 'Maqueta AngularJS',
      angularVersion: '1.8.3',
      apiUrl: 'data/tareas.json',   // simulación de endpoint local
      autor: 'Jygasoft Code'
    });
})();
