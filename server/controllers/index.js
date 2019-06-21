var models = require('../models');

//handles routes from server and sends to model to handle database query
module.exports = {
  messages: {
    //get: function (req, res) {}, // a function which handles a get request for all messages
    get: (req, res) => {
      console.log('hello');
      models.messages.get((err, results) => {
        // console.log('inside get')
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
      res.sendStatus(402);
      // models.messages.get(get a message from the database)
    },
    post: function (req, res) {
      var params = req.body.username;
      console.log(req.body.username);
      models.messages.post(params, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

