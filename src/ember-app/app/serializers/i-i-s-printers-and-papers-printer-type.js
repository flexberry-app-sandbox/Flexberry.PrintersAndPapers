import { Serializer as PrinterTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-printers-and-papers-printer-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PrinterTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
