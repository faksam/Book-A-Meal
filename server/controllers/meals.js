// import json file
import meals from '../book-meal/meals.json';

/*
 * POST /meal to save a new meal.
 */
function postMeal(req, res) {
  meals.meals.push(req.body);

  res.status(201).send(meals);
}

// export all the functions
module.exports = {
  getMeals, postMeal, getMeal, deleteMeal, updateMeal
};
