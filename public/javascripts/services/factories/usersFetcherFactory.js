
angular.module('allJobs')
    .factory('usersFetcher', ['$http', '$rootScope', function ($http, $rootScope) {

        var user = [];



        function checkUserLogin(email, password) {
            $http.get("/users/checkUser/" + email + "/" + password)
                .then(function (response) {
                    // console.log(response.data)
                    // callback(user);
                    user = response.data;
                    $rootScope.$emit('logon', user)
                    // console.log(user)
                });
            return
        }

        function postRegistration(details) {
            console.log(details)
            $http.post("/users/register", details)
                .then(function (response) {
                    user = [details];
                    console.log(user)

                    $rootScope.$emit('logon', user)
                });
            return
        }

        function isUserLoggedIn() {
            $http.get("/users/isLoggedIn")
                .then(function (response) {
                    // console.log(response.data)
                    user = response.data;
                    $rootScope.$emit('logon', user)
                    console.log(response.data)
                    // callback( response.data);
                    // callback(user);
                });

            return true;
        }

        function logOut() {
            $http.put("/users/logOut")
                .then(function (response) {
                    user = []
                    $rootScope.$emit('logon', user)
                    console.log(response.data)
                });

        }

        function getMyPositions() {
            if (user.length) {
                return user[0].aplliedPositions;
            }
            else {
                return []
            }
        }

        function sendUserId(){
            return user[0].id
        }





        return {
            checkUserLogin: checkUserLogin,
            postRegistration: postRegistration,
            isUserLoggedIn: isUserLoggedIn,
            logOut: logOut,
            getMyPositions: getMyPositions,
            sendUserId: sendUserId
        }
    }])
