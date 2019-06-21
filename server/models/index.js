var db = require('../db');

//interact with database to retrieve messages (query)
module.exports = {
  messages: {
    //get: function () {}, // a function which produces all the messages
    get: function(callback) {
      console.log('inside models');
      db.query('SELECT * FROM `users`', function(err, results){
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    },
    post: function (params, callback) {
      // var count = 11;
      db.query(`INSERT INTO users values ( user_id,"${params}")`, (err, results) => {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

