import 'firebase/firestore'
import firebase from 'firebase/app'

var  firebaseConfig = {
  apiKey: "AIzaSyBHdy81J14Ctda_a9f5_SMrs0Gs2dPijgI",
  authDomain: "project-506d7.firebaseapp.com",
  projectId: "project-506d7",
  storageBucket: "project-506d7.appspot.com",
  messagingSenderId: "524485329305",
  appId: "1:524485329305:web:9464181918df09f8bb5308"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}
        
export const firestore = firebase.firestore()
export default firebase