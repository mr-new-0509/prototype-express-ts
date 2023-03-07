import ServerlessMysql from "serverless-mysql";
import { DB_PORT } from "./constants";

const db = ServerlessMysql({
  config: {
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: DB_PORT,
  },
});

module.exports = db;
