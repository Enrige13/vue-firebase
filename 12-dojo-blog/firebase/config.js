import firebase from 'firebase/app' // core functionality of firebase
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgp4_1jccI9lUtylSctXM_c_h6wRrWHNw",
    authDomain: "udemy-vue-firebase-sites-28250.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-28250",
    storageBucket: "udemy-vue-firebase-sites-28250.appspot.com",
    messagingSenderId: "997683555963",
    appId: "1:997683555963:web:660e3a72c246896068bcde"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }