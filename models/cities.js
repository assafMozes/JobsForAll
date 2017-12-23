var Cities = (function () {
var data;
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "student",
    database: "allJobs2"
})


    var sql = 'SELECT * FROM cities ORDER BY city'
      con.query(sql, function(err,result){
        if(err) throw err;
        data = result;
        // console.log(result)
    })

    var sendCities = function () {
        return data;
    };

    return {
        sendCities: sendCities        
    };
})();

module.exports = Cities;