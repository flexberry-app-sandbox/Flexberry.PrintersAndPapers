import { Serializer as PrinterSerializer } from
  '../mixins/regenerated/serializers/i-i-s-printers-and-papers-printer';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PrinterSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
