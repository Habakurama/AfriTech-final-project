document.addEventListener("DOMContentLoaded", function() {
  const categoryLinks = document.querySelectorAll("#cat-filtering ul li a");
  const eventCards = document.querySelectorAll(".event-card");
  const searchInput = document.querySelector("#search");

  categoryLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const selectedCategory = this.textContent.trim().toLowerCase();

          eventCards.forEach(card => {
              const eventTitle = card.querySelector("h3").textContent.toLowerCase();
              if (eventTitle.includes(selectedCategory)) {
                  card.style.display = "block";
              } else {
                  card.style.display = "none";
              }
          });
      });
  });

  searchInput.addEventListener("input", function() {
      const searchText = searchInput.value.toLowerCase();

      eventCards.forEach(card => {
          const eventTitle = card.querySelector("h3").textContent.toLowerCase();
          if (eventTitle.includes(searchText)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  });
});
