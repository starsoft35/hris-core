

export const convertUidsToIds = (object)=>{
    if(object){
        if (object.uid) {
          object.id = object.uid;
          delete object.uid;
        }
        Object.keys(object).forEach(key => {
          if (typeof object[key] === 'object') {
            if (Array.isArray(object[key])) {
              object[key].forEach((o, index) => {
                object[key][index] = convertUidsToIds(o);
              });
            } else {
              object[key] = convertUidsToIds(object[key]);
            }
          } else if(object[key] === null){
            delete object[key];
          }
        });
    }
    return object;
}