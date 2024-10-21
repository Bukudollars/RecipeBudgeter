require('dotenv').config();
const mysql = require('mysql2');


// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'recipe-budgeter.chwgsi0264gq.us-east-1.rds.amazonaws.com',         // RDS endpoint
  user: 'appuser',     // appuser MySQL username
  password: process.env.DB_PASSWORD, // Your MySQL password
  database: 'recipe_budgeter', // The name of the database you want to connect to
  port: 3306                 // The port, 3306 is the default for MySQL
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID', connection.threadId);

  // Optional: Run a simple query to test the connection
  connection.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) throw error;
    console.log('The solution is:', results[0].solution);
    
    // Close the connection after the query
    connection.end();
  });
});
