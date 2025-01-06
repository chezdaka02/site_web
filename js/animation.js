

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
