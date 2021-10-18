import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.printers-and-papers.caption'),
          title: i18n.t('forms.application.sitemap.printers-and-papers.title'),
          children: [{
            link: 'i-i-s-printers-and-papers-printer-type-l',
            caption: i18n.t('forms.application.sitemap.printers-and-papers.i-i-s-printers-and-papers-printer-type-l.caption'),
            title: i18n.t('forms.application.sitemap.printers-and-papers.i-i-s-printers-and-papers-printer-type-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-printers-and-papers-paper-type-l',
            caption: i18n.t('forms.application.sitemap.printers-and-papers.i-i-s-printers-and-papers-paper-type-l.caption'),
            title: i18n.t('forms.application.sitemap.printers-and-papers.i-i-s-printers-and-papers-paper-type-l.title'),
            children: null
          }, {
            link: 'i-i-s-printers-and-papers-printer-l',
            caption: i18n.t('forms.application.sitemap.printers-and-papers.i-i-s-printers-and-papers-printer-l.caption'),
            title: i18n.t('forms.application.sitemap.printers-and-papers.i-i-s-printers-and-papers-printer-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})