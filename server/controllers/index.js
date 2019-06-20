var models = require('../models');

//handles routes from server and sends to model to handle database query
module.exports = {
  messages: {
    //get: function (req, res) {}, // a function which handles a get request for all messages
    get: (req, res) => {
      console.log('hello');
      res.sendStatus(402);
      // models.messages.get(get a message from the database)
    },
    post: function (req, res) {
      res.sendStatus(200);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

