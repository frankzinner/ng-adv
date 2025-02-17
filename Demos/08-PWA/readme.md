# Progressive Web Apps

## Prerequisites: Skills Api

- Requires [.NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0).
- If you want to use another db engine change connection string in appsettings.json.

Go to folder where `*.csproj` is located, open console and run:

`dotnet restore` and then  
`dotnet run`

For device testing it might be helpful to enable remote access - by default the .Net Core API is only available using `http://localhost:PORT/` and is not listening to the ip of your dev machine.

`dotnet run --urls http://0.0.0.0:5000` or
`dotnet run --urls https://0.0.0.0:5001`

---

### Setup, Base Scaffolding & Getting started

Allow Chrome to use self signed localhost certs:

```
chrome://flags/#allow-insecure-localhost
```

#### Create Project with Service Worker

```
ng new skills-pwa
cd skills-pwa
ng add @angular/pwa --project skills-pwa
```

Make sure you adjust your `environment.prod` to match IP config of your dev machine

```
export const environment = {
  production: false,
  appName: 'skills-pwa',
  googleApiKey: 'AIzaSyBIhPL-ZRldsuzXJoclj-********-0IeY',
  apiURL: 'https://YOURIP:5000/api/',
  userID: 'user001',
  firebase: {
    apiKey: '*****',
    authDomain: 'ngskills.firebaseapp.com',
    databaseURL: 'https://:********:.firebaseio.com',
    projectId: 'ngskills',
    storageBucket: '',
    messagingSenderId: ':********:',
    appId: '1:********:web:6144104923e88db27ab2d8',
    measurementId: 'G-:********:'
  }
};
```

#### Create a build

```
ng build [--delete-output-path false]
```

> Note: Make sure your envirenment.prod.ts matches environment.ts

#### Serving Build

To serve the build you need an http-server. Use `angular-http-server` or `http-server`

```
npm install -g angular-http-server
ng build
cd .\dist\skills-pwa\
angular-http-server
```

##### Use https://127.0.0.1:8080

[ngrok](https://ngrok.com/) is a tool that provides an `https-secured tunnel` to `localhost` that enables
testing your PWAs. Requires registration but is free.

```
ngrok.exe http 8080
```

![ngrok](_images/ngrok.png)

### Tools

#### Firebase Hosting

Register [Firebase Project](https://console.firebase.google.com) and add an App

Copy App Configuration to environment:

![config](_images/firebase-config.png)

Install Firebase Tools

```
npm install -g firebase-tools
```

Login to Firebase:

```
firebase login
```

Init Project for Firebase

```
firebase init
```

Publish to Firebase

```
firebase deploy
```

### Links & Readings

[manifest.json Reference](https://developers.google.com/web/fundamentals/web-app-manifest/)

[Fine Tuning PWAs](https://medium.com/progressive-web-apps/2018-state-of-progressive-web-apps-f7517d43ba70)

[Turn exisitung Angular App into PWA](https://blog.angular-university.io/angular-service-worker/)

[Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers/)
