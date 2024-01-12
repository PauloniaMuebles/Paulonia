// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFxHNGJllLKSiLGOq4tVF3fxBcVxhOnGA",
  authDomain: "paulonia-2e707.firebaseapp.com",
  projectId: "paulonia-2e707",
  storageBucket: "paulonia-2e707.appspot.com",
  messagingSenderId: "413925651555",
  appId: "1:413925651555:web:479d594f0e21d91df57456",
  measurementId: "G-KP5DRL6HSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// HTML

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
