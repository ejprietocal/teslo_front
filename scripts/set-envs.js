const { writeFileSync, mkdirSync } = require('fs');
const dotenv = require('dotenv');

// Determina cuál archivo de entorno usar
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env';
dotenv.config({ path: envFile });

// Rutas de los archivos de configuración
const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

// Verificar que las variables de entorno necesarias estén definidas
if (!process.env.URL_LOGIN_LOCAL || !process.env.URL_LOGIN || !process.env.URL_REGISTER || !process.env.URL_CHECK_TOKEN) {
  throw new Error('Alguna de las variables de entorno no están definidas');
}

// Contenido a escribir en el archivo de entorno
const envContent = `
export const environment = {
  URL_LOGIN_LOCAL: '${process.env.URL_LOGIN_LOCAL}',
  URL_LOGIN: '${process.env.URL_LOGIN}',
  URL_REGISTER: '${process.env.URL_REGISTER}',
  URL_CHECK_TOKEN: '${process.env.URL_CHECK_TOKEN}',
  URL_BUSINESS_TYPES: '${process.env.URL_BUSINESS_TYPES}',
  CLAVE_SITIO_WEB_RECAPTCHA: '${process.env.CLAVE_SITIO_WEB_RECAPTCHA}',
  URL_RETRIEVE_ACCOUNT: '${process.env.URL_RETRIEVE_ACCOUNT}',
  URL_RESET_PASSWORD: '${process.env.URL_RESET_PASSWORD}',
};
`;

// Crear el directorio de los archivos de entorno si no existe
mkdirSync('./src/environments', { recursive: true });

// Escribir el archivo de entorno principal según el tipo de entorno

  writeFileSync(targetPath, envContent);

  writeFileSync(targetPathDev, envContent);

