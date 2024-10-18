let search = document.querySelector('.fa-magnifying-glass')
let camera = document.querySelector('.fa-camera')

let inp = document.querySelector('.inpt')

let crmdiv= document.querySelector(".camera")

let send = document.querySelector(".send")

let show = document.querySelector(".show")
inp.addEventListener('input', ez)

function ez() {
	if(inp.value !== ""){
		search.style.visibility = 'visible'
		camera.style.visibility= 'hidden'
		show.style.visibility= "hidden"
		send.style.visibility= "visible"
		crmdiv.style.backgroundColor= "#6419DB"
	}
	
	else{
		search.style.visibility = 'hidden'
		camera.style.visibility= 'visible'
		show.style.visibility= "visible"
		send.style.visibility= "hidden"
		crmdiv.style.backgroundColor= "#0195f7"
	}
}

