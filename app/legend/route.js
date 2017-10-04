import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('legend', params.legend_id);
  },
  actions: {
    saveAnswer(params) {
      var newReview = this.store.createRecord('review', params);
      var legend = params.legend;
      legend.get('reviews').addObject(newReview);
      newReview.save().then (function() {
        return legend.save();
      });
      this.transitionTo('legend', legend);
    }
  }
});
