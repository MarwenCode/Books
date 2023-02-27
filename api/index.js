import express from "express";
import mysql from "mysql"

const app = express();

const DataBase = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"test"
})

app.get("/", (req,res) => {
    res.json("mySQL connected")
})





app.listen(5500, () => {
    console.log("connected to backend")
})