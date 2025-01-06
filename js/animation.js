  // Defilement images
let galleryImages = document.querySelectorAll('.gallery-container img');
  let currentImageIndex = 0;

  // Vérifiez si des images sont présentes
  if (galleryImages.length === 0) {
    console.error('Aucune image trouvée dans .gallery-container');
    return;
  }

  function rotateImages() {
    // Supprime la classe active de l'image actuelle
    galleryImages[currentImageIndex].classList.remove('active');

    // Passe à l'image suivante (modulo pour revenir au début)
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

    // Ajoute la classe active à la nouvelle image
    galleryImages[currentImageIndex].classList.add('active');
  }

  // Démarre la rotation des images toutes les 3 secondes
  setInterval(rotateImages, 3000);

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
