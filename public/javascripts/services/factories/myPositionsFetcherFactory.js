angular.module('allJobs')
    .factory('myPositionsFetcher', ['$http', function ($http) {

        var currentPositions;

 
        function addToMyPositions(userId, positionId) {
            var details = {
                userId:userId,
                positionId:positionId
            }
           $http.post("/MyPositions/add", details)
                .then(function (response) {
                    console.log(response.data)
                });
        }




        return {
            addToMyPositions: addToMyPositions

        }
    }])
