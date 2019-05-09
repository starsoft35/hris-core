import * as fs from 'fs';
let pathFolder = process.env.HRIS_HOME;

let config = JSON.parse(fs.readFileSync(pathFolder + '/' + 'config.json', "utf8"));

export function getDataBaseConfiguration(){
    return {
        ...config.database,
        "entities": ["src/**/*.entity{.ts,.js}"],
        "migrations": ["src/database/migration/*.ts"],
        "cli": {
            "migrationsDir": "src/database/migration"
        }
    }
}

export function getAppsConfiguration() {
    let apps = config.apps || {};
    if (!apps.directory) {
        apps.directory = pathFolder + '/' + 'apps';
    }

    if (!fs.existsSync(apps.directory)) {
        fs.mkdirSync(apps.directory);
    }
    return apps;
}