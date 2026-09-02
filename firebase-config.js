/* =====================================================

   ===================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyB4G_QC1pbk4YrG-cVTQ9SQdKACoX3FZI0",
  authDomain: "forme-49a8f.firebaseapp.com",
  projectId: "forme-49a8f",
  storageBucket: "forme-49a8f.firebasestorage.app",
  messagingSenderId: "571753173003",
  appId: "1:571753173003:web:77fde3d8c277ab59f7370e",
  measurementId: "G-58CLSBNW23"
};

/* Don't touch anything below this line */
const ready = (s) => s && !String(s).includes("PASTE_");

window.IS_CONFIGURED = ready(firebaseConfig.apiKey) && ready(firebaseConfig.databaseURL);

if (window.IS_CONFIGURED && typeof firebase !== "undefined") {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (e) {
    console.error("Firebase init failed:", e);
    window.IS_CONFIGURED = false;
  }
}
