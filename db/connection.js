const mysql =require('mysql2');

require('dotenv').config();

const db =mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Jacksonstakeall0313',
        //database: 'employee'
    }
);

module.exports = db;