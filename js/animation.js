let galleryImages = document.querySelectorAll('.gallery-container img');
console.log(galleryImages); // Affichez le tableau pour vérifier
  let currentImageIndex = 0;

  function rotateImages() {
    galleryImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    galleryImages[currentImageIndex].classList.add('active');
  }

  setInterval(rotateImages, 3000); // Change d'image toutes les 3 secondes

  // Promotions dynamiques
  const promotions = [
    "10% de réduction sur les agrumes cette semaine !",
    "Achetez 1, obtenez 1 gratuit sur les pommes !",
    "Offre spéciale : 5€ de réduction pour tout achat supérieur à 50€ !"
  ];
  let promotionIndex = 0;

  function updatePromotions() {
    const promoCard = document.querySelector(".promo-card p");
    promoCard.textContent = promotions[promotionIndex];
    promotionIndex = (promotionIndex + 1) % promotions.length;
  }

  setInterval(updatePromotions, 5000); // Change la promotion toutes les 5 secondes
