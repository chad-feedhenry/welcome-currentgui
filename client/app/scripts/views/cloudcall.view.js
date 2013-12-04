/*global App, _, $fh*/
/* Backbone View */
App.View.CloudcallView = App.View.BaseView.extend({

  template: App.Templates.cloudcall,
  model: App.models.cloudcallPage,

  events: {
    'click .cloud-action-button': 'cloudCall'
  },

  initialize: function(){
    _.bindAll(this, 'gotData', 'dataError');
  },

  cloudCall: function(){
    var self = this;
    $fh.act({act: 'hello', req: {}}, function(res){
      self.gotData(res);
    }, function(msg, err){
      self.dataError(msg, err);
    });
  },

  gotData: function(res){
    this.$el.find('.hidden').removeClass('hidden');
    this.$el.find('.response_content').removeClass('alert-error').addClass('alert-success').html('Response: ' + res.text);
    this.$el.find('.extra_response').removeClass('hidden');
  }

});