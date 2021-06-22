import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDgp4_1jccI9lUtylSctXM_c_h6wRrWHNw",
    authDomain: "udemy-vue-firebase-sites-28250.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-28250",
    storageBucket: "udemy-vue-firebase-sites-28250.appspot.com",
    messagingSenderId: "997683555963",
    appId: "1:997683555963:web:1dfbc9a76d1f4ddb68bcde"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// Auth method
const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }