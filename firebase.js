import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwUrLhQGOEI0BeErBSrrBhxlFIkbMaLAE",
  authDomain: "e-clone-73986.firebaseapp.com",
  projectId: "e-clone-73986",
  storageBucket: "e-clone-73986.appspot.com",
  messagingSenderId: "456966394596",
  appId: "1:456966394596:web:9bb6b727e8c0f031c752f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);