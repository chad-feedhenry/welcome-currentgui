//customize app cloud logic, all the public functions defined here will be accessible using the url:
//http://<host>/cloud/<function name>

var getWeather = require('./weather').getWeather;
var saveData = require('./databrowser').saveData;
var connectDB = require('./databrowser').connectDB;
var recordActivity = require('./record_activity').recordActivity;
var listActivity = require('./record_activity').listActivity;

var dbUrl = 'mongodb://127.0.0.1:27017/test';
if(process.env && !process.env.FH_USE_LOCAL_DB && process.env.FH_MONGODB_CONN_URL){
  dbUrl = process.env.FH_MONGODB_CONN_URL;
}

connectDB(dbUrl, function(){

});

exports.hello = function(params, callback) {
  recordActivity({
    "action": "Client called Cloud App"
  }, function(err, docs) {
    return callback(null, {
      text: 'Hello from FeedHenry'
    });
  });
};

exports.getWeather = function(params, callback) {
  recordActivity({
    "action": "Cloud Weather Called"
  }, function(err, docs) {
    return getWeather(params, callback);
  });
};

exports.saveData = function(params, callback) {
  recordActivity({
    "action": "Save Data in Cloud"
  }, function(err, docs) {
    return saveData(params, callback);
  });
};

exports.recordActivity = function(params, callback) {
  return recordActivity(params, callback);
};

exports.listActivity = function(params, callback) {
  return listActivity(params, callback);
};


/**
 * Get the details of a Facebook user by username
 * @param {Objects} params Options passed from client act call
 * @param {Function} callback Callback function we call with args callback(err, response)
 * */
exports.getByFacebookUsername = function(params, callback){
  var username = params.username;
  
  //Check for username
  if(!username || username===""){
    return callback("Must provide a valid username",null);
  }
  
  //Call the Facebook graph API
  var request = require('request');
  request('http://graph.facebook.com/'+username, function(err, res, body){
    if(err){
      return callback({
        msg: "Facebook request error", err:err
        });
    }
    return callback(null,body);
  };
};


exports.getTime = function(params, callback) {
  return callback(null, {
    time: new Date().getTime()
  });
};
