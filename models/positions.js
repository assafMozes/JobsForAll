var Positions = (function () {
    var data;
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "student",
        database: "allJobs2"
    })

    var dataP, dataS;
    var sql = 'SELECT positions.*, cities.lat, cities.lng, users.company FROM positions INNER JOIN cities ON positions.cityId = cities.id INNER JOIN employees ON employees.Id = positions.employeeId INNER JOIN users ON employees.userId = users.id;'
    con.query(sql, function (err, result) {
        if (err) throw err;
        dataP = result;
        var sql2 = 'SELECT * From skillToPosition ORDER BY positionId'
        con.query(sql2, function (err, result) {
            if (err) throw err;
            dataS = result;
            // console.log(dataS)
            var currentSkills = [];
            for (var i = 0; i < dataS.length; i++) {
                if ((i > 0 && dataS[i].positionId != dataS[i - 1].positionId) || i == dataS.length - 1) {
                    for (var j of dataP) {
                        if (j.id == dataS[i - 1].positionId) {
                            j.skills = currentSkills.splice(0);
                            console.log(j.skills)
                            break;
                        }
                    }
                }
                currentSkills.push(dataS[i].skillId)
            }
        })
    })



    // var sql = 'SELECT positions.*, cities.lat, cities.lng FROM positions INNER JOIN cities ON positions.cityId = cities.id ORDER BY positions.id;'
    // var positions = con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     return result;
    //     // console.log(result)

    // var sql2 = 'SELECT * From skillToPosition ORDER BY positionId'
    // var skills = con.query(sql2, function (err, result) {
    //     if (err) throw err;
    //     return result;
    // })

    //    });


    // Promise.all([positions, skills]).then((responses) => {
    //     var currentSkills;
    //     for (var i = 0; i < responses[1].length; i++) {
    //         if (responses[1][i].positionId != responses[1][i - 1].positionId && i > 0 || i == responses[1].length - 1) {
    //             for (var j of responses[0]) {
    //                 if (j.id == responses[1][i - 1].positionId) {
    //                     j.skills = currentSkills;
    //                     currentSkills.splice(0)
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    //     data = responses[0]
    // });




    var sendPositions = function () {
        return dataP;
    };

    return {
        sendPositions: sendPositions
    };
})();

module.exports = Positions;