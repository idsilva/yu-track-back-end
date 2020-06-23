const mongoose = require('mongoose');
const uri = "mongodb+srv://MongoAdmin:MongoAdmin@cluster0-zssxh.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!!')
});

module.exports = mongoose;

