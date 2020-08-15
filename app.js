import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const mysql = require('mysql');

const app = express();

const db  = mysql.createPool({
   connectionLimit : 10,
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_ROOT_PASSWORD,
   database: process.env.MYSQL_DATABASE,
});

console.log('Nothing')
app.get('/', (req, res) => {
   // db.query('SELECT id, fullname FROM users WHERE id < 5', (err, data) => {
   //    res.json({err, data})
   // })
   res.json('Hello from a docker container')
});

const PORT = 7000;
app.listen(PORT, () => {
   console.log(`Server is running: http://localhost:${PORT}`)
})
