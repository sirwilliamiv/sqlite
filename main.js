'use strict'

const sqlite3 = require('sqlite3').verbose();  // verbose helps track errors
const db = new sqlite3.Database('example.sqlite'); //or .db extension
const dropEmployees = () => {
  db.run(`DROP TABLE employees`)
};
// dropEmployees();

db.run(`CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, salary NUMBER(6,2))`);
// db.run(`INSERT INTO employees VALUES (1, "Ashley", "Irwin", 5)`)
