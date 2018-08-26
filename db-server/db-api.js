const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//Create Connection - Remote-Dev
const db = mysql.createConnection({
    host: 'sql3.freesqldatabase.com',
    user: 'sql3220223',
    password: 'UwPnP8hlm6',
    database: 'sql3220223'
});

/*
//Create Connection - Remote-local
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sql3220223_local'
});*/

//DB Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql connected ..');
});

//get Customer Data 
router.get('/skm/adminCustomerData/', function(req, res) {
    console.log("/skm/adminCustomerData/");
    let sql = "SELECT * FROM customer_details GROUP BY cust_id ORDER BY cust_name ASC";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;