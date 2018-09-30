const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../config/connection");

router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../../client/public/html/index.html")));

router.get("/api", (req, res) => db.query("SELECT * FROM tasks", (err, data) => res.json(data)));


module.exports = router;