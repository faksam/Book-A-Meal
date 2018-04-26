// import json file
import meals from '../book-meal/meals.json';


/*
 * GET /meal route to retrieve all the meals.
 */
function getMeals(req, res) {
  res.send(meals);
}

/*
 * POST /meal to save a new meal.
 */
function postMeal(req, res) {
  meals.meals.push(req.body);

  res.status(201).send(meals);
}

/*
 * GET /meal/:id route to retrieve a meal given its id.
 */
function getMeal(req, res) {
  function findMeal(meal) {
    return meal.id === req.params.id;
  }
  res.send(meals.meals.find(findMeal));
}

/*
 * DELETE /meal/:id to delete a meal given its id.
 */
function deleteMeal(req, res) {
  let count = 0;
  meals.meals.forEach((element) => {
    if (element.id === req.params.id) {
      meals.meals.splice(count, 1);
    }
    count += 1;
  });
  res.send(meals);
}

/*
 * PUT /meal/:id to updatea a meal given its id
 */
function updateMeal(req, res) {
  meals.meals.forEach((element, index) => {
    if (element.id === req.params.id) {
      meals.meals[index] = req.body;
    }
  });
  res.send(meals);
}

// export all the functions
module.exports = {
  getMeals, postMeal, getMeal, deleteMeal, updateMeal
};
