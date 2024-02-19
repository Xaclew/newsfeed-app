
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBBUBWDWR2pCOfUjp1Khh5bOSfC_mBsLA4",
    authDomain: "newsfeed2-9b156.firebaseapp.com",
    databaseURL: "https://newsfeed2-9b156-default-rtdb.firebaseio.com",
    projectId: "newsfeed2-9b156",
    storageBucket: "newsfeed2-9b156.appspot.com",
    messagingSenderId: "764936626848",
    appId: "1:764936626848:web:91eb9a9d96b7ba70acdfc5"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
