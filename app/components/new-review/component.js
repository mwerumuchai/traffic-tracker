import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
    var params = {
      userName: this.get("userName"),
      comment: this.get("comment")
      }
    }
  }
});
