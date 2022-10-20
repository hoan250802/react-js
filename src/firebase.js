
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFIS-K-dOfZMxPQ4emeodc3-3yCP0Gw-Y",
    authDomain: "ig-clone-reactjs-fc128.firebaseapp.com",
    projectId: "ig-clone-reactjs-fc128",
    storageBucket: "ig-clone-reactjs-fc128.appspot.com",
    messagingSenderId: "741658533436",
    appId: "1:741658533436:web:9236c4d61444c427d8ad39",
    measurementId: "G-H33344TQNR"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };