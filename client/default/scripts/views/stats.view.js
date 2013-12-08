/*global App, _, $fh*/
/* Backbone View */
App.View.StatsView = App.View.BaseView.extend({

  templateId: 'stats',
  model: App.models.statsPage,
  
  events: {
    'click .get-fb-data': 'getByFacebookUsername'
  },
  
  getByFacebookUsername: function(){
    var inputField = this.$el.find('#nameField');
    var username = inputField.val();
    $fh.act({
      act: 'getByFacebookUsername',
      req: {
        username : username
      }
    }, function(res){
      alert(JSON.stringify(res));
      this.$el.find('.hidden').removeClass('hidden');
      //this.$el.find('.response_content').removeClass('alert-error').addClass('alert-success').html('Response: ' + res.text);
      this.$el.find('.response_content').removeClass('alert-error').addClass('alert-success').html('Response: ' + JSON.stringify(res));
      this.$el.find('.extra_response').removeClass('hidden');
      //this.$el.find('.extra_response').removeClass('hidden');
      alert("Changing val...");
      //this.$el.find('.extra_response').text(JSON.stringify(res));
    }, function(msg, err){
      alert(err.error);
    }
    );
  }
  
});
  
