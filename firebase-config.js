const firebaseConfig = {
  apiKey: "AIzaSyB4G_QC1pbk4YrG-cVTQ9SQdKACoX3FZI0",
  authDomain: "forme-49a8f.firebaseapp.com",

  databaseURL: "https://forme-49a8f-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "forme-49a8f",
  storageBucket: "forme-49a8f.firebasestorage.app",
  messagingSenderId: "571753173003",
  appId: "1:571753173003:web:77fde3d8c277ab59f7370e"
};

window.IS_CONFIGURED = true;

if (typeof firebase !== "undefined") {
  try {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase is connected!");
  } catch (error) {
    console.error("❌ Firebase initialization failed:", error);
  }
}
