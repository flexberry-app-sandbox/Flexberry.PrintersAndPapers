import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-printers-and-papers-printer-type', 'Unit | Model | i-i-s-printers-and-papers-printer-type', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
