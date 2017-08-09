var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('handling messages GET')
      // console.log('HANDLING GET:');

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console('handling messages POST')

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log('handling users GET')
    },
    post: function (req, res) {
      // Get username from request
      var username = req.body.username;

      // Add username database using the Model's user POST method
      models.users.post(username, res);

      // End the response with a success code
      // res.end();
    }
  }
};

