import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWjcjvtStxJXF5LgP2Bq94ww1wGOJrlU4",
    authDomain: "teample-3f33b.firebaseapp.com",
    projectId: "teample-3f33b",
    storageBucket: "teample-3f33b.appspot.com",
    messagingSenderId: "447519192353",
    appId: "1:447519192353:web:7fbbff6aefca015e69ba60",
    measurementId: "G-8JV32JV4QY"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;