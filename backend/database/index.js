//our very secure hard coded URL for our mongodb database
let url = 'mongodb://heroku_9ljjmbz6:j2cun5bjrr6l1i49mhgp1kupl6@ds261567.mlab.com:61567/heroku_9ljjmbz6';

//interact with mongo with... mongoose
const mongoose = require('mongoose');

//some boilerplate code? don't really get it but I assume it lets us use promises with mongoose (cool??)
mongoose.Promise = global.Promise;

//our main connect function
mongoose.connect(url).then(
    () => {
        //good to go!
        console.log('Connected to Mongo');

    },
    err => {
         // handle initial connection error
         console.log('error connecting to Mongo: ')
         console.log(err);
        }
  );
//export the connection so we can access it as "require('/path/to/database')"
module.exports = mongoose.connection;
