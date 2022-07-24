// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwaMYnCfZGP8tbk_wNw07UChImbXU3f6E",
  authDomain: "the-pitterpatter-app.firebaseapp.com",
  projectId: "the-pitterpatter-app",
  storageBucket: "the-pitterpatter-app.appspot.com",
  messagingSenderId: "991100666603",
  appId: "1:991100666603:web:b2c86d45cd8c7c2a7af4ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;