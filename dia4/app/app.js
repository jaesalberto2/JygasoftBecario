var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope) {
   $scope.message = 'Hola Mundo';
   $scope.ninjas = ['Yoshi', 'Kuma', 'Hattori', 'Yagyu', 'Fuma'];
}]);



