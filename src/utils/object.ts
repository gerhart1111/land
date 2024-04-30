import _ from 'lodash';
import { validate } from 'uuid';

export const formatValues = (obj:any, cond:any, val:any) => {
  var arrKeys = Object.keys(obj);
  for (var i = 0; i < arrKeys.length; i++) {
    if (obj[arrKeys[i]] === cond) {
      obj[arrKeys[i]] = val;
    }
  }
  return obj;
};

export const findNameByValue = (arrayObj: { name: string | undefined; value: number }[], id: number) => {
  for (var i = 0; i < arrayObj.length; i++) {
    if (arrayObj[i].value === id) return arrayObj[i].name;
  }
};

export const findValueByName = (arrayObj: { name: string | undefined; value: number }[], name: string | undefined) => {
  for (var i = 0; i < arrayObj.length; i++) {
    if (arrayObj[i].name === name) return arrayObj[i].value;
  }
};

export const formatData = ({ _id, ...props }:any) => (!validate(_id) ? Object.assign(props, { _id }) : props);

export function getObjectDiff(obj1:any, obj2:any) {
  const diff = Object.keys(obj1).reduce((result, key) => {
    if (!obj2.hasOwnProperty(key)) {
      result.push(key);
    } else if (_.isEqual(obj1[key], obj2[key])) {
      const resultKeyIndex = result.indexOf(key);
      result.splice(resultKeyIndex, 1);
    }
    return result;
  }, Object.keys(obj2));

  return diff;
}
