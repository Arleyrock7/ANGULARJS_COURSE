angular.module("appDatosEstudiantes",[])
    .controller("comentariosController",function($scope){
      $scope.nombreEstudiante = "";
      $scope.nuevoCOMENTARIO = {};
      $scope.comentarios = [
        {
          comentario : "Excelente clase :D",
          userName : "MARÍA"
        },
        {
          comentario : "Malísima la clase de hoy... :o( ",
          userName : "CAMILA"
        }
      ];
      $scope.comentariosPrueba = [
        {
          comentario2: "PRUEBA",
          usuario: "YO"
        },
        {
          comentario2: "PRUEBA 2",
          usuario: "YO 2"
        }
      ];

      //METODOS PARA CONTROLADOR
      $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoCOMENTARIO);
        $scope.nuevoCOMENTARIO = {};
      }
  });
