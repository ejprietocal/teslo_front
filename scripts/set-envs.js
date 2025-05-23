const { writeFileSync, mkdirSync, readFileSync, existsSync } = require('fs');
const dotenv = require('dotenv');

const envDir = './src/environments';
mkdirSync(envDir, { recursive: true });

function generateEnvFile(env, outputPath) {
  const requiredKeys = [
    'URL_LOGIN_LOCAL',
    'URL_LOGIN',
    'URL_REGISTER',
    'URL_CHECK_TOKEN',
    'URL_BUSINESS_TYPES',
    'CLAVE_SITIO_WEB_RECAPTCHA',
    'URL_RETRIEVE_ACCOUNT',
    'URL_RESET_PASSWORD',
    'URL_LOGIN_BUSINESS',

    //category Endpoints
    'URL_CREATE_CATEGORY',
    'URL_GET_CATEGORIES',
    'URL_GET_CATEGORY',
    'URL_DELETE_CATEGORY',
    'URL_UPDATE_CATEGORY',

    //Variants Endpoints
    'URL_CREATE_VARIANTE',
    'URL_GET_VARIANTE',
    // add new varable here
  ];

  for (const key of requiredKeys) {
    if (!env[key]) {
      throw new Error(`Falta la variable ${key} para generar ${outputPath}`);
    }
  }

  const content = `
export const environment = {
  URL_LOGIN_LOCAL: '${env.URL_LOGIN_LOCAL}',
  URL_LOGIN: '${env.URL_LOGIN}',
  URL_REGISTER: '${env.URL_REGISTER}',
  URL_CHECK_TOKEN: '${env.URL_CHECK_TOKEN}',
  URL_BUSINESS_TYPES: '${env.URL_BUSINESS_TYPES}',
  CLAVE_SITIO_WEB_RECAPTCHA: '${env.CLAVE_SITIO_WEB_RECAPTCHA}',
  URL_RETRIEVE_ACCOUNT: '${env.URL_RETRIEVE_ACCOUNT}',
  URL_RESET_PASSWORD: '${env.URL_RESET_PASSWORD}',
  URL_LOGIN_BUSINESS: '${env.URL_LOGIN_BUSINESS}',

  //category Endpoints
  URL_CREATE_CATEGORY: '${env.URL_CREATE_CATEGORY}',
  URL_GET_CATEGORIES: '${env.URL_GET_CATEGORIES}',
  URL_GET_CATEGORY: '${env.URL_GET_CATEGORY}',
  URL_DELETE_CATEGORY: '${env.URL_DELETE_CATEGORY}',
  URL_UPDATE_CATEGORY: '${env.URL_UPDATE_CATEGORY}',

  //Variants Endpoints
  URL_CREATE_VARIANTE: '${env.URL_CREATE_VARIANTE}',
  URL_GET_VARIANTE: '${env.URL_GET_VARIANTE}',

  // add new varable here
};
`;

  writeFileSync(outputPath, content);
  console.log(`✔️  Archivo generado: ${outputPath}`);
}

try {
  // GitHub Actions usa process.env
  if (process.env.CI) {
    console.log('🚀 Ejecutando en GitHub Actions');
    generateEnvFile(process.env, `${envDir}/environment.ts`);
  } else {
    console.log('🛠️ Ejecutando en local');
    const devEnv = dotenv.parse(readFileSync('.env'));
    const prodEnv = existsSync('.env.prod') ? dotenv.parse(readFileSync('.env.prod')) : devEnv;

    generateEnvFile(devEnv, `${envDir}/environment.development.ts`);
    generateEnvFile(prodEnv, `${envDir}/environment.ts`);
  }
} catch (err) {
  console.error('❌ Error generando archivos de entorno:', err.message);
  process.exit(1);
}
