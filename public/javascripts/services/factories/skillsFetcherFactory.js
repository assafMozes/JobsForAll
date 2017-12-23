angular.module('allJobs')
    .factory('skillsFetcher', ['$filter','$http', function ($filter, $http) {

        var skills;

        function getSkills(callback) {
            $http.get("/skills")
                .then(function (response) {
                    // console.log(response.data)
                    skills = response.data;
                    callback(skills);
                    // console.log(skills)

                });

                return 
        }

        function skillById(id){
            for(var skill of skills){
                if (skill.id == id){
                    return skill.skill
                }
            }
        }



        return {
            getSkills: getSkills,
            skillById: skillById
          
        }
    }])
