// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC31bhQontXL5cprksYYOMxTeaEh4VNHhE",
  authDomain: "emajohnproject-504ba.firebaseapp.com",
  projectId: "emajohnproject-504ba",
  storageBucket: "emajohnproject-504ba.appspot.com",
  messagingSenderId: "60961424123",
  appId: "1:60961424123:web:8b3272d0e77bc31f8de65e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
