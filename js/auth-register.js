
let x = document.getElementById("clave");
let y = document.getElementById("confirmClave");
const inputs = document.querySelectorAll("input");




function showpassword() {
	if (x.type && y.type === "password") {
	  x.type = "text";
	  y.type = "text";
	} else {
	  x.type = "password";
	  y.type = "password";
	}
}


function validarClaves(){
	if (x.value == y.value) {
		console.log(" son iguales");
	}
	else{
		console.log("no son iguales");
	}
	document.getElementById("form1").submit();
}


const validarPassword = () => {
	const inputPassword1 = document.getElementById('clave');
	const inputPassword2 = document.getElementById('confirmClave');
	const textError= document.getElementById("textError");

	if(inputPassword1.value !== inputPassword2.value){
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
form.addEventListener('submit', (event) => {
    event.preventDefault(); // previene que se recargue la pagina
	
	//nos aseguramos que esté funcionando
	console.log('si funciona');
	//ya que tenemos seleccionado el formulario en una variable llamada form
	//podemos acceder a los inputs dentro de esa etiqueta con el attributo name 
	//ojo los inputs deben tener name, porque los formularios se acceden por name no por id
	const emailField = form.elements['email']; // accedemos al formulario por el name
	const passField = form.elements['pass']; // accedemos al formulario por el name
	const confirmPassField = form.elements['confirmPass']; // accedemos al formulario por el name
	const firstElement = form.elements[0]; // tambien se puede acceder por index.
	
	console.warn('los inputs capturados');
	console.log(emailField);
	console.log(passField);
	console.log(confirmPassField);
	console.log(firstElement);

	//si queremos el valor de cada uno de elllos
	console.warn('Valores de los inputs');

	console.log(emailField.value);
	console.log(passField.value);
	console.log(confirmPassField.value);
	console.log(firstElement.value);

	//ya teniendo esta información podemos guardarla en donde queramos 
	//por ahora vamos a guardarlo en el localstorage investigar que es...

	//para esto usamos el metodo set items que recibe clave: valor *como lo hacen los objetos*
	localStorage.setItem('email',emailField.value); //clave *email ,valor *email , osea el nombre y el contenido
	localStorage.setItem('pass',passField.value);  // clave *pass ,valor *pass

	//esto lo podemos ver en el devtool / aplication / storage / loccalstorage / local IP 
	//aqui hay un capture https://prnt.sc/k9LheUZ19-cG

	//y para obtener los datos se usa el metodo getItem
	//localStorage.getItem('email') y lo llamamos por el nombre
	//localStorage.getItem('pass') 

	//entonces vamos a guardar esos datos en unas nuevas variables para usarlas

	let correo = localStorage.getItem('email');
	let clave = localStorage.getItem('pass');

	//ahora vamos a mostrar esos datos que estamos obteniendo

	console.warn('datos obtenidos de localStorage');
	console.log('correo: '+correo);
	console.log('clave: '+clave);
	
	//entonces se pudieran consultar los datos desde el login asi
	// y si son correcto dejarlo pasar y si no informarle
	
});