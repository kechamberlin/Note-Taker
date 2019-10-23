
var notes = require("../db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.post("/api/notes", function(req, res) {
    console.log(req.body);
    notes.push(req.body);
    res.sendStatus(200);
  });

  app.get("/api/notes", function(req, res) {
    res.json(notes);

  });

  app.delete("/api/notes/:title", function(req, res) {
    notes = notes.filter(note => note.title !== req.params.title)
    res.sendStatus(200);
  });
}