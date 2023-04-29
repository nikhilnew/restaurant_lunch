'use strict';

const lunch = require('../models/employee.model');

exports.findAll = function (req, res) {
    lunch.findAll(function (err, lunch) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', lunch);
        res.send(lunch);
    });
};



// exports.create = function (req, res) {
//     const new_lunch = new lunch(req.body);

//     //handles null error
//     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//         res.status(400).send({ error: true, message: 'Please provide all required field' });
//     }

//     else {
//         lunch.create(new_lunch, function (err, lunch) {
//             if (err)

//                 res.send(err);

//             console.log("........................", lunch)
//             if (lunch === "already exist") {
//                 res.json({ data: lunch, error: true, message: "Employee already exist with this date!" });

//             }

//             else {
//                 res.json({ data: lunch, error: false, message: "Details added successfully!" });
//             }
//             // if (err)
//             // res.send(err);
//             // res.json({error:false,message:"Details added successfully!",data:new_lunch});


//         });
//     }






// };










exports.create = function (req, res) {

    const newlunch = new lunch(req.body);




    //handles null error

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

        res.status(400).send({ error: true, message: 'Please provide all required field' });

    } else {

        lunch.create(newlunch, function (err, lunch) {

            if (err)

                res.send(err);

            if (lunch === "already exist")

                res.json({ data: lunch, error: true, message: "Employee already exist with this date!" });

            else

                res.json({ data: lunch, error: false, message: "Details added successfully!" });

        });

    }

};














exports.findById = function (req, res) {
    lunch.findById(req.params.emp_id, function (err, lunch) {
        if (err)
            res.send(err);
        res.json(lunch);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        lunch.update(req.params.emp_id, new lunch(req.body), function (err, lunch) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'lunch successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    lunch.delete(req.params.emp_id, function (err, lunch) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'lunch successfully deleted' });
    });
};
