// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");
var path = require('path');
var data = {};
var bestMatch;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the JavaScript array
  // (ex. User fills out the survey... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) 
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
     {
      data = req.body;
      friendsData.push(data);
      getMatch();
      res.json(bestMatch);
    });
    
  };

  // ---------------------------------------------------------------------------

  function getMatch() {
    for (var i = 0; i < friendsData.length; i++) {
        var obj = friendsData[friendsData.length -1].scores;
        var objArray = friendsData[i].scores;
        var match = 0;
        for (var k = 0; k < obj.length; k++) {
            var obj1 = Number(obj[k]);
            var obj2 = Number(objArray[k]);
            if (obj1 - obj2 < 0) {
                match += ((obj1 - obj2) * -1);
            } else {
                match += (obj1 - obj2);
            }
        }
        friendsData[i].match = match;
    }

    friendsData.sort(function(a, b) {
        return (a.match > b.match) ? 1 : ((b.match > a.match) ? -1 : 0);

        });
    bestMatch = friendsData[1];
    console.log(bestMatch);
}