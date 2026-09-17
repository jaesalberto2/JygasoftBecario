/**
 * app.run.js
 * Bloque run: se ejecuta una vez arrancada la aplicación.
 * Útil para valores globales y para escuchar eventos del router.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .run(arrancar);

  arrancar.$inject = ['$rootScope', 'APP_CONFIG'];

  function arrancar($rootScope, APP_CONFIG) {

    $rootScope.appNombre  = APP_CONFIG.nombre;
    $rootScope.appVersion = APP_CONFIG.angularVersion;
    $rootScope.cargando   = false;

    $rootScope.$on('$routeChangeStart', function () {
      $rootScope.cargando = true;
    });

    $rootScope.$on('$routeChangeSuccess', function (evento, actual) {
      $rootScope.cargando = false;
      $rootScope.rutaActual = actual && actual.$$route ? actual.$$route.originalPath : '/';
    });

    $rootScope.$on('$routeChangeError', function () {
      $rootScope.cargando = false;
      console.error('[miApp] Error al cambiar de ruta.');
    });
  }
})();
