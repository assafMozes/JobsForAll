angular.module('allJobs')
    .factory('citiesFetcher', ['$filter','$http', function ($filter, $http) {

        var cities;

        function getCities(callback) {
            $http.get("/cities")
                .then(function (response) {
                    // console.log(response.data)
                    cities = response.data;
                    callback(cities);
                    // console.log(cities)

                });
                return 
        }

        function sendCities() {
            return cities
        }

        function sendIdByName(name){
            for(var city of cities){
                if (city.city == name){
                    return city.id
                }
            }
        }


        return {
            getCities: getCities,
            sendCities: sendCities,
            sendIdByName: sendIdByName
          
        }
    }])
