angular.module("toDoList",["LocalStorageModule"])//LocalStorageModule = modulo por default
                                                 // de la libreria angular-local-storage.min.js

       .controller("toDoController",function($scope,localStorageService){// localStorageService
                                                                         //servicio por default
                                                                         //de la libreria
                                                                         //angular-local-storage.min.js
      /*CONDICIONAL PARA QUE CUANDO ACTUALICEMOS EL NAVEGADOR
        SIGAN GUARDADOS LOS DATOS DENTRO DEL ARREGLO, DE LO CONTRARIO,
        SI NO TENEMOS DATOS, QUE QUEDE VACÍO
      */
       if(localStorageService.get("angularToDoList")){
         $scope.todo = localStorageService.get("angularToDoList");
       }
       else{
         $scope.todo = [];
       }

          /* Haremos lo siguiente para imprimir:
            DESCRIPCIÓN: "Terminar curso AngularJS",
            FECHA: "3-.3-15 2:00pm"
          */

        /*$watch sirve para reemplazar duplicación de código
        $scope.$watch(function(){
          return $scope.newAct;
        },function(newValue,oldValue){
          console.log(newValue);
          console.log(oldValue);
        });
        */

        //$watchCollection sirve para arreglos
        //$watchCollection está observando cada vez que alguien modifica la lista "todo",
        //dispara la funcion "function(newValue,oldValue)" y actualiza en "localStorageService.set()"
        $scope.$watchCollection('todo',function(newValue,oldValue){
          //Guardar actividad cuando aún se actualice la pagina
          localStorageService.set("angularToDoList",$scope.todo);/*COMPLEMENTO CONDICIONAL*/
        });

        //Función agregar nueva actividad
        $scope.addAct = function(){
            $scope.todo.push($scope.newAct);
            $scope.newAct = {};
            //localStorageService.set("angularToDoList",$scope.todo); CÓDIGO DUPLICADO
        }

        //Función boton limpiar registros
        $scope.clean = function(){
            $scope.todo = [];
            //localStorageService.set("angularToDoList",$scope.todo); CÓDIGO DUPLIUCADO
        }
});






/* -------------------RESUMEN CÓDIGO-------------------
angular.module("toDoList",["LocalStorageModule"])
       .controller("toDoController",function($scope,localStorageService){

       //Condicional
       if(localStorageService.get("angularToDoList")){
         $scope.todo = localStorageService.get("angularToDoList");
       }
       else{
         $scope.todo = [];
       }

       //$watchCollection
        $scope.$watchCollection('todo',function(newValue,oldValue){
          localStorageService.set("angularToDoList",$scope.todo);
        });

        //Agregar actividad
        $scope.addAct = function(){
            $scope.todo.push($scope.newAct);
            $scope.newAct = {};
        }

        //Limpiar registros de actividad
        $scope.clean = function(){
            $scope.todo = [];
        }
});
*/
