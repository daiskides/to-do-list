
let x = document.getElementById("clave");
let y = document.getElementById("confirmClave");


function showpassword() {
	if (x.type && y.type === "password") {
	  x.type = "text";
	  y.type = "text";
	} else {
	  x.type = "password";
	  y.type = "password";
	}
}

