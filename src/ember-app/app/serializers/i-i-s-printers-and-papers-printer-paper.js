import { Serializer as PrinterPaperSerializer } from
  '../mixins/regenerated/serializers/i-i-s-printers-and-papers-printer-paper';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PrinterPaperSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
