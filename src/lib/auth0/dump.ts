import { dump } from 'auth0-deploy-cli';

dump({
  output_folder: './local',
  format: 'yaml',
  config: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  },
}).then(() => { console.log('Auth0 configuration export successful'); })
  .catch((err) => { console.log('Error during Auth0 configuration export:', err); });