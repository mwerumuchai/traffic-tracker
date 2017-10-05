import DS from 'ember-data';

export default DS.Model.extend({
    userName: DS.attr(),
    comment: DS.attr(),
    legend: DS.belongsTo('legend', { async: true }),
    createdAt: DS.attr('date')
});

