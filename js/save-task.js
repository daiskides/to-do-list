let tasks=[];
let arr=[];


let formTask=document.getElementById("tareasForm");
let tareasDiarias=document.getElementById("tableTareasDiarias");
let tareasSemanles=document.getElementById("tableTareasSemanales");
let tareasMensuales=document.getElementById("tableTareasMensuales");
let baddTask=document.getElementById("addTask");

const typetask= formTask.elements["tipoTarea"];
const title= formTask.elements["titulo"];
const priority= formTask.elements["prioridad"];
const estado= formTask.elements["estado"];

const json= load();

try{
	arr=JSON.parse(json);
}catch(error){
	arr=[];
}

tasks= arr?[...arr]:[];


renderTasks();

formTask.addEventListener("submit",(event)=>{
	event.preventDefault();
	addTask();

});


function  addTask(){
	const newTask={
		id:(Math.random()*100).toString(36).slice(3),
		type:typetask.value,
		titleTask:title.value,
		priority:priority.value,
		estado:estado.value,
	};


	tasks.unshift(newTask);
	save(JSON.stringify(tasks));

	renderTasks();
}


	function renderTasks(){
		if (typetask.value==="Diaria") {

			const taskHTML=tasks.map(task=>{
				return `

		  		<tbody>
                <tr class="">
                  <td scope="row">${title.value}</td>
                  <td>${priority.value}</td>
                  <td>${estado.value}</td>
                  <td>
                    <i class="fa-solid fa-trash-can m-1" style="color: red;"></i>
                    <i class="fa-solid fa-pen-to-square m-1"></i>
                  </td>
                </tr>
           </tbody>`;
			});
		

		 tareasDiarias.innerHTML+=	taskHTML.join("");
	
	}

	
		if (typetask.value==="Semanal") {

			const taskHTML=tasks.map(task=>{
				return `

		  		<tbody>
                <tr class="">
                  <td scope="row">${title.value}</td>
                  <td>${priority.value}</td>
                  <td>${estado.value}</td>
                  <td>
                    <i class="fa-solid fa-trash-can m-1" style="color: red;"></i>
                    <i class="fa-solid fa-pen-to-square m-1"></i>
                  </td>
                </tr>
           </tbody>`;
			});
		

		 tareasSemanles.innerHTML+=	taskHTML.join("");
	
	}

		if (typetask.value==="Mensual") {

			const taskHTML=tasks.map(task=>{
				return `

		  		<tbody>
                <tr class="">
                  <td scope="row">${title.value}</td>
                  <td>${priority.value}</td>
                  <td>${estado.value}</td>
                  <td>
                    <i class="fa-solid fa-trash-can m-1" style="color: red;"></i>
                    <i class="fa-solid fa-pen-to-square m-1"></i>
                  </td>
                </tr>
           </tbody>`;
			});
		

		 tareasMensuales.innerHTML+=	taskHTML.join("");
	
	 }


}




function save(data) {
	localStorage.setItem("tasksItems",data);
}

function  load(){
	return localStorage.getItem("tasksItems");
}
		