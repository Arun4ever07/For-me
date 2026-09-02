/* =====================================================
   ARUN4EVER — FIREBASE CONFIG
   -----------------------------------------------------
   HOW TO FILL THIS (one time only):
   1) Go to https://console.firebase.google.com
   2) Project Overview → Web icon (</>) → register app
   3) Copy the firebaseConfig values and paste below
   4) databaseURL is a MUST — copy it from the top of
      your Realtime Database page if it is missing.
      It looks like: https://xxxx.firebaseio.com
      or:            https://xxxx.firebasedatabase.app
   Full steps: see README.md
   ===================================================== */

const firebaseConfig = {
  apiKey: "PASTE_YOURS_HERE",
  authDomain: "PASTE_YOURS_HERE",
  databaseURL: "PASTE_YOURS_HERE",
  projectId: "PASTE_YOURS_HERE",
  storageBucket: "PASTE_YOURS_HERE",
  messagingSenderId: "PASTE_YOURS_HERE",
  appId: "PASTE_YOURS_HERE"
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
