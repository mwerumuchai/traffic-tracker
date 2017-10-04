import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('legend')
    }
});
