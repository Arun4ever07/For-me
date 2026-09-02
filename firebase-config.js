const firebaseConfig = {
  apiKey: "AIzaSyB4G_QC1pbk4YrG-cVTQ9SQdKACoX3FZI0",
  authDomain: "forme-49a8f.firebaseapp.com",

  // IMPORTANT:
  // Replace the value below with the EXACT URL from
  // Firebase → Build → Realtime Database.
databaseURL: "https://forme-49a8f-default-rtdb.firebaseio.com",

  projectId: "forme-49a8f",
  storageBucket: "forme-49a8f.firebasestorage.app",
  messagingSenderId: "571753173003",
  appId: "1:571753173003:web:77fde3d8c277ab59f7370e"
};

window.IS_CONFIGURED =
  firebaseConfig.apiKey !== "PASTE_YOURS_HERE" &&
  firebaseConfig.databaseURL !== "PASTE_YOUR_REALTIME_DATABASE_URL_HERE" &&
  firebaseConfig.databaseURL.startsWith("https://");

if (window.IS_CONFIGURED && typeof firebase !== "undefined") {
  try {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase connected successfully!");
  } catch (error) {
    console.error("❌ Firebase connection error:", error);
    window.IS_CONFIGURED = false;
  }
}
