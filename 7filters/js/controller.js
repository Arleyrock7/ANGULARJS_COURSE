angular.module("filters",[])
       .filter("removeHtml",function(){
         return function(texto){
           return String(texto).replace(/<[>]+>/gm,'');
         }
       })
       .controller("filtersController", function($scope){
         $scope.mi_html1 = "<p>Hola mundo</p>"

         $scope.mi_html2 = {};
         $scope.mi_html2.title = "Hola";
         $scope.mi_html2.body = "Hola mundo";

         $scope.costo1 = 2;
         $scope.costo2 = 3;
         $scope.costo3 = 5;
         $scope.costo4 = 500;
         $scope.costo5 = 1500000;
       });
