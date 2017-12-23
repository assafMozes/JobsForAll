var Skills = (function () {
var data;
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "student",
    database: "allJobs2"
})

    var sql = 'SELECT * FROM skills ORDER BY skill'
      con.query(sql, function(err,result){
        if(err) throw err;
        data = result;
        // console.log(result)
    })

    var sendSkills = function () {
        return data;
    };

    return {
        sendSkills: sendSkills        
    };
})();

module.exports = Skills;