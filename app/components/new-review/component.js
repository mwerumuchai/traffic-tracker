import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
    var params = {
      userName: this.get("userName"),
      comment: this.get("comment"),
      legend: this.get("legend")
    };
    this.set('userName', '');
    this.set('comment', '');
    this.sendAction('saveAnswer', params);
    }
  }
});
