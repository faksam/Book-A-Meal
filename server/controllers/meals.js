// import json file
import meals from '../book-meal/meals.json';


/*
 * GET /meal route to retrieve all the meals.
 */
function getMeals(req, res) {
  res.send(meals);
}

// export all the functions
module.exports = {
  getMeals, postMeal, getMeal, deleteMeal, updateMeal
};
