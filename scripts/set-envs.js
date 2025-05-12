const { writeFileSync, mkdirSync } = require('fs');
const dotenv = require('dotenv');

// Rutas destino
const envDir = './src/environments';
const devPath = `${envDir}/environment.development.ts`;
const prodPath = `${envDir}/environment.ts`;

// Crear carpeta si no existe
mkdirSync(envDir, { recursive: true });

// Función para cargar y escribir un environment
function generateEnv(envFile, targetPath) {
  const envConfig = dotenv.config({ path: envFile }).parsed;

  if (!envConfig) {
    throw new Error(`No se pudo cargar el archivo ${envFile}`);
  }

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

  for (const key of requiredVars) {
    if (!envConfig[key]) {
      throw new Error(`Falta la variable ${key} en ${envFile}`);
    }
  }

  const content = `export const environment = {
  URL_LOGIN_LOCAL: '${envConfig.URL_LOGIN_LOCAL}',
  URL_LOGIN: '${envConfig.URL_LOGIN}',
  URL_REGISTER: '${envConfig.URL_REGISTER}',
  URL_CHECK_TOKEN: '${envConfig.URL_CHECK_TOKEN}',
  URL_BUSINESS_TYPES: '${envConfig.URL_BUSINESS_TYPES}',
  CLAVE_SITIO_WEB_RECAPTCHA: '${envConfig.CLAVE_SITIO_WEB_RECAPTCHA}',
  URL_RETRIEVE_ACCOUNT: '${envConfig.URL_RETRIEVE_ACCOUNT}',
  URL_RESET_PASSWORD: '${envConfig.URL_RESET_PASSWORD}',
};
`;

  writeFileSync(targetPath, content);
  console.log(`✅ Archivo generado: ${targetPath}`);
}

// Generar ambos
generateEnv('.env', devPath);
generateEnv('.env.prod', prodPath);
