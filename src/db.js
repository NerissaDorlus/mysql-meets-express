import mysql from "mysql2";
import credentials from "./credentials.js";

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "FosterPet",
    ...credentials,
  })
  .promise();

export default connection;
