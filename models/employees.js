var Employees = (function () {
    var data;
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "student",
        database: "allJobs2"
    })

    var sql = 'SELECT users.id, users.company FROM users INNER JOIN employees ON users.id=employees.userId order by company'


    con.query(sql, function (err, result) {
        if (err) throw err;
        data = result;
        // console.log(result)
    })

    var sendEmployees = function () {
        return data;
    };

    var newEmployee = function (userId, cb) {
        var sql = "insert into employees (userId) values (" + userId +");"
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result)
        cb(result);
    })
    };

    return {
        sendEmployees: sendEmployees,
        newEmployee: newEmployee
    };
})();

module.exports = Employees;