/**
 * tareas.service.js
 * Servicio de datos. Intenta leer data/tareas.json con $http y,
 * si falla (por ejemplo al abrir con file://), usa datos en memoria.
 * Todas las operaciones devuelven promesas ($q) como en una API real.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .factory('TareasService', TareasService);

  TareasService.$inject = ['$http', '$q', 'APP_CONFIG'];

  function TareasService($http, $q, APP_CONFIG) {

    var cache = null;
    var secuencia = 0;

    var respaldo = [
      { titulo: 'Configurar el proyecto',   prioridad: 'alta',  completada: true  },
      { titulo: 'Definir rutas con ngRoute', prioridad: 'alta',  completada: true  },
      { titulo: 'Crear servicio de datos',  prioridad: 'media', completada: false },
      { titulo: 'Escribir pruebas unitarias', prioridad: 'baja', completada: false }
    ];

    return {
      listar: listar,
      agregar: agregar,
      eliminar: eliminar,
      alternar: alternar,
      resumen: resumen
    };

    // ---------------------------------------------------------------

    function listar() {
      if (cache) {
        return $q.resolve(angular.copy(cache));
      }

      return $http.get(APP_CONFIG.apiUrl)
        .then(function (respuesta) {
          cache = normalizar(respuesta.data);
          return angular.copy(cache);
        })
        .catch(function () {
          // Fallback offline
          cache = normalizar(respaldo);
          return angular.copy(cache);
        });
    }

    function agregar(titulo, prioridad) {
      if (!titulo || !titulo.trim()) {
        return $q.reject('El título es obligatorio.');
      }
      var nueva = {
        id: ++secuencia,
        titulo: titulo.trim(),
        prioridad: prioridad || 'media',
        completada: false
      };
      cache = cache || [];
      cache.push(nueva);
      return $q.resolve(angular.copy(nueva));
    }

    function eliminar(id) {
      cache = (cache || []).filter(function (t) { return t.id !== id; });
      return $q.resolve(true);
    }

    function alternar(id) {
      angular.forEach(cache, function (t) {
        if (t.id === id) { t.completada = !t.completada; }
      });
      return $q.resolve(true);
    }

    function resumen() {
      var lista = cache || [];
      return {
        total: lista.length,
        completadas: lista.filter(function (t) { return t.completada; }).length,
        pendientes: lista.filter(function (t) { return !t.completada; }).length
      };
    }

    function normalizar(lista) {
      var normalizada = (lista || []).map(function (t) {
        return {
          id: t.id || ++secuencia,
          titulo: t.titulo,
          prioridad: t.prioridad || 'media',
          completada: !!t.completada
        };
      });
      // La secuencia continúa a partir del id más alto para evitar duplicados
      normalizada.forEach(function (t) {
        if (t.id > secuencia) { secuencia = t.id; }
      });
      return normalizada;
    }
  }
})();
