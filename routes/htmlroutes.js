//Requires parameter to create new route object//
const router = require("express").Router();

//It is node.js path module//
const path = require("path");

//GET //
router.get("/notes", (req, res) => {
 res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// wildcard function//
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})


//Export Module//
module.exports = router;