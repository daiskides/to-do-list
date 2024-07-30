let events=[];
let arr=[];


let textPriorityDay= document.getElementById("txtPriorityDay");

const json= load();

try{
	arr=JSON.parse(json);
}catch(error){
	arr=[];
}
events= arr?[...arr]:[];


renderEvents()


function addEvent(){
	if (eventName.value===""|| eventDate.value==="") {
		return;
	}

	if (dateDiff(eventDate.value)<0) {
		return;
	}

	const newEvent={
		id:(Math.random()*100).toString(36).slice(3),
		name:eventName.value,
		date:eventDate.value,
	};


	events.unshift(newEvent);
	save(JSON.stringify(events))

	eventName.value="";

	renderEvents();


}




function renderEvents(){
	const eventsHTML= events.map(event =>{
		return `

		  <tbody>
                <tr class="">
                  <td scope="row">Maquetar el diseño de figma:/</td>
                  <td>Media</td>
                  <td>En proceso, todo lleva tiempo &#9829</td>
                  <td>
                    <i class="fa-solid fa-trash-can m-1" style="color: red;"></i>
                    <i class="fa-solid fa-pen-to-square m-1"></i>
                  </td>
                </tr>
           </tbody>

		`;

	});

		eventsContainer.innerHTML=eventsHTML.join("");

		document.querySelectorAll(".bDelete").forEach(button=>{
			button.addEventListener("click",e=>{
				const id=button.getAttribute("data-id");
				events=events.filter(event=>event.id!==id);
				save(JSON.stringify(events));
				renderEvents()
			});
		})
}

function save(data) {
	localStorage.setItem("items",data)
}

function  load(){
	return localStorage.getItem("items");
}