const express = require('express')
const mysql = require('mysql');
const cors = require('cors');
const app = express()
const port = 3000

const whitelist = ['http://localhost:4200', 'http://localhost']
const corsOptions = {
  origin: function (origin, callback) {
    if (origin === undefined || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log(origin);
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.disable('x-powered-by');


var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PW,
  database: process.env.DATABASE
});

app.get('/', (req, res) => {
  connection.query('SELECT * from users', function (error, results, fields) {
    if (error) throw error;
    res.json({ "message": "Hello World from the Backend Server connected to the DB!", "User": results[0] });
  });

});

app.listen(port, () => console.log(`Backend server listening on port ${port}!`))