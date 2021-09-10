import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyAGOx49xQuMlkNeTrU-n8gayv7xtjUhsz0",
        authDomain: "c-67-16c00.firebaseapp.com",
        databaseURL: "https://c-67-16c00-default-rtdb.firebaseio.com",
        projectId: "c-67-16c00",
        storageBucket: "c-67-16c00.appspot.com",
        messagingSenderId: "1003331147",
        appId: "1:1003331147:web:b7f6958123503c2809f7ce"
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase.database();