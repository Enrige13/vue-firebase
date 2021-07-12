import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBrnO7AAXXca8lqSjmtmABJ-j5y677n-LY",
    authDomain: "muso-ninjas-3a645.firebaseapp.com",
    projectId: "muso-ninjas-3a645",
    storageBucket: "muso-ninjas-3a645.appspot.com",
    messagingSenderId: "1338096287",
    appId: "1:1338096287:web:11690a84384d2b5773c0aa"
}; 

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
