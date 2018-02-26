
var FriendsData = [];
var objFriend = function(name, URLPhoto, nVals)
{
   var Scores = [];
   var sFriendName = "";
   var PhotoURL = "";
   console.log("In Friend obj");
   console.log("Name = " + name + "Phote = " + URLPhoto);
   sFriendName = name;
   PhotoURL = URLPhoto;
   console.log(sFriendName + " " + PhotoURL);
   for (var i = 0; i <nVals.length; i++)
   {	
   		Scores.push(nVals[i]);
   }	
   // Scores.push(val2);
   // Scores.push(val3);
   // Scores.push(val4);
   // Scores.push(val5);
   // Scores.push(val6);
   // Scores.push(val7);
   // Scores.push(val8);
   // Scores.push(val9);
   // Scores.push(val10);
   this.AddNewFriend = function (oFriend)
	{
		console.log("in add new friend");
		//create a Friend obj
		//oFriend = new objFriend(name, URLPhoto, ValArr);
		//add the new Friend Obj to our global array
		//FriendsData.push(oFriend); 
		FriendsData.push(this); 
		console.log(oFriend);
	};
	//check compatibily of this friend with our db
	this.DetermineCompatibility = function(FrndName, FrndPhoto)
	{
         var oFriendTemp = {};
         var DiffScoresArr = [];
         var TotalDiff = 0;
         var Index = 0;
         console.log("compatibility Testing");
         // for(var i = 0; i < FriendsData.length; i++)
         // {
         // 	//get the FriendObj at index
         // 	oFriendTemp = FriendsData[i];
         // 	console.log("FriendObj is: " + oFriendTemp);
         // 	for(var j = 0; j < 10; j++)
         // 	{
         // 		//var diff = this.Scores[j] - oFriendTemp.Scores[j];
         // 		console.log(this.Scores[0]);
         // 		console.log(oFriendTemp.Scores[j]);
         // 		var diff = this.Scores[j] - FriendsData[i].Scores[j];
         // 		if(diff < 1)
         // 		{
         // 			// turn diff to positive
         // 			diff = diff * -1;
         // 		}
         // 		TotalDiff = TotalDiff + diff;	
         // 	}
         // 	DiffScoresArr.push(TotalDiff);
         // 	TotalDiff = 0;         
         // }
         // // we have to find the lowest value of Diff as this means it is most compatible
         // LowestValue = DiffScoresArr[0];
         // for(var k = 0; k < 10; k++)
         // {
         // 	if(LowestValue > DiffScoresArr[k])
         // 	{
         // 		//make this the LowestValue
         // 		LowestValue = DiffScoresArr[k];
         // 		//save index of swap
         // 		Index = k;
         // 	}	
         // }
         //send the FriendName and URL
         //FrndName = FriendsData[Index].sFriendName;
         //FrndPhoto = FriendsData[Index].PhotoURL;
         FrndName = this.sFriendName;
         FrndPhoto = this.PhotoURL;
         console.log(this.sFriendName + " " + this.PhotoURL);
         console.log(FrndName);
         console.log(FrndPhoto);
         return;
	};
};



//module.exports = FriendsData;

module.exports = objFriend;