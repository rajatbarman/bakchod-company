// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
import { camelCase, isPlainObject } from 'lodash-es';

export default function camelizeKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v));
  }
  if (isPlainObject(obj)) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
}
