import { Serializer as PaperTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-printers-and-papers-paper-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PaperTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
