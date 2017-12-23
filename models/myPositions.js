var MyPositions = (function () {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "student",
        database: "allJobs2"
    })

   

    var addPosition = function (d) {
         var sql = "insert into appliedPositions (userId, positionId) values (" +
         d.userId + "," + d.positionId + ");"
        con.query(sql, function (err, result) {
            if (err) throw err;
        }) 
        return 
    };

    return {
        addPosition: addPosition
    };
})();

module.exports = MyPositions;