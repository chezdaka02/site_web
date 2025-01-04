  document.addEventListener('DOMContentLoaded', function () {
    const visitCountElement = document.getElementById('visit-count');

    // Obtenir les données actuelles stockées
    let storedDate = localStorage.getItem('visitDate');
    let visitCount = localStorage.getItem('dailyVisitCount');

    // Date actuelle
    const today = new Date().toISOString().split('T')[0]; // Obtenir la date sous format "YYYY-MM-DD"

    if (storedDate !== today) {
      // Nouvelle journée : réinitialiser le compteur
      visitCount = 1;
      localStorage.setItem('visitDate', today);
    } else {
      // Même journée : incrémenter le compteur
      visitCount = parseInt(visitCount || 0) + 1;
    }

    // Sauvegarder le compteur dans localStorage
    localStorage.setItem('visit-count', visitCount);

    // Mettre à jour l'affichage
    visitCountElement.textContent = visitCount;
  });
