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

let inputClave = document.getElementById("clave");
let inputConfirmClave = document.getElementById("confirmClave");
const inputs = document.querySelectorAll("input");
let checkbox= document.getElementById("checkbox");



checkbox.addEventListener('click',()=>{
	showpassword();
});



function showpassword() {
	if (inputClave.type && inputConfirmClave.type === "password") {
	  inputClave.type = "text";
	  inputConfirmClave.type = "text";
	} else {
	  inputClave.type = "password";
	  inputConfirmClave.type = "password";
	}
}


/* function validarClaves(){
	if (inputClave.value == inputConfirmClave.value) {
		console.log(" son iguales");
	}
	else{
		console.log("no son iguales");
	}
	document.getElementById("form1").submit();
}
 */

const validarPassword = () => { //alcance o scope
	const textError= document.getElementById("textError");

	if(inputClave.value !== inputConfirmClave.value){
		textError.classList.remove("d-none");
		textError.classList.add("d-block");
		textError.classList.remove("text-white");
		textError.classList.add("text-danger");
		
	} else {
		textError.classList.remove("d-block");
		textError.classList.add("d-none");

	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarPassword);
	input.addEventListener('blur', validarPassword);
});


//capturamos el formulario en el dom
const form = document.getElementById('signup');
//le agregamos el evento submit que es para enviar el formulario
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // previene que se recargue la pagina
	
// 	//nos aseguramos que esté funcionando
// 	console.log('si funciona');
// 	//ya que tenemos seleccionado el formulario en una variable llamada form
// 	//podemos acceder a los inputs dentro de esa etiqueta con el attributo name 
// 	//ojo los inputs deben tener name, porque los formularios se acceden por name no por id
// 	const emailField = form.elements['email'];  // accedemos al formulario por el name
// 	const passField = form.elements['pass']; // accedemos al formulario por el name
// 	const confirmPassField = form.elements['confirmPass']; // accedemos al formulario por el name
// 	const firstElement = form.elements[0]; // tambien se puede acceder por index.
	
// 	console.warn('los inputs capturados');
// 	console.log(emailField);
// 	console.log(passField);
// 	console.log(confirmPassField);
// 	console.log(firstElement);

// 	//si queremos el valor de cada uno de elllos
// 	console.warn('Valores de los inputs');

// 	console.log(emailField.value);
// 	console.log(passField.value);
// 	console.log(confirmPassField.value);
// 	console.log(firstElement.value);

// 	//ya teniendo esta información podemos guardarla en donde queramos 
// 	//por ahora vamos a guardarlo en el localstorage investigar que es...


// 	//para esto usamos el metodo set items que recibe clave: valor *como lo hacen los objetos*
// 	localStorage.setItem('email',emailField.value); //clave *email ,valor *email , osea el nombre y el contenido
// 	localStorage.setItem('pass',passField.value);  // clave *pass ,valor *pass

	//para esto usamos el metodo set items que recibe clave: valor *como lo hacen los objetos*
	// localStorage.setItem('correo',emailField.value); //clave *email ,valor *email , osea el nombre y el contenido
	// localStorage.setItem('contraseña',passField.value);  // clave *pass ,valor *pass


// 	//esto lo podemos ver en el devtool / aplication / storage / loccalstorage / local IP 
// 	//aqui hay un capture https://prnt.sc/k9LheUZ19-cG

// 	//y para obtener los datos se usa el metodo getItem
// 	//localStorage.getItem('email') y lo llamamos por el nombre
// 	//localStorage.getItem('pass') 

// 	//entonces vamos a guardar esos datos en unas nuevas variables para usarlas


// 	let correo = localStorage.getItem('email');
// 	let clave = localStorage.getItem('pass');

	// let correo = localStorage.getItem('correo');
	// let clave = localStorage.getItem('contraseña');


// 	//ahora vamos a mostrar esos datos que estamos obteniendo

// 	console.warn('datos obtenidos de localStorage');
// 	console.log('correo: '+correo);
// 	console.log('clave: '+clave);
	
// 	//entonces se pudieran consultar los datos desde el login asi
// 	// y si son correcto dejarlo pasar y si no informarle
	
// });


  form.addEventListener("click",()=>{
	event.preventDefault();
    var email= document.getElementById("correo").value;
    var password= document.getElementById("clave").value;
    createUserWithEmailAndPassword(auth,email,password).then(cred=>{
      alert("Usuario creado");
      sendEmailVerification(auth.currentUser).then(()=>{
        alert('Se ha enviado un correo de verificación')
      });
    }).catch(error => {
      const errorCode= error.code;
      if (errorCode=="auth/email-already-in-use") {
        alert("El correo ya esta en uso");
      }else if(errorCode=="auth/invalid-email"){
        alert("El correo es invalido");
      }else if(errorCode=="auth/weak-password"){
        alert("La contraseña debe tener al menos 6 caracteres");
      }
    });
  });

