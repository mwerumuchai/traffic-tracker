import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('legend-tile', 'Integration | Component | legend tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{legend-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#legend-tile}}
      template block text
    {{/legend-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
