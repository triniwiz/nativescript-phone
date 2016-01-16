var app = require("application");

exports.call = function(args){
var context = app.android.context;
var item = args;
return new Promise(function(resolve,reject){
  try{
    var intent = new android.content.Intent(android.content.Intent.ACTION_DIAL);
    intent.setData(android.net.Uri.parse("tel:" +item));
    intent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(intent);
  }catch(ex){
    console.log("call error: "+ex);
  }
})

};
