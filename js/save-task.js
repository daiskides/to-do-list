let formTask=document.getElementById("tareasForm");
let tareasDiarias=document.getElementById("tableTareasDiarias");
let tareasSemanles=document.getElementById("tableTareasSemanales");
let tareasMensuales=document.getElementById("tableTareasMensuales");

const typetask= formTask.elements["tipoTarea"];
const title= formTask.elements["titulo"];
const priority= formTask.elements["prioridad"];
const estado= formTask.elements["estado"];	

formTask.addEventListener("submit",(event)=>{
	event.preventDefault();
	console.log("perfecto, funciona");
	console.warn('Valores de los inputs');
	console.log(typetask.value);
	console.log(title.value);
	console.log(priority.value);
	console.log(estado.value);


	localStorage.setItem("TipoDeTarea",typetask.value);
	localStorage.setItem("Titulo",title.value);
	localStorage.setItem("Prioridad",priority.value);
	localStorage.setItem("Estado",estado.value);


	let TipoDeTarea=  localStorage.getItem("TipoDeTarea");
	let TituloDeTarea= localStorage.getItem("Titulo");
	let PrioridadDeTarea= localStorage.getItem("Prioridad");
	let EstadoDeTarea= localStorage.getItem("Estado");

	console.warn('datos obtenidos de localStorage');
	console.log('Tipo de tarea: '+TipoDeTarea);
	console.log('Titulo de la tarea: '+TituloDeTarea);
	console.log('Prioridad de la tarea: '+PrioridadDeTarea);
	console.log('Estado de la tarea: '+EstadoDeTarea);


	function renderTasks(){

		if (TipoDeTarea==="Diaria") {

		tareasDiarias.innerHTML+=		`

		  		<tbody>
                <tr class="">
                  <td scope="row">${TituloDeTarea}</td>
                  <td>${PrioridadDeTarea}</td>
                  <td>${EstadoDeTarea}</td>
                  <td>
                    <i class="fa-solid fa-trash-can m-1" style="color: red;"></i>
                    <i class="fa-solid fa-pen-to-square m-1"></i>
                  </td>
                </tr>
           </tbody>

		`;
	
	}

		if (TipoDeTarea==="Semanal") {

		tareasSemanles.innerHTML+=`

		  		<tbody>
                <tr class="">
                  <td scope="row">${TituloDeTarea}</td>
                  <td>${PrioridadDeTarea}</td>
                  <td>${EstadoDeTarea}</td>
                  <td>
                    <i class="fa-solid fa-trash-can m-1" style="color: red;"></i>
                    <i class="fa-solid fa-pen-to-square m-1"></i>
                  </td>
                </tr>
           </tbody>

		`;
	
	}

	if (TipoDeTarea==="Mensual") {
		tareasMensuales.innerHTML+=`

		  		<tbody>
                <tr class="">
                  <td scope="row">${TituloDeTarea}</td>
                  <td>${PrioridadDeTarea}</td>
                  <td>${EstadoDeTarea}</td>
                  <td>
                    <i class="fa-solid fa-trash-can m-1" style="color: red;"></i>
                    <i class="fa-solid fa-pen-to-square m-1"></i>
                  </td>
                </tr>
           </tbody>

		`;
	}
}




renderTasks();

});




		