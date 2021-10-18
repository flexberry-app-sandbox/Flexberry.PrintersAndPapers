import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  serialNumber: DS.attr('number'),
  name: DS.attr('string'),
  ready: DS.attr('boolean'),
  dateOfManufacture: DS.attr('date'),
  printerType: DS.belongsTo('i-i-s-printers-and-papers-printer-type', { inverse: null, async: false }),
  printerPaper: DS.hasMany('i-i-s-printers-and-papers-printer-paper', { inverse: 'printer', async: false })
});

export let ValidationRules = {
  serialNumber: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer.validations.serialNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ready: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer.validations.ready.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateOfManufacture: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer.validations.dateOfManufacture.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  printerType: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer.validations.printerType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  printerPaper: {
    descriptionKey: 'models.i-i-s-printers-and-papers-printer.validations.printerPaper.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PrinterE', 'i-i-s-printers-and-papers-printer', {
    name: attr('Name', { index: 0 }),
    serialNumber: attr('Serial number', { index: 1 }),
    ready: attr('Ready', { index: 2 }),
    dateOfManufacture: attr('Date of manufacture', { index: 3 }),
    printerType: belongsTo('i-i-s-printers-and-papers-printer-type', 'Printer type', {
      name: attr('Name', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' }),
    printerPaper: hasMany('i-i-s-printers-and-papers-printer-paper', 'Printer paper', {
      paperType: belongsTo('i-i-s-printers-and-papers-paper-type', 'Paper type', {
        name: attr('Name', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('PrinterL', 'i-i-s-printers-and-papers-printer', {
    name: attr('Name', { index: 0 }),
    serialNumber: attr('Serial number', { index: 1 }),
    ready: attr('Ready', { index: 2 }),
    dateOfManufacture: attr('Date of manufacture', { index: 3 }),
    printerType: belongsTo('i-i-s-printers-and-papers-printer-type', 'Name', {
      name: attr('Name', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
