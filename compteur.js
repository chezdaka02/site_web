document.addEventListener('DOMContentLoaded', function () {
    const visitCountElement = document.getElementById('visitCount');

    // Récupérer le compteur de visites depuis le stockage local
    let visitCount = localStorage.getItem('visitCount');

    if (!visitCount) {
      visitCount = 1; // Première visite
    } else {
      visitCount = parseInt(visitCount) + 1; // Incrémenter le compteur
    }

    // Mettre à jour l'affichage
    visitCountElement.textContent = visitCount;

    // Sauvegarder le compteur dans le stockage local
    localStorage.setItem('visitCount', visitCount);
  });
