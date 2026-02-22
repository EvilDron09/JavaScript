// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

const recipesSection = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((recipesObject) => {

        // console.log(recipesObject)

        let {recipes} = recipesObject;
        for (const recipe of recipes) {

           const divRecipes = document.createElement('div');
           const recipeId = document.createElement('h3');
           recipeId.innerText = `ID: ${recipe.id}`;
           const divItems = document.createElement('div');
           const parameters = document.createElement('p');
            parameters.innerText = `Name: ${recipe.name},
              Calories Per Serving: ${recipe.caloriesPerServing},
              Cook Time Minutes: ${recipe.cookTimeMinutes},
              Cuisine: ${recipe.cuisine},
              Difficulty: ${recipe.difficulty}, 
              Prep Time Minutes: ${recipe.prepTimeMinutes},
              Rating: ${recipe.rating},
              Review Count: ${recipe.reviewCount},
              Servings: ${recipe.servings},
              User ID: ${recipe.userId}`;
            divItems.append(parameters);

            const pIngredients = document.createElement('p');
            pIngredients.innerText = 'Ingredients:';
            const ulIngredients = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const liIngredient = document.createElement('li');
                liIngredient.innerText = `${ingredient}`;
                ulIngredients.append(liIngredient)
            }

            const pInstructions = document.createElement('p');
            pInstructions.innerText = 'Instructions:';
            const ulInstructions = document.createElement('ul');
            for (const point of recipe.instructions) {
                const liPoint = document.createElement('li');
                liPoint.innerText = `${point}`;
                ulInstructions.append(liPoint);
            }

            const pMealType = document.createElement('p');
            pMealType.innerText = `Meal Type: ${recipe.mealType}`;
            const pTags = document.createElement('p');
            pTags.innerText = `Tags: ${recipe.tags}`;

            const imgDish = document.createElement('img');
            imgDish.src = `${recipe.image}`;

            divRecipes.append(recipeId, divItems, pIngredients, ulIngredients, pInstructions ,ulInstructions, pMealType, imgDish, pTags);
            recipesSection.appendChild(divRecipes);
        }

    });
