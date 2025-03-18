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
    const instructionsList = document.querySelectorAll("#recipe-instructions li");
    instructionsList.forEach((instruction) => {
        instruction.classList.remove("is-done");
    });
}

// animation
function ant() {
    const element = document.getElementById("Ing");
    element.classList.add('animate__animated', "animate__tada");
    setTimeout(() => {
        element.classList.remove("animate__animated", "animate__tada");
    }, 1000);
}

function att() {
    const element = document.getElementById("Ins");
    element.classList.add('animate__animated', "animate__fadeIn");
    setTimeout(() => {
        element.classList.remove("animate__animated", "animate__fadeIn");
    }, 3000);
}

function cakec() {
    const element = document.getElementById("cake");
    element.classList.add('animate__animated', "animate__flipInX");
    setTimeout(() => {
        element.classList.remove("animate__animated", "animate__flipInX");
    }, 3000);
}
