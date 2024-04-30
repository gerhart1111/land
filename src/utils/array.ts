interface InitArrayItem {
  id: string;
  name: string;
}

interface FetchedArrayItem {
  id: string;
}


export const formatArray = (
  initArray: InitArrayItem[],
  fetchedArray: FetchedArrayItem[]
  ): { id: string; name: string; checked: boolean }[] => {
  let result: { id: string; name: string; checked: boolean }[] = [];
  for (let i = 0; i < initArray.length; i++) {
    const index = fetchedArray.findIndex(item => item.id === initArray[i].id);
    result.push({
       id: initArray[i].id, 
       name: initArray[i].name, 
       checked: index !== -1 ? true : false
     });
  }
  return result;
};

export function deepCopy<T>(array: T[]): T[] {
  return JSON.parse(JSON.stringify(array));
}
