'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var lunch = function (lunch_time) {
    this.emp_id = lunch_time.emp_id;
    this.name = lunch_time.name;
    this.mobile = lunch_time.mobile;
    this.department = lunch_time.department;
    this.description = lunch_time.description;
    this.date = lunch_time.date;
    this.time=lunch_time.time;
};



// lunch.create = function (newEmp, result) {
//     dbConn.query("INSERT INTO lunch_time set ?", newEmp, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });
// };



lunch.create = function (newEmp, result) {

    dbConn.query("Select * from lunch_time where emp_id=? and date=?",

// console.log(newEmp.emp_id, newEmp.date)
   
        [newEmp.emp_id, newEmp.date], function (err, res) {

            if (err || res.length > 0) {


                console.log("error: ", err);

                const msg = "already exist"

                console.log(msg)
                result(err, msg);



            }

            else {

                dbConn.query("INSERT INTO lunch_time set ?", newEmp,

                    function (err, res) {

                        if (err) {

                            console.log("error: ", err);

                            result(err, null);

                        }

                        else {

                            result(null, res.insertId);

                            console.log(res.insertId);



                        }

                    });

            }

        });



};





lunch.findById = function (emp_id, result) {
    dbConn.query("Select * from lunch_time where emp_id = ? ", emp_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
lunch.findAll = function (result) {
    dbConn.query("Select * from lunch_time where date = ?", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('lunch_time : ', res);
            result(null, res);
        }
    });
};
lunch.update = function (emp_id, employee, result) {
    dbConn.query("UPDATE lunch_time SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE emp_id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, emp_id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
lunch.delete = function (emp_id, result) {
    dbConn.query("DELETE FROM lunch_time WHERE emp_id = ?", [emp_id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = lunch;
