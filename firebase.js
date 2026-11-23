
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC58ujHvi_ILQkcdas19VGqOieVkwts-oE",
  authDomain: "connectchat-4f551.firebaseapp.com",
  projectId: "connectchat-4f551",
  databaseURL: "https://connectchat-4f551-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "connectchat-4f551.firebasestorage.app",
  messagingSenderId: "300854585653",
  appId: "1:300854585653:web:0736599af32ea19afec47c"
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
