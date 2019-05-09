import { EntityMetadata } from 'typeorm';

export function getSelections(fields: any, metaData: EntityMetadata): any{
    if (fields) {
        return fields.split(',').filter((item) => {
            return item.indexOf('[') === -1 && metaData.columns.map((item) => { return item.propertyName }).indexOf(item) > -1
        })
    }else {
        return ['id', 'name'];
    }
}

function evaluateRelations(fields, results, metaData: EntityMetadata) {
    console.log(fields, results);
    results = results.concat(fields.split(',').filter((item) => {
        return metaData.relations.map((item) => {
            return item.propertyName
        }).indexOf(item) > -1
    }));
    console.log(results);
    results = results.concat(fields.split(',').filter((item) => {
        return item.indexOf('[') > -1
    })).map((item) => {
        var newFields = item.substring(item.indexOf('[') + 1, item.substring(0, item.indexOf('[')).length - 1);
        var relation = item.substring(0, item.indexOf('['));
        var relations = metaData.relations.filter((item) => {
            return item.propertyName === relation
        });
        //console.log(fields, item, relation, relations);
        if (relations.length === 1) {
            results = results.concat(evaluateRelations(newFields, results, relations[0].entityMetadata).map((rel) => {
                return relation + '.' + rel;
            }));
        }
        return relation;
    });
    console.log('Final:', results);
    return results;
}
export function getRelations(fields: any, metaData: EntityMetadata): any {
    if (fields) {
        var results = [];

        // results = results.concat(fields.split(',').filter((item) => {
        //     return metaData.relations.map((item) => {
        //         return item.propertyName
        //     }).indexOf(item) > -1
        // }));
        // results = results.concat(fields.split(',').filter((item) => {
        //     return item.indexOf('[') > -1
        // })).map((item) => {
        //     item.substring(item.indexOf('[') + 1, item.substring(0, item.indexOf('[')).length - 1);
        //     return item.substring(0, item.indexOf('['));
        // });
        results = evaluateRelations(fields, results, metaData);
        console.log('Results:', results);
        return results;
    } else {
        return ['id', 'name'];
    }
}
