var Users = (function () {
    var data;
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "student",
        database: "allJobs2"
    })

    var bcrypt = require('bcrypt');
    var salt = bcrypt.genSaltSync(17);

    var checkUserLogin = function (email, password, session, cb) {
        var user;
        var sql = 'SELECT * FROM users WHERE email = ?;'
        con.query(sql,[email, password], function (err, result) {
            if (err) throw err;
            user = result;
            console.log(user[0])
            var isPass = bcrypt.compareSync(password, user[0].passwd)

            console.log(isPass)

            if (isPass) {
                var sql2 = 'SELECT  positions.*, users.company FROM appliedPositions INNER JOIN positions ON appliedPositions.positionId = positions.id INNER JOIN employees ON employees.Id = positions.employeeId INNER JOIN users ON employees.userId = users.id where appliedPositions.userId =' + user[0].id + ' ORDER BY positionId;'
                con.query(sql2, function (err, result) {
                    console.log(55555555555555555555)
                    if (err) throw err;
                    user[0].aplliedPositions = result;
                    session.loggedIn = user;
                    cb(user)
                })
            }
        })
        // return;
    };

    var addUser = function (d) {
        d.passwd = bcrypt.hashSync(d.passwd, salt)
        var sql = "insert into users (first_name, last_name, email, passwd, cv, cityId, description, company) values ('" +
            d.first_name + "','" + d.last_name + "','" + d.email + "','" + d.passwd + "','" + d.cv + "'," + d.cityId + ",'" + d.description + "','" + d.company + "');"
        con.query(sql, function (err, result) {
            if (err) throw err;
            data = result;
        })
    }
    return {
        checkUserLogin: checkUserLogin,
        addUser: addUser
    };
})();

module.exports = Users;