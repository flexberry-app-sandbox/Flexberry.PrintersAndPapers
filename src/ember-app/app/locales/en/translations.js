import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrintersAndPapersPaperTypeLForm from './forms/i-i-s-printers-and-papers-paper-type-l';
import IISPrintersAndPapersPrinterLForm from './forms/i-i-s-printers-and-papers-printer-l';
import IISPrintersAndPapersPrinterTypeLForm from './forms/i-i-s-printers-and-papers-printer-type-l';
import IISPrintersAndPapersPaperTypeEForm from './forms/i-i-s-printers-and-papers-paper-type-e';
import IISPrintersAndPapersPrinterEForm from './forms/i-i-s-printers-and-papers-printer-e';
import IISPrintersAndPapersPrinterTypeEForm from './forms/i-i-s-printers-and-papers-printer-type-e';
import IISPrintersAndPapersPaperTypeModel from './models/i-i-s-printers-and-papers-paper-type';
import IISPrintersAndPapersPrinterPaperModel from './models/i-i-s-printers-and-papers-printer-paper';
import IISPrintersAndPapersPrinterTypeModel from './models/i-i-s-printers-and-papers-printer-type';
import IISPrintersAndPapersPrinterModel from './models/i-i-s-printers-and-papers-printer';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-printers-and-papers-paper-type': IISPrintersAndPapersPaperTypeModel,
    'i-i-s-printers-and-papers-printer-paper': IISPrintersAndPapersPrinterPaperModel,
    'i-i-s-printers-and-papers-printer-type': IISPrintersAndPapersPrinterTypeModel,
    'i-i-s-printers-and-papers-printer': IISPrintersAndPapersPrinterModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'printers-and-papers': {
          caption: 'printers-and-papers',
          title: 'printers-and-papers',
          'i-i-s-printers-and-papers-printer-type-l': {
            caption: 'i-i-s-printers-and-papers-printer-type-l',
            title: 'i-i-s-printers-and-papers-printer-type-l'
          },
          'i-i-s-printers-and-papers-paper-type-l': {
            caption: 'i-i-s-printers-and-papers-paper-type-l',
            title: 'i-i-s-printers-and-papers-paper-type-l'
          },
          'i-i-s-printers-and-papers-printer-l': {
            caption: 'i-i-s-printers-and-papers-printer-l',
            title: 'i-i-s-printers-and-papers-printer-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-printers-and-papers-paper-type-l': IISPrintersAndPapersPaperTypeLForm,
    'i-i-s-printers-and-papers-printer-l': IISPrintersAndPapersPrinterLForm,
    'i-i-s-printers-and-papers-printer-type-l': IISPrintersAndPapersPrinterTypeLForm,
    'i-i-s-printers-and-papers-paper-type-e': IISPrintersAndPapersPaperTypeEForm,
    'i-i-s-printers-and-papers-printer-e': IISPrintersAndPapersPrinterEForm,
    'i-i-s-printers-and-papers-printer-type-e': IISPrintersAndPapersPrinterTypeEForm
  },

});

export default translations;
