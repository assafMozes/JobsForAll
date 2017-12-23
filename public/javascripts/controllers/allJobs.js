angular.module('allJobs')
    .controller('appController', function controller($scope, usersFetcher, positionsFetcher, skillsFetcher, citiesFetcher, employeesFetcher, ) {

        skillsFetcher.getSkills(function (skills) {
            $scope.skills = skills;
            positionsFetcher.getFirstPositions(function (positions) {
                $scope.positions = positions;
            })
        })
        citiesFetcher.getCities(function (cities) {
            $scope.cities = cities;
        })
        employeesFetcher.getEmployees(function (employees) {
            $scope.employees = employees;
        })
        // $scope.user = [];
        usersFetcher.isUserLoggedIn()


        // console.log($scope.user)
    })
    .controller('mainPage', function controller($scope, positionsFetcher, skillsFetcher, citiesFetcher, employeesFetcher, ) {
    })
    .controller('mainPageSearch', function controller($scope, skillsFetcher, citiesFetcher, employeesFetcher, positionsFetcher) {
        $scope.correntSkills = [];
        var index;
        $scope.addSkill = function () {
            console.log($scope.skills)
            for (var i = 0; i < $scope.skills.length; i++) {
                if ($scope.skills[i].skill == $scope.skill) {
                    index = i;
                    break;
                }
            }
            console.log(index)
            $scope.skills.splice(index, 1);
            $scope.correntSkills.push($scope.skill)
            // console.log($scope.correntSkills)
        }
        $scope.updateList = function () {
            $scope.$parent.positions = positionsFetcher.getFilteredPositions($scope.location.toLowerCase())
            // console.log($scope.positions)
        }
    })
    .controller('navbar', function controller($scope, $location, usersFetcher, $rootScope) {

        $scope.checkLogin = function () {
            usersFetcher.checkUserLogin($scope.email, $scope.password)
            // $scope.$parent.user = user;
            $rootScope.$on('logon', function (event, data) {
                if (data.length) {
                    $location.path('/')
                }
            })
        }
        $scope.islog = 0;
        $rootScope.$on('logon', function (event, data) {
            $scope.islog = data.length;
            if (data.length) {
                $scope.userName = data[0].first_name + ' ' + data[0].last_name;
            }
        })
        $scope.logOut = function () {
            usersFetcher.logOut()
            $location.path('/')
        }
    })

    .controller('register', function controller($scope, $location, usersFetcher, citiesFetcher) {
        $scope.sendRegistration = function () {
            $scope.userData.cityId = citiesFetcher.sendIdByName($scope.userData.city)
            usersFetcher.postRegistration($scope.userData)
            $location.path('/')
        }
    })
    .controller('position', function controller($scope, $rootScope, myPositionsFetcher) {
        $rootScope.$on('logon', function (event, data) {
            $scope.user = data;
        })
        $scope.apply = function () {
            myPositionsFetcher.addToMyPositions($scope.user[0].id, $scope.position.id)
            console.log($scope.user[0].id, $scope.position.id)
        }
    })
    .controller('myJobs', function controller($scope, $rootScope, usersFetcher) {
        console.log(888)

        $scope.myPositions = usersFetcher.getMyPositions()
        $rootScope.$on('logon', function (event, data) {

            if (data.length) {
                $scope.myPositions = data[0].aplliedPositions;
                console.log($scope.myPositions)
                console.log(777)
            }
            else {
                $scope.myPositions = []
                console.log(888)
            }
        })
    })
    .controller('addPosition', function controller($scope, citiesFetcher, usersFetcher, employeesFetcher) {

        $scope.sendNewPosition = function () {
            $scope.positionData.cityId = citiesFetcher.sendIdByName($scope.positionData.city)
            var userId = usersFetcher.sendUserId()
            var employeeId = employeesFetcher.getEmployeeByUserId(userId)
            if (employeeId){
            $scope.positionData.employeeId = employeeId;
        }
        else{
            employeesFetcher.addNewEmployee(userId)
        }
        }

    })

