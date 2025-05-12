const { writeFileSync, mkdirSync } = require('fs');
const dotenv = require('dotenv');

// Rutas de los archivos de configuración
const targetPathProd = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

// Crear el directorio de los archivos de entorno si no existe
mkdirSync('./src/environments', { recursive: true });

// Función para cargar variables y generar el archivo
function createEnvFile(envPath, targetPath) {
  const result = dotenv.config({ path: envPath });

  if (result.error) {
    throw new Error(`No se pudo cargar ${envPath}`);
  }

  const env = result.parsed;

  // Verificar que las variables obligatorias estén presentes
  const requiredVars = [
    'URL_LOGIN_LOCAL',
    'URL_LOGIN',
    'URL_REGISTER',
    'URL_CHECK_TOKEN',
    'URL_BUSINESS_TYPES',
    'CLAVE_SITIO_WEB_RECAPTCHA',
    'URL_RETRIEVE_ACCOUNT',
    'URL_RESET_PASSWORD',
  ];

  const missing = requiredVars.filter((v) => !env[v]);
  if (missing.length > 0) {
    throw new Error(`Faltan variables en ${envPath}: ${missing.join(', ')}`);
  }

  const envContent = `
export const environment = {
  URL_LOGIN_LOCAL: '${env.URL_LOGIN_LOCAL}',
  URL_LOGIN: '${env.URL_LOGIN}',
  URL_REGISTER: '${env.URL_REGISTER}',
  URL_CHECK_TOKEN: '${env.URL_CHECK_TOKEN}',
  URL_BUSINESS_TYPES: '${env.URL_BUSINESS_TYPES}',
  CLAVE_SITIO_WEB_RECAPTCHA: '${env.CLAVE_SITIO_WEB_RECAPTCHA}',
  URL_RETRIEVE_ACCOUNT: '${env.URL_RETRIEVE_ACCOUNT}',
  URL_RESET_PASSWORD: '${env.URL_RESET_PASSWORD}',
};
`;

  writeFileSync(targetPath, envContent.trim());
}

// Generar ambos archivos
createEnvFile('.env', targetPathDev);
createEnvFile('.env.prod', targetPathProd);
