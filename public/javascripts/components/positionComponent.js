angular.module('allJobs')
.component('positionComponent', {
    templateUrl: '../../views/positionComponent.html',
    bindings :{
      position: '<data',
      button: '<'
    },
    controller: function($scope, $rootScope){
        console.log(this)

        //  $scope.apply = function (){
        //     myPositionsFetcher.addToMyPositions($scope.$parent.user[0].id, $scope.position.id )
        //     console.log($scope.$parent.user[0].id, $scope.position.id)
        // }

        // $scope.$watch('user', function(newValue){
        //     $scope.isLogged = 1 - newValue.length;
        //     console.log($scope.isLogged)
        // })
    }
  
});