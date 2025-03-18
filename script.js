// higlight function
function highlightIngredients() {
    const ingredientsList = document.querySelectorAll("#recipe-ingredients li");
    ingredientsList.forEach((ingredient, index) => {
      // Highlight every other ingredient (index 1, 3, 5, etc.)
      if (index % 2 == 0) {
        ingredient.classList.add("highlight");
      }
    });
  }
  
// check function
function checkInstructions() {
    const instructionsList = document.querySelectorAll("#recipe-instructions li");
    let delay = 0; 
    instructionsList.forEach(instruction => {
        setTimeout(() => {
            instruction.classList.add("is-done"); 
        }, delay);
        delay += 3000; 
    });
  }

// reset function
  function resetInstructions() {
   
    const ingredientsList = document.querySelectorAll("#recipe-ingredients li");
    ingredientsList.forEach((ingredient) => {
        ingredient.classList.remove("highlight");
    });

    
    const instructionsList = document.querySelectorAll("#recipe-instructions li");
    instructionsList.forEach((instruction) => {
        instruction.classList.remove("is-done");
    });
}
