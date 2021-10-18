import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-printers-and-papers-printer', 'Unit | Serializer | i-i-s-printers-and-papers-printer', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-printers-and-papers-printer',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-printers-and-papers-paper-type',
    'model:i-i-s-printers-and-papers-printer-paper',
    'model:i-i-s-printers-and-papers-printer-type',
    'model:i-i-s-printers-and-papers-printer',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
