
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDVy-MeGH1BUmH_JF8sHVYuTF35MOjh-yU",
  authDomain: "vue-fire-auth-yt-e45b1.firebaseapp.com",
  projectId: "vue-fire-auth-yt-e45b1",
  storageBucket: "vue-fire-auth-yt-e45b1.appspot.com",
  messagingSenderId: "923344825265",
  appId: "1:923344825265:web:3fd1e8ad890309a8c9ab90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }