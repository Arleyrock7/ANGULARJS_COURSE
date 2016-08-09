angular.module("appDatosEstudiantes",[])
    .controller("nombreEstudianteController",function($scope){
      $scope.nombreEstudiante = "ARLEY CUADRADO SIERRA";
  }).controller("datosAdicionalesController",function($scope){
    $scope.datosEdad = "27";
  }).controller("cursosController",function($scope){
    $scope.cursos = "Diseño y desarrollo web"
  });
