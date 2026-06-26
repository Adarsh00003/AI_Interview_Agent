import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-dcc7b.firebaseapp.com",
  projectId: "interviewiq-dcc7b",
  storageBucket: "interviewiq-dcc7b.firebasestorage.app",
  messagingSenderId: "333318099772",
  appId: "1:333318099772:web:aafa44e78cffac78890439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider}