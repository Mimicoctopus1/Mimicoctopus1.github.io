import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyDmbeUfGj7nO6hPwMvJg_LOTD2Hhuuq-dg",
    authDomain: "monogame-410317.firebaseapp.com",
    projectId: "monogame-410317",
    storageBucket: "monogame-410317.appspot.com",
    messagingSenderId: "43000410638",
    appId: "1:43000410638:web:9ba2697046ac7f15f9c25f",
    measurementId: "G-EH2X22QJCV"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
