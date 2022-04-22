import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB01h1ukb0rg4K_hU6alyiE0WpZceUM6LM",
  authDomain: "marketplace-44984.firebaseapp.com",
  projectId: "marketplace-44984",
  storageBucket: "marketplace-44984.appspot.com",
  messagingSenderId: "210030848872",
  appId: "1:210030848872:web:a3d193b97e9dd5218f84dd",
  measurementId: "G-GXM864X3TR"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
