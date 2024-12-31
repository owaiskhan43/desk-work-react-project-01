// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpW9FVsDb4_Nrgruew26IqHtz_-gnBbVQ",
  authDomain: "final-project-97b84.firebaseapp.com",
  projectId: "final-project-97b84",
  storageBucket: "final-project-97b84.firebasestorage.app",
  messagingSenderId: "794363832141",
  appId: "1:794363832141:web:9b230181f38d32a658b904",
  measurementId: "G-59V1FW88B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  export{
    getAuth, 
    createUserWithEmailAndPassword
  }