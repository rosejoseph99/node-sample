const express = require('express');
const bodyParser = require("body-parser");
var app = express();
console.log("Server started running");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'jobin',
  host: '192.168.5.9',
  database: 'Employee',
  password: 'jobin123',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'jobin',
  host: '192.168.5.9',
  database: 'Employee',
  password: 'jobin123',
  port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  if (res = ! null) {
    console.log("Working");
  }
})
app.get('/students/get-students', (req, res) => {
  // To fetch contact list, response in json format

  console.log("Working");
  client.query('SELECT * FROM public.students', (err, result) => {
    if (err) res.status(400).send(err);
    console.log(result);
    res.send(result.rows);
  });
});
app.post('/contact-management/contact', (req, res) => {
  console.log(req.body);
  var cols = [req.body.name, req.body.age, req.body.dob, req.body.place];
  //console.log(cols);
  client.query('INSERT INTO students( name, age, dob, place) VALUES( $1, $2, $3, $4 ) RETURNING *', cols, (err, result) => {
    if (err) res.status(400).send(err);
    res.send(result);
  });
});

app.get('/contact-management/contact/:id', (req, res) => {
  // TO FETCH A PARTICULAR CONTACT, INPUT CONTACT ID, RESPONSE WI
  client.query(`SELECT * FROM contacts WHERE id='${req.params.id}'`, (err, result) => {
    if (err) res.status(400).send(err);
    res.send(result);
  });
});

app.put('/contact-management/contact', (req, res) => {
  client.query(`UPDATE contacts SET firstname='${req.body.firstname}', lastname='${req.body.lastname}', phnbr='${req.body.phnbr}', email='${req.body.email}' WHERE id='${req.body.id}'`, (err, result) => {
    if (err) res.status(400).send(err);
    res.send(result);
  });
});


app.delete('/contact-management/contact/:id', (req, res) => {
  client.query(`DELETE FROM contacts WHERE id='${req.params.id}'`, (err, result) => {
    if (err) res.status(400).send(err);
    res.send(result);
  });
});



app.listen(process.env.PORT || 3500)