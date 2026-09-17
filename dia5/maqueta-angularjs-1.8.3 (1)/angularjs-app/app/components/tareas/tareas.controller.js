/**
 * tareas.controller.js
 * Ejemplo de CRUD en memoria usando el servicio TareasService.
 * `tareasIniciales` llega precargado desde el resolve de la ruta.
 */
(function () {
  'use strict';

  angular
    .module('miApp')
    .controller('TareasController', TareasController);

  TareasController.$inject = ['TareasService', 'tareasIniciales'];

  function TareasController(TareasService, tareasIniciales) {
    var vm = this;

    vm.tareas    = tareasIniciales;
    vm.filtro    = '';
    vm.orden     = 'titulo';
    vm.error     = null;
    vm.nueva     = { titulo: '', prioridad: 'media' };
    vm.prioridades = ['alta', 'media', 'baja'];

    vm.agregar   = agregar;
    vm.eliminar  = eliminar;
    vm.alternar  = alternar;
    vm.ordenarPor = ordenarPor;

    function agregar() {
      vm.error = null;
      TareasService.agregar(vm.nueva.titulo, vm.nueva.prioridad)
        .then(function () {
          vm.nueva = { titulo: '', prioridad: 'media' };
          return refrescar();
        })
        .catch(function (mensaje) {
          vm.error = mensaje;
        });
    }

    function eliminar(tarea) {
      TareasService.eliminar(tarea.id).then(refrescar);
    }

    function alternar(tarea) {
      TareasService.alternar(tarea.id).then(refrescar);
    }

    function ordenarPor(campo) {
      vm.orden = (vm.orden === campo) ? '-' + campo : campo;
    }

    function refrescar() {
      return TareasService.listar().then(function (lista) {
        vm.tareas = lista;
      });
    }
  }
})();
