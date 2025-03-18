function highlightIngredients() {
    const ingredientsList = document.querySelectorAll("#recipe-ingredients li");
    ingredientsList.forEach((ingredient, index) => {
      // Highlight every other ingredient (index 1, 3, 5, etc.)
      if (index % 2 == 0) {
        ingredient.classList.add("highlight");
      }
    });
  }