import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-printers-and-papers-paper-type-l');
  this.route('i-i-s-printers-and-papers-paper-type-e',
  { path: 'i-i-s-printers-and-papers-paper-type-e/:id' });
  this.route('i-i-s-printers-and-papers-paper-type-e.new',
  { path: 'i-i-s-printers-and-papers-paper-type-e/new' });
  this.route('i-i-s-printers-and-papers-printer-l');
  this.route('i-i-s-printers-and-papers-printer-e',
  { path: 'i-i-s-printers-and-papers-printer-e/:id' });
  this.route('i-i-s-printers-and-papers-printer-e.new',
  { path: 'i-i-s-printers-and-papers-printer-e/new' });
  this.route('i-i-s-printers-and-papers-printer-type-l');
  this.route('i-i-s-printers-and-papers-printer-type-e',
  { path: 'i-i-s-printers-and-papers-printer-type-e/:id' });
  this.route('i-i-s-printers-and-papers-printer-type-e.new',
  { path: 'i-i-s-printers-and-papers-printer-type-e/new' });
});

export default Router;
