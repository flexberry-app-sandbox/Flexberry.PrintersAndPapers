import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  paperType: DS.belongsTo('i-i-s-printers-and-papers-paper-type', { inverse: null, async: false }),
  printer: DS.belongsTo('i-i-s-printers-and-papers-printer', { inverse: 'printerPaper', async: false })
});

export let ValidationRules = {
  paperType: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer-paper.validations.paperType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  printer: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer-paper.validations.printer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PrinterPaperE', 'i-i-s-printers-and-papers-printer-paper', {
    paperType: belongsTo('i-i-s-printers-and-papers-paper-type', 'Paper type', {
      name: attr('Name', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'name' })
  });
};
