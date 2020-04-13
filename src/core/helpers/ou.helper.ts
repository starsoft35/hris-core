export function getISOOrgUnits(ou, user) {
    let ouIds = ou.filter((ouId) => ouId.indexOf('LEVEL-') === -1 && ouId.indexOf('OU_GROUP-') === -1 && ouId.indexOf('USER_ORGUNIT') === -1);
    ou.forEach((orgU) => {
        if (orgU === "USER_ORGUNIT") {
            ouIds = ouIds.concat(user.organisationUnits.map((orgUnit) => orgUnit.id))
        }
    })
    return ouIds;
}

export function generateOUFilterQuery(ousAlias, ou, levels, user) {
    let ouIds = ou.filter((ouId) => ouId.indexOf('LEVEL-') === -1 && ouId.indexOf('OU_GROUP-') === -1 && ouId.indexOf('USER_ORGUNIT') === -1);
    ou.forEach((orgU) => {
        if (orgU === "USER_ORGUNIT") {
            ouIds = ouIds.concat(user.organisationUnits.map((orgUnit) => orgUnit.id))
        }
    })
    let oulevelIds = ou.filter((ouId) => ouId.indexOf('LEVEL-') > -1);
    let ougroupIds = ou.filter((ouId) => ouId.indexOf('OU_GROUP-') > -1);
    let ouquery = levels.map(
        orglevel =>
            `${ousAlias}.uidlevel${orglevel.level} IN ('${ouIds.join("','")}')`,
    );

    let levelquery = oulevelIds.map(
        orglevel =>
            `${ousAlias}.uidlevel${orglevel.substring(6)} IS NOT NULL`,
    );
    let groupquery = ougroupIds.map(
        ougroupId =>
            `${ousAlias}."${ougroupId.substring(9)}" = TRUE`,
    );
    let queryFilter = '(' + ouquery.join(' OR ') + ')';

    if (queryFilter !== '' && levelquery.length > 0) {
        queryFilter += ' AND ';
        queryFilter += '(' + levelquery.join(' OR ') + ')';
    }

    if (queryFilter !== '' && groupquery.length > 0) {
        queryFilter += ' AND ';
        queryFilter += '(' + groupquery.join(' OR ') + ')';
    }
    return queryFilter;
}
