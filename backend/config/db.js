import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Adminemiliosql1!123",
    database: "prodemundial2026"
});

