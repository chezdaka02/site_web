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

document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {

  const track = wrapper.querySelector(".carousel-track");
  const leftBtn = wrapper.querySelector(".left");
  const rightBtn = wrapper.querySelector(".right");

  rightBtn.addEventListener("click", () => {
    track.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", () => {
    track.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

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
