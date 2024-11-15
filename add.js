// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn9zRnilqILrXCCR2U9MNLHoBe4cevVmw",
    authDomain: "fir-app-422a1.firebaseapp.com",
    projectId: "fir-app-422a1",
    storageBucket: "fir-app-422a1.firebasestorage.app",
    messagingSenderId: "193058426962",
    appId: "1:193058426962:web:fd282fbddc3d8d2cd5cf8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const newMessage = push(messages);

  set(newMessage, {
    name: name.value,
    message: message.value,
    created_at: serverTimestamp(),
  });

  name.value = "";
  message.value = "";
});