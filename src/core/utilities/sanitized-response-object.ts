import { keys, isArray, isPlainObject, map } from 'lodash';
import { convertUidsToIds } from './convertIds';
export const sanitizeResponseObject = (responseObject: any) => {
  const newResponseObject = {};
  const attributeKeys = keys(responseObject) || [];

  attributeKeys.forEach(attributeKey => {
    const attributeValue = responseObject[attributeKey];

    if (isPlainObject(attributeValue)) {
      newResponseObject[attributeKey] = convertUidsToIds(attributeValue);
    } else if (isArray(attributeValue)) {
      newResponseObject[attributeKey] = map(
        attributeValue,
        sanitizeResponseObject,
      );
    } else {
      if (attributeKey === 'uid') {
        newResponseObject['id'] = attributeValue;
      } else if (attributeValue) {
        newResponseObject[attributeKey] = attributeValue;
      }
    }
  });

  return newResponseObject;
};
