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
      act: 'getByFacebookUsername'
      
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
  
