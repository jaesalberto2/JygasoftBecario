/**
 * capitalizar.filter.js
 * Filtro de ejemplo: pone en mayúscula la primera letra.
 * Uso: {{ texto | capitalizar }}
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .filter('capitalizar', capitalizar);

  function capitalizar() {
    return function (entrada) {
      if (!entrada) { return ''; }
      return entrada.charAt(0).toUpperCase() + entrada.slice(1);
    };
  }
})();
