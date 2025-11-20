// Función para filtrar las noticias por colegio
function filterByCollege() {
  const selectedCollege = document.getElementById('college-select').value;
  const allCards = document.querySelectorAll('.infinite-card');

  allCards.forEach(card => {
    if (selectedCollege === 'todos' || card.dataset.college === selectedCollege) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Función para el buscador (simulada)
function searchFunction() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const allCards = document.querySelectorAll('.infinite-card');

  allCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchQuery)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
