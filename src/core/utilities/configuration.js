"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let pathFolder = process.env.HRIS_HOME;
if (!pathFolder) {
    if (!fs.existsSync('./files')) {
        fs.mkdirSync('./files');
    }
    if (!fs.existsSync('./files/config.json')) {
        fs.writeFileSync('./files/config.json', fs.readFileSync('./config.example.json'));
    }
    pathFolder = __dirname.split('/src/core/utilities').join('') + '/files';
}
const config = JSON.parse(fs.readFileSync(pathFolder + '/' + 'config.json', 'utf8'));
function getDataBaseConfiguration() {
    return Object.assign({}, config.database, { 
        // synchronize: false,
        // migrationsRun: true,
        // synchronize: true,
        // migrationsRun: false,
        // database: 'hris4_new',
        entities: ['src/**/*.entity{.ts,.js}'], migrations: ['src/database/migration/*.ts'] });
}
exports.getDataBaseConfiguration = getDataBaseConfiguration;
function getConfiguration() {
    const files = config.files || {};
    if (!files.apps) {
        files.apps = pathFolder + '/' + 'apps';
    }
    if (!files.temp) {
        files.temp = pathFolder + '/' + 'temp';
    }
    if (!fs.existsSync(files.apps)) {
        fs.mkdirSync(files.apps);
    }
    if (!fs.existsSync(files.temp)) {
        fs.mkdirSync(files.temp);
    }
    return files;
}
exports.getConfiguration = getConfiguration;
//# sourceMappingURL=configuration.js.map