import DS from 'ember-data';

export default DS.Model.extend({
    legendName: DS.attr(),
    startPoint: DS.attr(),
    endPoint: DS.attr(),
    legendDistane: DS.attr()
});
