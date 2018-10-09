const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../config/connection");

router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../../client/public/html/index.html")));

router.get("/api", (req, res) => {
    db.query("SELECT * FROM tasks", (err, data) => {
        if (err) throw err;
        res.json(data);
    })
});

router.post("/post", (req, res) => {
    console.log(req.body);
    let dbQuery = "INSERT INTO tasks (task, type) VALUES (?,?)";
    db.query(dbQuery, [req.body.task, req.body.type], (err, data) => {
        if (err) throw err;
        console.log(`Success! ${req.body.task} has been added.`)
        res.end()
    })
})

router.put("/update", (req, res) =>{
    console.log(req.body);
    let dbQuery = `UPDATE tasks SET task = ? WHERE id = ?`
    db.query(dbQuery, [req.body.task, req.body.id], (err, data) => {
        if (err) throw err;
        console.log(`Success! ${req.body.task} has been updated.`)
    })
})

router.delete("/delete", (req, res) => {
    console.log(req.body);
    let dbQuery = `DELETE from tasks WHERE id = ?`
    db.query(dbQuery, [req.body.id], (err, data) => {
        if (err) throw err;
        console.log(`Success! ${req.body.task} has been deleted.`)
    })
})


module.exports = router;