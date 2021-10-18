import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Printers and papers',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Printers and papers',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Printers and papers',
          title: 'Printers and papers'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'printers-and-papers': {
          caption: 'PrintersAndPapers',
          title: 'PrintersAndPapers',
          'i-i-s-printers-and-papers-printer-type-l': {
            caption: 'Printer type',
            title: ''
          },
          'i-i-s-printers-and-papers-paper-type-l': {
            caption: 'Paper type',
            title: ''
          },
          'i-i-s-printers-and-papers-printer-l': {
            caption: 'Printer',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
