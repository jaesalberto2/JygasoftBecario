/**
 * acerca.controller.js
 * Muestra información del proyecto y un ejemplo de ngSanitize.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .controller('AcercaController', AcercaController);

  AcercaController.$inject = ['APP_CONFIG'];

  function AcercaController(APP_CONFIG) {
    var vm = this;

    vm.config = APP_CONFIG;

    // ng-bind-html + ngSanitize: se permite HTML seguro y se descarta el resto
    vm.htmlSeguro = 'Texto con <strong>negritas</strong>, <em>cursivas</em> y ' +
                    '<a href="https://docs.angularjs.org" target="_blank">un enlace</a>.';

    vm.estructura = [
      'index.html                → punto de entrada, carga scripts locales',
      'vendor/angular/           → AngularJS 1.8.3 + route, animate, sanitize',
      'app/app.module.js         → definición del módulo',
      'app/app.config.js         → rutas (ngRoute)',
      'app/app.run.js            → bloque run, estado global',
      'app/core/                 → constantes y servicios',
      'app/shared/               → navbar, directiva y filtro reutilizables',
      'app/components/           → una carpeta por vista (html + controller)',
      'assets/css/styles.css     → estilos',
      'data/tareas.json          → datos de ejemplo para $http'
    ];
  }
})();
