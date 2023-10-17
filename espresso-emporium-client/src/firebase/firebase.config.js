// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTUGnzGzMdiDPVJuAP4ozWnbPl6Wl2R4E",
  authDomain: "espresso-emporium-ffec5.firebaseapp.com",
  projectId: "espresso-emporium-ffec5",
  storageBucket: "espresso-emporium-ffec5.appspot.com",
  messagingSenderId: "736679270175",
  appId: "1:736679270175:web:054ca4c67016c86887822a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
