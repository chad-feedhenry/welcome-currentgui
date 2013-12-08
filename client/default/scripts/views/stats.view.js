/*global App, _, $fh*/
/* Backbone View */
App.View.StatsView = App.View.BaseView.extend({

  templateId: 'stats',
  model: App.models.statsPage,
  
  events: {
    'click .get-fb-data': 'getByFacebookUsername'
  },
  
  getByFacebookUsername: function(){
    //alert('TEST!');
    var inputField = this.$el.find('#nameField');
    //alert('INPUT FIELD = ' + inputField);
    var username = inputField.val();
    alert('Username = ' + username);


    $fh.act({
      act: 'getByFacebookUsername',
      req: {
        username : username
      }
      //act: 'getByFacebookUsername',
      //req: {
      //  username : username
      //}
    }, function(res){
      alert(JSON.stringify(res));
    }, function(msg, err){
      alert(err.error);
    }
    
    
    
    
    );
  }
  
});
  
