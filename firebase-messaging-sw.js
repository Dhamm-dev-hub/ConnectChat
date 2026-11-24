importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAU4QAurfKH_-lc5MOXD6QaEXao8th-Ntk",
  authDomain: "connectchat-4f551.firebaseapp.com",
  projectId: "connectchat-4f551",
  databaseURL: "https://connectchat-4f551-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "connectchat-4f551.firebasestorage.app",
  messagingSenderId: "300854585653",
  appId: "1:300854585653:web:0736599af32ea19afec47c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "ConnectChat";
  const options = {
    body: payload.notification?.body || "Naya message aaya hai 💬",
    icon: "./icon-192.png",
    badge: "./icon-192.png"
  };

  self.registration.showNotification(title, options);
});
