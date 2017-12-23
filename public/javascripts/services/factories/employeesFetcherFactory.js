angular.module('allJobs')
    .factory('employeesFetcher', ['$filter','$http', function ($filter, $http) {

        var employees;

        function getEmployees(callback) {
            $http.get("/employees")
                .then(function (response) {
                    // console.log(response.data)
                    employees = response.data;
                    callback(employees);
                    console.log(employees)

                });
                return 
        }

        function getEmployeeByUserId(id){
            for(var employee of employees){
                if(employee.userId == id){
                    return employee.id
                }
            }
            return undefined;
        }

        function addNewEmployee(userId){
            $http.post("/employees/NewEmployee", {userId:userId} )
            .then(function(response){
                console.log(response)
            })
        }



        return {
            getEmployees: getEmployees,
            getEmployeeByUserId: getEmployeeByUserId,
            addNewEmployee: addNewEmployee
          
        }
    }])
