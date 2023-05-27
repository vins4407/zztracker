
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfuTHVMMcnjp7-qjZX388EhDw_-D-AgEY",
  authDomain: "sleep-tracker-5693f.firebaseapp.com",
  projectId: "sleep-tracker-5693f",
  storageBucket: "sleep-tracker-5693f.appspot.com",
  messagingSenderId: "985732192596",
  appId: "1:985732192596:web:335b86ac21d2aca5b650c1",
  measurementId: "G-89H60PY195"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);