let mongoose = require('mongoose');

let database = {
  user : 'dkarmila',
  pass : 'dbpelatihan',
  url : 'ds115045.mlab.com:15045',
  name : 'dbpelatihan'
}
  mongoose.connect('mongodb://'+ database.user +':'+ database.pass +'@'+ database.url +'/'+ database.name);
// mongoose.connect("mongodb://localhost:27017/DBPelatihan");
var db=mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
  console.log("Connection to dbpelatihan is open...");
});