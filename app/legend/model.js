import DS from 'ember-data';

export default DS.Model.extend({
    legendName: DS.attr(),
    link: DS.attr(),
    reviews: DS.hasMany('review', {async:true})
});
