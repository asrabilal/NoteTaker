//Requires//
//This function is used to create a new router object//
const router = require("express").Router();
const db = require("../db/db.json");
//the nodejs fs-module is useful functionality, access & interact with the file system//
const fs = require("fs");

//GET Notes//
router.get("/notes", (req, res) => {
 res.json(db);
});

//POST New Notes//
router.post("/notes", (req, res) => {
 db.push(req.body);
 fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
  return err;
 });
 res.json(db);
});

//Talks about deleting Notes or item//
router.delete("/notes/:id", (req, res) => {
 db.splice(req.params.id - 1, 1);
 fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
  return err;
 });
 res.json(db);
});

//Export Module
module.exports = router;