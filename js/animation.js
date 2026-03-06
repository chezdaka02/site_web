document.addEventListener('DOMContentLoaded', () => {
    let galleryImages = document.querySelectorAll('.gallery-container img');
    let currentImageIndex = 0;

    if (galleryImages.length === 0) {
        console.error('Aucune image trouvée dans .gallery-container');
        return;
    }

    function rotateImages() {
        galleryImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        galleryImages[currentImageIndex].classList.add('active');
    }

    setInterval(rotateImages, 3000);
});

document.addEventListener("DOMContentLoaded", function(){

let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".slider-dots");
let current = 0;

/* création des points */
slides.forEach((_, index)=>{
  let dot = document.createElement("span");
  dot.addEventListener("click", ()=>showSlide(index));
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".slider-dots span");

function showSlide(index){

  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = index;

  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

/* boutons */

document.querySelector(".next").onclick = ()=>{
  let next = (current + 1) % slides.length;
  showSlide(next);
};

document.querySelector(".prev").onclick = ()=>{
  let prev = (current - 1 + slides.length) % slides.length;
  showSlide(prev);
};

showSlide(0);

});

// Promotions dynamiques
const promotions = [
"10% de réduction sur les agrumes cette semaine !",
"Achetez 1, obtenez 1 gratuit sur les pommes !",
"Offre spéciale : 5€ de réduction pour tout achat supérieur à 50€ !"
];
let promotionIndex = 0;

function updatePromotions() {
const promoCard = document.querySelector(".promo p");
promoCard.textContent = promotions[promotionIndex];
promotionIndex = (promotionIndex + 1) % promotions.length;
}

setInterval(updatePromotions, 5000); // Change la promotion toutes les 5 secondes
