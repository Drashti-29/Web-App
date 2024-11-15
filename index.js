// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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

// Load messages on data event
onValue(messages, (snapshot) => {
  // Create a reference
  const ul = document.getElementById("messages");
  ul.replaceChildren();

  // Loop through messeages and add them to the ul
  snapshot.forEach((childSnapshot) => {
    // Fetch the data from the snapshot
    const childData = childSnapshot.val();

    // Create a text node with message and name
    const text = document.createTextNode(
      childData.message + " ~ " + childData.name
    );

    // Create a li element
    const li = document.createElement("li");

    // Append li and text to the ul
    li.appendChild(text);
    ul.appendChild(li);
  });
});