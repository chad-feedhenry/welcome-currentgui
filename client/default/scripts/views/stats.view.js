/*global App, _, $fh*/
/* Backbone View */
App.View.StatsView = App.View.BaseView.extend({

  templateId: 'stats',
  model: App.models.statsPage,
  
  events: {
    'click .get-fb-data': 'getByFacebookUsername'
  },
  
  getByFacebookUsername: function(){
    alert('TEST!');
    $fh.act({
      act: 'getByFacebookUsername',
      req: {
        username : username
      }
    }, function(res){
      alert("Chad RES TEST");
      alert(JSON.stringify(res));
    }, function(msg, err){
      alert("Chad Err Test");
      alert(err.error);
    }
    
    
    
    
    );
  }
  
});
  
  /*
  getByFacebookUsername: function(){
    var inputField = this.$el.find('#nameField');
    var username = inputField.val();
    $fh.act({
      act: 'getByFacebookUsername',
      req: {
        username : username
      }
    }, fucntion(res){
      alert(JSON.stringify(res));
    }, function(msg, err){
      alert(err.error);
    });
  },
  */
