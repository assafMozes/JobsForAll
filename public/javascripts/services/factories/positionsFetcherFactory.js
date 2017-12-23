angular.module('allJobs')
    .factory('positionsFetcher', ['$filter', '$http', 'citiesFetcher', 'skillsFetcher', function ($filter, $http, citiesFetcher, skillsFetcher) {

        var currentPositions;

        function getFirstPositions(callback) {
            $http.get("/positions")
                .then(function (response) {
                    // console.log(response.data)
                    currentPositions = $filter('filterPositionsByRelevancy')(response.data);
                    for (var position of currentPositions) {
                        if (position.skills) {
                            position.skills2 = [];
                            for (var skill of position.skills) {
                                position.skills2.push(skillsFetcher.skillById(skill))
                            }
                            // console.log(position)

                        }
                    }
                    callback(currentPositions);
                    // console.log(currentPositions)

                });
            return
        }

        function getFilteredPositions(location) {
            var fillteredPositions = $filter('filterPositions')(currentPositions.slice(0), citiesFetcher.sendCities(), location);
            // console.log(currentPositions)
            return fillteredPositions;
        }



        // function getFilteredTask(id) {
        //     return $filter('filterById')(tasks, id)
        // }
        // function sortFilteredTask(tasks) {
        //     currentTasks = $filter('filterByPriority')(tasks)
        //     return currentTasks;
        // }
        // function sendTenTasks(tasks) {
        //     return currentTasks.splice(0, 10)
        // }

        return {
            getFirstPositions: getFirstPositions,
            getFilteredPositions: getFilteredPositions

        }
    }])
