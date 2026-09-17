/**
 * resaltar.directive.js
 * Directiva de ejemplo: resalta el elemento al pasar el mouse.
 * Uso: <div resaltar color="#fff7d6">...</div>
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .directive('resaltar', resaltar);

  function resaltar() {
    return {
      restrict: 'A',
      scope: { color: '@' },
      link: function (scope, elemento) {
        var original = elemento.css('background-color');
        var destacado = scope.color || '#fff7d6';

        elemento.on('mouseenter', function () {
          elemento.css('background-color', destacado);
        });
        elemento.on('mouseleave', function () {
          elemento.css('background-color', original);
        });

        scope.$on('$destroy', function () {
          elemento.off('mouseenter mouseleave');
        });
      }
    };
  }
})();
