import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDMlhC8SMIIjusy7W367Gophs1IHpb4w6o",
    authDomain: "twitter-clone-3e691.firebaseapp.com",
    projectId: "twitter-clone-3e691",
    storageBucket: "twitter-clone-3e691.appspot.com",
    messagingSenderId: "430763375338",
    appId: "1:430763375338:web:77c405bb9131027c5bf593"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;