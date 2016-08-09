angular.module("loadingApp",[])
       .controller("controllerLoading",function($scope,$http){

         $scope.posts = [];
         $scope.loading = true;
         $http.get("https://jsonplaceholder.typicode.com/photos")
              .success(function(data){
                console.log(data);
                $scope.posts = data;
                $scope.loading = false;
              })
              .error(function(err){
                $scope.loading = false;
              });
       });
