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
