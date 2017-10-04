import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
          legends: this.store.findAll('legend'),
          reviews: this.store.findAll('review')
        });
    }
});
