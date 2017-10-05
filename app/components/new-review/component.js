import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
    var params = {
      userName: this.get("userName") ? this.get("userName"): 'Annonymous',
      comment: this.get("comment") ? this.get("comment"): '',
      createdAt: new Date(),
      legend: this.get("legend")
    };
    this.set('userName', '');
    this.set('comment', '');
    this.sendAction('saveAnswer', params);
    }
  }
});
