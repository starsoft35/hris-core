import * as fs from 'fs';
const pathFolder = process.env.HRIS_HOME;

const config = JSON.parse(
  fs.readFileSync(pathFolder + '/' + 'config.json', 'utf8'),
);

export const dataBaseConfiguration = {
  ...config.database,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migration/*.ts'],
  cli: {
    migrationsDir: 'src/database/migration',
  },
};

export function getAppsConfiguration() {
  const apps = config.apps || {};
  if (!apps.directory) {
    apps.directory = pathFolder + '/' + 'apps';
  }

  if (!fs.existsSync(apps.directory)) {
    fs.mkdirSync(apps.directory);
  }
  return apps;
}
