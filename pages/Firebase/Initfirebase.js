// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"
// import "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkqiQnO0Xz-hWrHRFDArTQYI8YO5JBCeg",
  authDomain: "slider-9b176.firebaseapp.com",
  databaseURL: "https://slider-9b176-default-rtdb.firebaseio.com",
  projectId: "slider-9b176",
  storageBucket: "slider-9b176.appspot.com",
  messagingSenderId: "166007875555",
  appId: "1:166007875555:web:ccc9d24a2e5f37a96da2d6",
  measurementId: "G-7F5VSTRFRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
    
  //   if(!firebase.apps.length){
  //   firebase.initializeApp(firebaseConfig)
  // }

  // const database = firebase.firestore()
  // const auth = firebase.auth()
  
  // export { database ,auth }
  export default app

