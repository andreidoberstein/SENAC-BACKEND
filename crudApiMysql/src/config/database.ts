//const mysql = require('mysql2/promise');
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
 
const connection= mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

/*async function selectUsers() {
    const query = connection.query('SELECT * FROM clients', (err, results) => {
        console.log(results);      
        return results;
    });
    //return query;
}*/

export default {
    connection
}