
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
