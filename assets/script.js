const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left_arrow = document.querySelector(".arrow_left")

const right_arrow = document.querySelector(".arrow_right")

let current_slide = 0

const parent = document.querySelector(".dots")

for (let i=0; i < slides.length;i++){
	let newDiv = document.createElement("div")
	parent.appendChild(newDiv)
	newDiv.classList.add("dot","dot" + i)
}

slide_selector(current_slide)

left_arrow.addEventListener("click", () => {
	current_slide -= 1
	if(current_slide<0){
		current_slide=slides.length-1
	}
	slide_selector(current_slide)
	console.log("click left left arrow")
})

left_arrow.addEventListener("contextmenu", () => {
	console.log("click right left arrow")
})


right_arrow.addEventListener("click", () => {
	current_slide += 1
	if(current_slide>=slides.length){
		current_slide=0
	}
	slide_selector(current_slide)
	console.log("click left right arrow")
})

right_arrow.addEventListener("contextmenu", () => {
	console.log("click right right arrow")
})


function slide_selector(current_slide){
	let liste_dot = document.querySelectorAll(".dot")
	for (let i=0; i < liste_dot.length;i++){
		liste_dot[i].classList.remove("dot_selected")
	}
	document.querySelector(".dot" + current_slide).classList.add("dot_selected")

	let current_image = slides[current_slide].image
	let current_TagLine = slides[current_slide].tagLine

	let balise_image = document.querySelector(".banner-img")
	let balise_p = document.querySelector("#banner p")

	balise_image.setAttribute("src","./assets/images/slideshow/" + current_image)
	balise_p.innerHTML = current_TagLine

	console.log(current_slide)
}
