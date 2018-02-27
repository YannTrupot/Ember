import { moduleForModel, test } from 'ember-qunit';

moduleForModel('td4-application', 'Unit | Serializer | td4 application', {
  // Specify the other units that are required for this test.
  needs: ['serializer:td4-application']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
