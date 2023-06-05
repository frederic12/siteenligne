// Code JS ici

// Fonction pour afficher/masquer le menu de navigation sur mobile
function toggleNav() {
	var nav = document.querySelector('nav');
	if (nav.classList.contains('open')) {
		nav.classList.remove('open');
	} else {
		nav.classList.add('open');
	}
}

// Ajout d'un événement au clic sur le bouton de menu sur mobile
var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleNav);

// Fonction pour afficher/masquer la liste des biens immobiliers
function toggleProperties() {
	var propertyList = document.querySelector('.property-list');
	if (propertyList.classList.contains('open')) {
		propertyList.classList.remove('open');
	} else {
		propertyList.classList.add('open');
	}
}

// Ajout d'un événement au clic sur le bouton "Voir tous les biens"
var viewAllPropertiesButton = document.querySelector('.properties button');
viewAllPropertiesButton.addEventListener('click', toggleProperties);


const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');
const items = container.querySelectorAll('img');
const itemCount = items.length;
let itemWidth = items[0].clientWidth;
let currentIndex = 0;

container.style.width = `${itemWidth * itemCount}px`;

function slideTo(index) {
  container.style.transform = `translateX(-${itemWidth * index}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  
  if (currentIndex < 0) {
    currentIndex = itemCount - 1;
  }
  
  slideTo(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  
  if (currentIndex >= itemCount) {
    currentIndex = 0;
  }
  
  slideTo(currentIndex);
});

slideTo(currentIndex);

