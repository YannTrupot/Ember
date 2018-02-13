import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('td2/array-contains', 'helper:td2/array-contains', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{td2/array-contains inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
