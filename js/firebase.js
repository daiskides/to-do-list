
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  import { sendEmailVerification, getAuth,
	createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA_pt-HKbsJcKENK6GXFcDWfgl2dDI4MZU",
    authDomain: "todolist-1bf0f.firebaseapp.com",
    projectId: "todolist-1bf0f",
    storageBucket: "todolist-1bf0f.appspot.com",
    messagingSenderId: "421442194762",
    appId: "1:421442194762:web:fbd360c16f7040c68885b3",
    measurementId: "G-TN678Z6THT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth= getAuth(app);

