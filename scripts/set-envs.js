const {writeFileSync, mkdirSync} = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const targetPathEnv = '.env';

if (!process.env.URL_LOGIN_LOCAL) {
  throw new Error('URL_LOGIN_LOCAL no definido');
}

const envContent = `
export const environment = {
  URL_LOGIN_LOCAL: '${process.env['URL_LOGIN_LOCAL']}'
};
`

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envContent);
writeFileSync(targetPathDev, envContent);
