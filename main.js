console.log('Hello World!');

let b2 = document.querySelector(".b2").onclick = function() {
	window.location.href = "msg.html"
}

let count = document.querySelector(".count")
let d1 = document.querySelector(".b1")

let follow = false

d1.addEventListener("click",
function chalao()
{
	if (follow === false) {
		d1.innerText= "Following"
	follow = true;
			d1.style.backgroundColor = "#212121"
count.innerText = "1"

	}
	else{
		follow = false ;
		d1.innerText= "Follow"
			d1.style.backgroundColor = "#0195f7"
			count.innerText = "0"
	}
}
)


	// suggestions script
	
	let suggest = document.querySelector(".fa-user-plus")
	let cards = document.querySelector(".suggestions")
	
let cardon = false;
suggest.addEventListener("click",
function play() {
	if (cardon===false) {
		cards.style.display = "flex";
		cardon = true
	} else {
		cards.style.display = "none";
		cardon = false
	}
}
)

