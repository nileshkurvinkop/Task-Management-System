const sql = require('mssql');
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

// Create a new SQL connection pool using the configuration
const poolPromise = new sql.ConnectionPool(config)
  .connect()

    // On successful connection, return the pool instance
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })

  // Handle connection errors
  .catch(err => console.log('DB Connection Failed', err));

module.exports = {
  sql, poolPromise
};
