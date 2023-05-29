import mysql from "mysql"
    
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    // Write your mySql database password.
    password: " ",
    // Write your mySql database name.
    database: "biletlik"
    })
