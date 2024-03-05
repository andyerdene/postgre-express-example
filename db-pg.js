const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "postgres",
  port: 5432,
});
client.connect();

module.exports = client;
