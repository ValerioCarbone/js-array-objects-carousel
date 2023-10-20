const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const carouselDOMElement = document.querySelector('.carousel');

const thumbnailDOMElement = document.querySelector('.thumbnails');

// - Cicliamo l'array stampando nell'html ogni singolo oggetto
// - Aggiungiamo la classe hide alle immagini non attive
images.forEach((imgInfo) => {
	carouselDOMElement.innerHTML +=
		`<div class="hidden">
	<img src="./${imgInfo.image}">
	<div class="img-text">
	<h3 class="img-title">${imgInfo.title}</h3>
	<p class="img-description">${imgInfo.text}</p>
	</div>
	</div> `

	thumbnailDOMElement.innerHTML += `<img class="not-selected" src="./${imgInfo.image}">`
})

const carouselImagesElements = document.querySelectorAll('.hidden');

const carouselThumbnailsElements = document.querySelectorAll('.not-selected');

// - Aggiungiamo la classe Active all'immagine che vogliamo visualizzare

let currentIndex = 0

let currentCarouselImg = carouselImagesElements[currentIndex];

let currentCarouselThumbnail = carouselThumbnailsElements[currentIndex];

currentCarouselImg.classList.replace('hidden', 'active');

currentCarouselThumbnail.classList.replace('not-selected', 'selected');

// - Creaiamo l'event listener al click delle freccie il quale cambierà l'immagine da visualizzare spostando la classe active
const arrowUpElement = document.getElementById('up-arrow');

const arrowDownElement = document.getElementById('down-arrow');

arrowUpElement.addEventListener('click', () =>{
	clearInterval(playStatus)

	clearInterval(reversePlayStatus)

	reverse
})

arrowDownElement.addEventListener('click', () =>{
	clearInterval(playStatus)

	clearInterval(reversePlayStatus)

	play
})

const playButtonDOMElement = document.getElementById('play-btn');

const stopButtonDOMElement = document.getElementById('stop-btn');

let playStatus = setInterval(play, 3000);

let reversePlayStatus;

playButtonDOMElement.addEventListener('click', function () {

	clearInterval(reversePlayStatus)

	playStatus = setInterval(play, 3000)
})

stopButtonDOMElement.addEventListener('click', function () {
	clearInterval(playStatus)

	clearInterval(reversePlayStatus)
})

const reverseDOMElement = document.getElementById('reverse-btn')

reverseDOMElement.addEventListener('click', function () {

	clearInterval(playStatus)

	reversePlayStatus = setInterval(reverse, 3000)
})


// FUNZIONI

function play() {

	currentCarouselImg.classList.replace('active', 'hidden')

	currentCarouselThumbnail.classList.replace('selected', 'not-selected')

	currentIndex++

	if (currentIndex > carouselImagesElements.length - 1) {
		currentIndex = 0
	}

	currentCarouselImg = carouselImagesElements[currentIndex]

	currentCarouselThumbnail = carouselThumbnailsElements[currentIndex]

	currentCarouselImg.classList.replace('hidden', 'active')

	currentCarouselThumbnail.classList.replace('not-selected', 'selected')
}



function reverse() {

	currentCarouselImg.classList.replace('active', 'hidden')

	currentCarouselThumbnail.classList.replace('selected', 'not-selected')

	currentIndex--

	if (currentIndex < 0) {
		currentIndex = carouselImagesElements.length - 1
	}

	currentCarouselImg = carouselImagesElements[currentIndex]

	currentCarouselThumbnail = carouselThumbnailsElements[currentIndex]

	currentCarouselImg.classList.replace('hidden', 'active')

	currentCarouselThumbnail.classList.replace('not-selected', 'selected')
}
