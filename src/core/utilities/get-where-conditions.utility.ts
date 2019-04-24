import * as _ from 'lodash';
export function getWhereConditions(queryParams: any): any[] {
  if (!queryParams || (queryParams && !queryParams.filter)) {
    return [];
  }

  const filterParams = _.isString(queryParams.filter)
    ? [queryParams.filter]
    : queryParams.filter;

  return _.filter(
    _.map(filterParams || [], (filterParam: string) => {
      const filterSplit = (filterParam || '').split(':');
      const filterOperation = filterSplit[1];
      switch (filterOperation) {
        case 'eq': {
          return { [filterSplit[0]]: filterSplit[2] };
        }
        default:
          return null;
      }
    }),
    condition => condition,
  );
}
