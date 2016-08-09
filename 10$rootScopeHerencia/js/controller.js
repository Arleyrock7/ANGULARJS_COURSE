angular.module("myApp",[])
       .run(function($rootScope){
         $rootScope.nombre = "ARLEY CUADRADO";
       })
          .controller("fatherController",function($scope){
              $scope.nombre = "MARÍA CAMILA ÁLVAREZ";
              setTimeout(function(){
                $scope.$apply(function(){
                  $scope.nombre = ":-D";
                });
              },1000);
       })
           .controller("childController",function($scope){

           });
