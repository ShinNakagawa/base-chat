// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDhupEGTeu47UwPp06iBTJOO9jBBcMc4Ks',
    authDomain: 'chat-demo-70862.firebaseapp.com',
    databaseURL: 'https://chat-demo-70862.firebaseio.com',
    projectId: 'chat-demo-70862',
    storageBucket: '',
    messagingSenderId: '550343730688'    
  }
};
