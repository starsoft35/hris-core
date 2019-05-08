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

export function getRelations(fields: any, metaData: EntityMetadata): any {
    if (fields) {
        return fields.split(',').filter((item) => {
            return metaData.relations.map((item) => { return item.propertyName }).indexOf(item) > -1
        })
    } else {
        return ['id', 'name'];
    }
}
