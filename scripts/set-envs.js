const {writeFileSync, mkdirSync} = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const targetPathEnv = '.env';

if (!process.env.URL_LOGIN_LOCAL || !process.env.URL_LOGIN || !process.env.URL_REGISTER || !process.env.URL_CHECK_TOKEN) {
  throw new Error('Alguna de las variables de entorno no estan definidas');
}

const envContent = `
export const environment = {
  URL_LOGIN_LOCAL: '${process.env['URL_LOGIN_LOCAL']}',
  URL_LOGIN: '${process.env['URL_LOGIN']}',
  URL_REGISTER : '${process.env['URL_REGISTER']}',
  URL_CHECK_TOKEN : '${process.env['URL_CHECK_TOKEN']}',
  CLAVE_SITIO_WEB_RECAPTCHA: '${process.env['CLAVE_SITIO_WEB_RECAPTCHA']}',
};
`

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envContent);
writeFileSync(targetPathDev, envContent);
