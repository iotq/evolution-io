const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '.env.local');
const envConfig = dotenv.config({ path: envPath }).parsed || {};

const template = `/** Auto Generated */
export const config = ${JSON.stringify(envConfig, null, 2)} as const;
`;

const targetPath = path.resolve(__dirname, 'assets/scripts/config.ts');
fs.writeFileSync(targetPath, template);

console.log(`✅write .env.local to ${targetPath}`);