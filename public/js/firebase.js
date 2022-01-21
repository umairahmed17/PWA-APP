// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB89eHNn46qrnMC3UAAXFuPNlU0k8adpL0",
  authDomain: "pwa-test-eae42.firebaseapp.com",
  projectId: "pwa-test-eae42",
  storageBucket: "pwa-test-eae42.appspot.com",
  messagingSenderId: "707780977473",
  appId: "1:707780977473:web:5d9d916d5d05b31767f7c0",
  measurementId: "G-EZDTZSG1FW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
