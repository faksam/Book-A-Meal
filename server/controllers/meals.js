// import json file
import meals from '../book-meal/meals.json';

export default class mealsController {
  /*
   * GET /meal route to retrieve all the meals.
   */
  static getMeals(req, res) {
    res.send(meals);
  }

  /*
   * POST /meal to save a new meal.
   */
  static postMeal(req, res) {
    const newMeal = {};

    newMeal.id = meals.meals.length + 1;
    newMeal.name = req.body.name;
    newMeal.description = req.body.description;
    newMeal.price = req.body.price;
    newMeal.category = req.body.category;
    newMeal.status = req.body.status;
    newMeal.pictures = req.body.pictures;
    newMeal.caterer_id = '2';

    meals.meals.push(newMeal);
    res.status(201).send(newMeal);
  }

  /*
   * GET /meal/:id route to retrieve a meal given its id.
   */
  static getMeal(req, res) {
    function findMeal(meal) {
      return meal.id === req.params.id;
    }
    res.send(meals.meals.find(findMeal));
  }

  /*
   * DELETE /meal/:id to delete a meal given its id.
   */
  static deleteMeal(req, res) {
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
  static updateMeal(req, res) {
    let mealChecker = false;
    meals.meals.forEach((element, index) => {
      mealChecker = true;
      if (element.id === req.params.id) {
        element.name = req.body.name;
        element.description = req.body.description;
        element.price = req.body.price;
        element.category = req.body.category;
        element.status = req.body.status;
        element.pictures = req.body.pictures;
        meals.meals[index] = element;
        return res.status(200).send(element);
      }
    });
    if (!mealChecker) {
      res.status(404).send(meals);
    }
  }
}
