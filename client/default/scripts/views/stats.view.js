/*global App*/
/* Backbone View */
App.View.StatsView = App.View.BaseView.extend({

  templateId: 'stats',
  model: App.models.statsPage,
  
  events: {
    'click .get-fb-btn': 'getByFacebookUsername'
  },
  
  initialize: function(){
    _.blindAll(this,'getByFacebookUsername');
  },
  
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
});
