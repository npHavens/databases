var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, response){
      // define queryString as insert command
      //var queryString = 'INSERT INTO users (name) VALUES ("Valjean")';
      var queryString = 'INSERT INTO users (name) VALUES ("'+ username + '")';

      db.query(queryString, function(err){
        if (err) {console.log("---> ERROR: ", err);
      } else {
        response.end();
        console.log("---> SUCCESS!");
      }

      });

      // define arguments as username


      console.log("models-->users-->post:", username);

    }
  }
};

