var path = require("path");
// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
module.exports = function(app)
{ 
app.get("/", function(req, res) {
  console.log('in get');
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/Survey.html"));
 });


// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newcharacter);
  characters.push(newcharacter);
  res.json(newcharacter);
});

};
