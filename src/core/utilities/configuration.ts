import * as fs from 'fs';
let pathFolder = process.env.HRIS_HOME;
if (!pathFolder) {
  if (!fs.existsSync("./files")) {
    fs.mkdirSync("./files");
  }
  if (!fs.existsSync("./files/config.json")) {
    fs.writeFileSync("./files/config.json", fs.readFileSync("./config.example.json"))
  }
  pathFolder = "./files";
}
const config = JSON.parse(
  fs.readFileSync(pathFolder + '/' + 'config.json', 'utf8'),
);



export function getDataBaseConfiguration(){
  return {
    ...config.database,
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migration/*.ts'],
    cli: {
      migrationsDir: 'src/database/migration',
    },
  };
}
export function getConfiguration() {
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
