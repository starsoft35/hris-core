"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSelections(fields, metaData) {
    if (fields) {
        console.log(metaData.columns
            .map(metadataColumn => {
            return metadataColumn.propertyName;
        }).join(','));
        fields = fields.split("*").join(metaData.columns
            .map(metadataColumn => {
            return metadataColumn.propertyName;
        }).join(','));
        return fields.split(',').filter(item => {
            return (item.indexOf('[') === -1 &&
                metaData.columns
                    .map(metadataColumn => {
                    return metadataColumn.propertyName;
                })
                    .indexOf(item) > -1);
        });
    }
    else {
        return metaData.columns
            .map(metadataColumn => {
            return metadataColumn.propertyName;
        });
    }
}
exports.getSelections = getSelections;
function evaluateRelations(fields, results, metaData) {
    results = results.concat(fields.split(',').filter(item => {
        return (metaData.relations
            .map(metadataRelation => {
            return metadataRelation.propertyName;
        })
            .indexOf(item) > -1);
    }));
    results = results
        .concat(fields.split(',').filter(item => {
        return item.indexOf('[') > -1;
    }))
        .map(item => {
        const newFields = item.substring(item.indexOf('[') + 1, item.substring(0, item.indexOf('[')).length - 1);
        const relation = item.substring(0, item.indexOf('['));
        const relations = metaData.relations.filter(metadataRelation => {
            return metadataRelation.propertyName === relation;
        });
        if (relations.length === 1) {
            results = results.concat(evaluateRelations(newFields, results, relations[0].entityMetadata).map(rel => {
                return relation + '.' + rel;
            }));
        }
        return relation;
    });
    return results;
}
function getRelations(fields, metaData) {
    if (fields) {
        let results = [];
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
        return results;
    }
    else {
        return [];
    }
}
exports.getRelations = getRelations;
//# sourceMappingURL=get-fields.utility.js.map