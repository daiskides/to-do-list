import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getAuth, 
    signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
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

const login=document.getElementById("login");
login.addEventListener("click",()=>{
    var email= document.getElementById("usuario").value;
    var password= document.getElementById("clave").value;
    signInWithEmailAndPassword(auth,email,password).then(cred=>{
      alert("Usuario logeado");
      location.href="../dashboard/home.html";
      console.log(cred,user)
    }).catch(error => {
      const errorCode= error.code;
      if (errorCode=="auth/invalid-email") {
        alert("Correo invalido");
      }else if(errorCode=="auth/user-disable"){
        alert("El usuario ha sido deshabilitado");
      }else if(errorCode=="auth/user-not-found"){
        alert("El usuario no existe");
      }else if(errorCode=="auth/wrong-password"){
        alert("Contraseña incorrecta");
      }
      
    });
  });