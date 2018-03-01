// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const FB_PROJECT_ID = 'doggo-vote';

export const environment = {
  production: false,
  auth: {
    clientId: 'NKpAhoHylGqADTVJaWuSlnr0UZXlowvU',
    clientDomain: 'openrep.auth0.com',
    audience: 'http://localhost:3000/',
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  },
  firebase: {
    apiKey: '\n' +
    'AIzaSyD8BXp_Qaa2mujud0yI1jous5-7q1kAcug',
    authDomain: `${FB_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${FB_PROJECT_ID}.firebaseio.com`,
    projectId: FB_PROJECT_ID,
    storageBucket: `${FB_PROJECT_ID}.appspot.com`,
    messagingSenderId: '151204660399'
  },
  apiRoot: 'http://localhost:3000/' // e.g., http://localhost:1337/ (DO include trailing slash)
};
