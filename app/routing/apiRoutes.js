var path = require("path");
var objFriend = require("../data/friends.js");
// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
module.exports = function(app) 
{
	app.get("/api/friends", function(req, res) {
	  console.log('in route');
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Create New Characters - takes in JSON input
	app.post("/api/friends", function(req, res) {
	  var strName = ""	;
	  var sURL = "";
	  var FriendColl = [];
	  var FrndData = {
	  	 FriendName:"",
	     FriendPhoto:""
	  };
	  
	  //var uScores = [];
	  var nScores = [];
	  console.log('received post request');
	  //console.log(res);
	  console.log(req.body);
	  console.log(req.body.name);
	  console.log(req.body.photo);
	  
	  strName = req.body.name;
	  sURL = req.body.photo;
	  //uScores = req.body.scores;
	  console.log(strName);
	  //console.log(uScores[0]);
	  for(var j=0; j < req.body.scores.length; j++)
	  {
	  	var x = req.body.scores[j];
	  	nScores.push(parseInt(x,10));
	  	console.log(x);
	  }

	  var oFrnd = new objFriend(strName, sURL, nScores);
	  oFrnd.AddNewFriend(oFrnd);
	  FriendColl.push(oFrnd);
	  //FriendsData.push(oFrnd);
	  oFrnd.DetermineCompatibility(FrndData.FriendName, FrndData.FriendPhoto);
	  //console.log(uScores[1]); 
	  // req.body hosts is equal to the JSON post sent from the user
	  // This works because of our body-parser middleware
	  // var newcharacter = req.body;
	  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
	  // console.log(newcharacter);
	  // characters.push(newcharacter);
	  console.log(FriendColl[0].sFriendName);
	  FrndData.FriendName = "Peter";
	  FrndData.FriendPhoto = "www.google.com";
	  console.log(FrndData.FriendName, FrndData.FriendPhoto);
	  res.json(FrndData);
	  //res.end();
	});
};	