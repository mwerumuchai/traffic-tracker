import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
          legends: this.store.findAll('legend'),
          reviews: this.store.findAll('review')
        });
    }
});
